-- ==================================================
-- Question 1: Create Database and Table
-- ==================================================
CREATE DATABASE company_db;

-- Connect to the database before running the following commands:
-- In psql:
-- \c company_db

CREATE TABLE employees (
    employee_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    age INT CHECK (age >= 18),
    salary NUMERIC CHECK (salary >= 0)
);

-- Display table structure in psql:
-- \d employees


-- ==================================================
-- Question 2: Insert and Retrieve Data
-- ==================================================

INSERT INTO employees (first_name, last_name, phone, age, salary)
VALUES
    ('Ahmed', 'Hassan', '01234567891', 30, 65000),
    ('Sara', 'Ali', '01122334455', 25, 55000),
    ('Mariam', 'Mostafa', '01234567890', 35, 72000);

-- Display all employees
SELECT * FROM employees;

-- Insert another employee and display the inserted row
INSERT INTO employees (first_name, last_name, phone, age, salary)
VALUES ('Omar', 'Mohamed', '01555555555', 28, 60000)
RETURNING *;


-- ==================================================
-- Question 3: Database Management and Validation
-- ==================================================

-- 1. List all databases
-- Run this command in psql:
-- \l


-- 2. Connect to company_db
-- Run this command in psql:
-- \c company_db


-- 3. Attempt to insert an employee with age = 16
-- This will fail because of the CHECK constraint:
-- age >= 18

INSERT INTO employees (first_name, last_name, phone, age, salary)
VALUES ('Ali', 'Hassan', '01011111111', 16, 50000);


-- 4. Attempt to insert an employee with a negative salary
-- This will fail because of the CHECK constraint:
-- salary >= 0

INSERT INTO employees (first_name, last_name, phone, age, salary)
VALUES ('Mona', 'Ali', '01122222222', 25, -1000);


-- 5. Drop the database safely
--
-- We cannot drop company_db while connected to it.
-- First, connect to another database such as postgres:
--
-- \c postgres
--
-- Finally, drop the database:
--
-- DROP DATABASE company_db;
