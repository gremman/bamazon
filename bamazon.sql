DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER (10) NOT NULL,
    PRIMARY KEY(item_id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("tabletop bowls", "home decor", 29.99, 1000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("large matted frames", "wall art", 139.99, 500);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("waffle maker", "kitchen", 59.99, 2000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("copper pot set", "kitchen", 229.99, 1500);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("wooden wall scones", "wall art", 29.99, 1000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("mantle plates", "home decor", 39.99, 2000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("panini maker", "kitchen", 59.99, 2000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("ocean painting", "wall art", 129.99, 1000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("scented gold candles", "home decor", 19.99, 2000);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("standing mixer", "kitchen", 199.99, 1800);

SELECT * FROM products