-- ==================================================
-- PostgreSQL Practical Laboratory
-- Modifying Tables, Queries, Aggregates, Joins
-- and Database Maintenance
-- ==================================================

-- ==================================================
-- Part A: Modifying the Table
-- ==================================================

-- 1. Add a new email column

ALTER TABLE members
ADD COLUMN email TEXT;


-- 2. Add a CHECK constraint ensuring age is at least 0

ALTER TABLE members
ADD CONSTRAINT age_non_negative
CHECK (age >= 0);


-- 3. Rename address column to city

ALTER TABLE members
RENAME COLUMN address TO city;


-- 4. Drop the email column again

ALTER TABLE members
DROP COLUMN email;


-- ==================================================
-- Part B: Sorting, Aliases, and DISTINCT
-- ==================================================

-- 5. List all members ordered by age
-- from oldest to youngest

SELECT *
FROM members
ORDER BY age DESC;


-- 6. List all members ordered by city,
-- then by std_name

SELECT *
FROM members
ORDER BY city, std_name;


-- 7. List all members with NULL ages appearing last

SELECT *
FROM members
ORDER BY age DESC NULLS LAST;


-- 8. Display std_name using the alias "member name"

SELECT std_name AS "member name"
FROM members;


-- 9. Concatenate std_name and city
-- into a single readable column

SELECT
    std_name || ' - ' || city AS "member information"
FROM members;


-- 10. Display the distinct list of cities

SELECT DISTINCT city
FROM members;


-- 11. Use a table alias to display std_id
-- and std_name for members with std_id > 5

SELECT
    m.std_id,
    m.std_name
FROM members AS m
WHERE m.std_id > 5;


-- ==================================================
-- Part C: Aggregate Functions and Pagination
-- ==================================================

-- 12. Count how many members live in each city

SELECT
    city,
    COUNT(*) AS member_count
FROM members
GROUP BY city;


-- 13. Find the average age per city

SELECT
    city,
    AVG(age) AS average_age
FROM members
GROUP BY city;


-- 14. Display only cities with more than one member

SELECT
    city,
    COUNT(*) AS member_count
FROM members
GROUP BY city
HAVING COUNT(*) > 1;


-- 15. Find the minimum and maximum salary

SELECT
    MIN(salary) AS minimum_salary,
    MAX(salary) AS maximum_salary
FROM members;


-- 16. Display the first 5 members ordered by std_id

SELECT *
FROM members
ORDER BY std_id
LIMIT 5;


-- 17. Display the next 5 members using OFFSET

SELECT *
FROM members
ORDER BY std_id
LIMIT 5
OFFSET 5;


-- 18. Calculate the OFFSET for page 4
-- with a page size of 5
--
-- Formula:
-- OFFSET = (page_number - 1) * page_size
--
-- OFFSET = (4 - 1) * 5
-- OFFSET = 15


SELECT *
FROM members
ORDER BY std_id
LIMIT 5
OFFSET 15;


-- ==================================================
-- Part D: SQL Essentials
-- ==================================================

-- 19. SELECT without a semicolon
--
-- Example:
--
-- SELECT *
-- FROM members
--
-- In psql, the command is not executed immediately.
-- psql waits for the semicolon to complete the statement.


-- 20. Column alias using AS and without AS

SELECT
    std_name AS member_name,
    city city_name
FROM members;


-- 21. Concatenate text using ||

SELECT
    std_name || ' lives in ' || city AS information
FROM members;


-- Using + for text concatenation produces an error.
--
-- Example:
--
-- SELECT std_name + city
-- FROM members;
--
-- PostgreSQL does not use + for string concatenation.


-- ==================================================
-- Part E: Creating New Tables
-- ==================================================

-- 22. Create suppliers table

CREATE TABLE suppliers (
    supplier_id SERIAL PRIMARY KEY,
    name TEXT
);


-- 23. Insert three suppliers without specifying IDs

INSERT INTO suppliers (name)
VALUES
    ('ABC Supplies'),
    ('Global Suppliers'),
    ('Tech Solutions');


-- Verify automatically generated IDs

SELECT *
FROM suppliers
ORDER BY supplier_id;


-- 24. Create products table

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC CHECK (price > 0),
    supplier_id INTEGER
        REFERENCES suppliers(supplier_id)
);


-- Create orders table

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    product_id INTEGER
        REFERENCES products(product_id),
    quantity INTEGER DEFAULT 1
);


-- 25. Insert at least 4 products

INSERT INTO products (name, price, supplier_id)
VALUES
    ('Laptop', 1500, 1),
    ('Keyboard', 100, 2),
    ('Mouse', 50, 2),
    ('Monitor', 300, 3);


-- Insert at least 3 orders
-- Product 4 will intentionally have no orders.

INSERT INTO orders (product_id, quantity)
VALUES
    (1, 2),
    (2, 3),
    (1, 1);


-- Verify products

SELECT *
FROM products;


-- Verify orders

SELECT *
FROM orders;


-- ==================================================
-- Part F: Joins
-- ==================================================

-- 26. INNER JOIN
-- List each order with its product name

SELECT
    o.order_id,
    p.name AS product_name,
    o.quantity
FROM orders AS o
INNER JOIN products AS p
    ON o.product_id = p.product_id;


-- 27. LEFT JOIN
-- List every product, including products
-- that have never been ordered

SELECT
    p.product_id,
    p.name AS product_name,
    o.order_id,
    o.quantity
FROM products AS p
LEFT JOIN orders AS o
    ON p.product_id = o.product_id
ORDER BY p.product_id;


-- 28. FULL JOIN
-- Returns all matching rows plus unmatched rows
-- from BOTH tables.
--
-- Compared to LEFT JOIN:
-- LEFT JOIN returns all products and matching orders,
-- while FULL JOIN can also return orders whose product
-- does not have a matching product row.

SELECT
    p.product_id,
    p.name AS product_name,
    o.order_id,
    o.quantity
FROM products AS p
FULL JOIN orders AS o
    ON p.product_id = o.product_id;


-- 29. CROSS JOIN
-- Number of rows should equal:
--
-- rows(products) × rows(orders)

SELECT
    p.name AS product_name,
    o.order_id
FROM products AS p
CROSS JOIN orders AS o;


-- Verify the number of products

SELECT COUNT(*) AS product_count
FROM products;


-- Verify the number of orders

SELECT COUNT(*) AS order_count
FROM orders;


-- Calculate the expected CROSS JOIN row count

SELECT
    (SELECT COUNT(*) FROM products) *
    (SELECT COUNT(*) FROM orders)
    AS expected_cross_join_rows;


-- ==================================================
-- Part G: DELETE, TRUNCATE, and DROP
-- ==================================================

-- 30. Before DELETE:
-- Always check the row first.

SELECT *
FROM orders
WHERE order_id = 3;


-- Delete a single order

DELETE FROM orders
WHERE order_id = 3;


-- PostgreSQL should display:
-- DELETE 1


-- Verify the deletion

SELECT *
FROM orders
WHERE order_id = 3;


-- 31. Before TRUNCATE:
-- Verify the current data.

SELECT *
FROM orders;


-- Remove all rows from orders

TRUNCATE TABLE orders;


-- Verify that the table is empty

SELECT *
FROM orders;


-- The table still exists.


-- 32. Before DROP:
-- Confirm that the table exists

\dt


-- Drop the orders table

DROP TABLE orders;


-- Confirm that orders no longer exists

\dt


-- ==================================================
-- Lab Safety Exercise
-- ==================================================

-- Always use SELECT before UPDATE or DELETE.

-- Example:

SELECT *
FROM members
WHERE std_id = 5;


-- Never run:
--
-- DELETE FROM members;
--
-- without verifying the affected rows first.
--
-- UPDATE or DELETE without WHERE affects
-- every row in the table.
--
-- TRUNCATE removes all rows from a table.
--
-- DROP TABLE removes the table itself.


-- ==================================================
-- Practical Challenge
-- ==================================================

-- List every product together with:
-- 1. Number of times it has been ordered
-- 2. Average order quantity
-- 3. Include products with no orders
-- 4. Display only products ordered two or more times
-- 5. Sort by number of orders descending

SELECT
    p.product_id,
    p.name AS product_name,
    COUNT(o.order_id) AS order_count,
    AVG(o.quantity) AS average_quantity
FROM products AS p
LEFT JOIN orders AS o
    ON p.product_id = o.product_id
GROUP BY
    p.product_id,
    p.name
HAVING COUNT(o.order_id) >= 2
ORDER BY order_count DESC;
