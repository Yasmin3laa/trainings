# Company Database — PostgreSQL

A PostgreSQL database practice exercise covering database creation, table constraints, data insertion, retrieval, validation, and database management.

## Questions Covered

### Question 1 — Create Database and Table

Created a PostgreSQL database named `company_db` and an `employees` table with the following constraints:

* `employee_id` — Automatically generated primary key
* `first_name` — Required, maximum 50 characters
* `last_name` — Required, maximum 50 characters
* `phone` — Maximum 20 characters
* `age` — Must be at least 18
* `salary` — Must be greater than or equal to 0

The table structure was also displayed using a PostgreSQL command.

### Question 2 — Insert and Retrieve Data

Inserted employee records and practiced:

* `INSERT INTO`
* `SELECT`
* `RETURNING *`

Sample employees:

| First Name | Last Name | Age | Phone       | Salary |
| ---------- | --------- | --: | ----------- | -----: |
| Ahmed      | Hassan    |  30 | 01234567891 |  65000 |
| Sara       | Ali       |  25 | 01122334455 |  55000 |
| Mariam     | Mostafa   |  35 | 01234567890 |  72000 |

An additional employee was inserted using `RETURNING *` to display the inserted record immediately.

### Question 3 — Database Management and Validation

Practiced:

* Listing all PostgreSQL databases
* Connecting to `company_db`
* Testing `CHECK` constraints
* Handling invalid employee ages
* Handling negative salaries
* Understanding database deletion restrictions
* Safely dropping a database

## Concepts Practiced

* PostgreSQL
* SQL
* Database Creation
* Table Creation
* Primary Keys
* Identity Columns
* `NOT NULL`
* `VARCHAR`
* `CHECK` Constraints
* `INSERT`
* `SELECT`
* `RETURNING`
* Database Connection
* Database Validation
* Database Management

## Main Constraints

```sql
employee_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY

first_name VARCHAR(50) NOT NULL

last_name VARCHAR(50) NOT NULL

phone VARCHAR(20)

age INT CHECK (age >= 18)

salary NUMERIC CHECK (salary >= 0)
```

## Tools

* PostgreSQL
* SQL
* pgAdmin / PostgreSQL Command Line

## Purpose

This exercise is part of my database training and focuses on practicing PostgreSQL fundamentals, constraints, data validation, and database management.
