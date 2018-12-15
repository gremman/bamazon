# Using BAmazon

## Objective
This app is used to run BAmazon, which allows you to see a table of products and make a purchase from the inventory. The order information, including quantity and total cost will be displayed. 

## Before You Use this App
    Install the following packages using the terminal:
        - [] package.json: "npm init -y"
        - [] Inquirer: "npm i inquirer" 
        - [] MYSQL: "npm i mysql" 

##MySQL Database
The mySQL BAmazon database contains a table entitled `products`.
    
    The products table contains the following columns:
   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

    The table has 10 items in it -> an assortment of products from the home decor, wall art, and kitchen departments

##Node Application `bAmazonCustomer.js` 
Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

![Inventory](/screenshots/current_inventory.png)


    The app wil prompt users with two messages:

   * First, the app will ask them the ID (#1-10) of the product they would like to buy.
   * Second, the customer will be asked how many units of the product they would like to buy.

![Item Order](/screenshots/item_order.jpg)

    If the user provides an invalid ID number, they will receive an error:

![Invalid ID](/screenshots/invalid_id.jpg)

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.
    
    If the store is able to fulfill the order, two things will occur:

   * The mySQL database will be updated with the new quantities.

![Updated Inventory](/bamazon/screenshots/updated_inventory.jpg)

   * The customer will see the total cost of their purchase.
   
![Cost of Purchase](/screenshots/item_cost.jpg)
   
   If the store does not have enough product, the app will log a phrase `Insufficient product in inventory!`, and then prevent the order from going through.

![Not Enough Inventory](/screenshots/insufficient_quantity.jpg)

    