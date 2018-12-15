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

Product Inventory: ![Product Inventory](/screenshots/current_inventory.png)


    The app wil prompt users with two messages:

   * First, the app will ask them the ID (#1-10) of the product they would like to buy.
   * Second, the customer will be asked how many units of the product they would like to buy.

Item Order: ![Item Order](/screenshots/item_order.png)

    If the user provides an invalid ID number, they will receive an error:

Invalid ID: ![Invalid ID](/screenshots/invalid_ID.png)

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.
    
    If the store is able to fulfill the order, two things will occur:

   * The mySQL database will be updated with the new quantities.

Updated Inventory: ![Updated Inventory](/screenshots/updated_inventory.png)

   * The customer will see the total cost of their purchase.
   
Total Purchase Cost: ![Cost of Purchase](/screenshots/item_cost.png)
   
   If the store does not have enough product, the app will log a phrase `Insufficient product in inventory!`, and then prevent the order from going through.

Insufficient Product: ![Not Enough Inventory](/screenshots/insufficient_quantity.png)

    