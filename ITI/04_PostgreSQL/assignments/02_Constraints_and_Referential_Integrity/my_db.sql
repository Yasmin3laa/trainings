-- ==================================================
-- Constraints and Referential Integrity
-- ==================================================

-- ==================================================
-- Part A: CHECK and UNIQUE
-- ==================================================

CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    price NUMERIC CHECK (price > 0)
);

-- Test CHECK constraint
-- This should be rejected because price must be greater than 0.

INSERT INTO products (product_id, name, price)
VALUES (1, 'Laptop', -500);


-- Test UNIQUE constraint
-- First product should be inserted successfully.

INSERT INTO products (product_id, name, price)
VALUES (1, 'Laptop', 1500);

-- Second product with the same name should be rejected.

INSERT INTO products (product_id, name, price)
VALUES (2, 'Laptop', 1200);


-- ==================================================
-- Part B: DEFAULT
-- ==================================================

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    product_id INTEGER REFERENCES products(product_id),
    quantity NUMERIC DEFAULT 1
);

-- Insert an order without specifying quantity.
-- quantity should automatically be set to 1.

INSERT INTO orders (order_id, product_id)
VALUES (1, 1);

-- Check the result
SELECT * FROM orders;


-- ==================================================
-- Part C: Foreign Key Enforcement
-- ==================================================

-- Insert a second valid product.

INSERT INTO products (product_id, name, price)
VALUES (2, 'Keyboard', 100);

-- Insert two valid orders.

INSERT INTO orders (order_id, product_id, quantity)
VALUES (2, 1, 2);

INSERT INTO orders (order_id, product_id, quantity)
VALUES (3, 2, 3);

-- Attempt to insert an order referencing
-- a product that does not exist.
-- This should be rejected.

INSERT INTO orders (order_id, product_id, quantity)
VALUES (4, 999, 1);


-- ==================================================
-- Part D: Referential Integrity on Delete
-- ==================================================

-- Attempt to delete a product that has existing orders.
-- This should be rejected because the foreign key
-- prevents deleting a referenced product.

DELETE FROM products
WHERE product_id = 1;

-- Delete the orders referencing the product first.

DELETE FROM orders
WHERE product_id = 1;

-- Now the product can be deleted.

DELETE FROM products
WHERE product_id = 1;


-- ==================================================
-- Part E: RESTRICT versus CASCADE
-- ==================================================

-- Recreate the orders table using ON DELETE CASCADE.

DROP TABLE orders;

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    product_id INTEGER
        REFERENCES products(product_id)
        ON DELETE CASCADE,
    quantity NUMERIC DEFAULT 1
);

-- Insert a product.

INSERT INTO products (product_id, name, price)
VALUES (3, 'Mouse', 50);

-- Insert an order referencing the product.

INSERT INTO orders (order_id, product_id, quantity)
VALUES (5, 3, 2);

-- Check the order before deleting the product.

SELECT * FROM orders
WHERE product_id = 3;

-- Delete the product.
-- The related order will be deleted automatically.

DELETE FROM products
WHERE product_id = 3;

-- Confirm that the order was deleted automatically.

SELECT * FROM orders
WHERE product_id = 3;


-- ==================================================
-- Safety Exercise
-- ==================================================

-- Always check which orders reference a product
-- before deleting it, especially when using CASCADE.

SELECT *
FROM orders
WHERE product_id = 1;


-- ==================================================
-- Practical Challenge: Categories
-- ==================================================

-- Create categories table.

CREATE TABLE categories (
    category_id INTEGER PRIMARY KEY,
    category_name TEXT NOT NULL UNIQUE
);


-- Insert at least three categories.

INSERT INTO categories (category_id, category_name)
VALUES
    (1, 'Electronics'),
    (2, 'Accessories'),
    (3, 'Computers');


-- Add category_id column to products.

ALTER TABLE products
ADD COLUMN category_id INTEGER;


-- Add a foreign key constraint with ON DELETE RESTRICT.

ALTER TABLE products
ADD CONSTRAINT fk_products_category
FOREIGN KEY (category_id)
REFERENCES categories(category_id)
ON DELETE RESTRICT;


-- Assign categories to existing products.

UPDATE products
SET category_id = 1
WHERE product_id = 2;


-- Insert another product and assign a category.

INSERT INTO products (product_id, name, price, category_id)
VALUES (4, 'Monitor', 300, 1);


-- Check products and their categories.

SELECT
    p.product_id,
    p.name,
    p.price,
    c.category_name
FROM products p
JOIN categories c
    ON p.category_id = c.category_id;


-- Attempt to delete a category that is still in use.
-- This should be rejected because of ON DELETE RESTRICT.

DELETE FROM categories
WHERE category_id = 1;


-- The category cannot be deleted while products
-- are still referencing it.
