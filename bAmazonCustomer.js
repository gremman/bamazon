// Install needed packages
var inquirer = require("inquirer");
var mysql = require("mysql");

// Connect to mySQL database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "password",
	database: "bamazon"
});

// Confirm that positive inputs are being made
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return "Please enter a positive integer";
	}
}

// First prompt for item ID# & Quantity
function promptItemInfo() {

	inquirer.prompt([
        // Item ID#
		{
			type: "input",
			name: "item_id",
			message: "Please enter the item ID# (1-10) for the product you would like to purchase.",
			validate: validateInput,
			filter: Number
        },
        
        // Item Quantity
		{
			type: "input",
			name: "quantity",
			message: "How many of this product would you like to purchase?",
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;

		// To confirm item ID exists in the desired quantity
		var queryStr = "SELECT * FROM products WHERE ?";

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;
			if (data.length === 0) {
				console.log("ERROR: Invalid Item ID. Please select an item ID between 1 & 10.");
				displayInventory();

			} else {
				var productInfo = data[0];

			// If the quantity requested is in stock
				if (quantity <= productInfo.stock_quantity) {
					console.log("The product you requested is being ordered!");

					// Updating
					var updateQueryStr = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log("Your order has been placed! Your total is $" + productInfo.price * quantity);
						console.log("Thank you for shopping with us!");
						console.log("-----------------------------------");

						// End the database connection
						connection.end();
					})
				} else {
					console.log("Sorry, there is not enough product in stock, your order can not be placed.");
					console.log('Please decrease the number of items purchased.');
					console.log("-----------------------------------");

					displayInventory();
				}
			}
		})
	})
}

// Display current inventory 
function displayInventory() {

	queryStr = 'SELECT * FROM products';

	// DB query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;
        
        console.log("-----------------------------------");
		console.log("Current Inventory: ");
		console.log("-----------------------------------");

		var details = "";
		for (var i = 0; i < data.length; i++) {
			details = "";
			details += "Item ID: " + data[i].item_id + "  |  ";
			details += "Product Name: " + data[i].product_name + "  |  ";
			details += "Department: " + data[i].department_name + "  |  ";
			details += "Price: $" + data[i].price + "\n";

			console.log(details);
		}

        console.log("-----------------------------------");

	  	//Prompt customer for item info
	  	promptItemInfo();
	})
}

// Execute main application
function runBamazon() {

	displayInventory();
}

runBamazon();