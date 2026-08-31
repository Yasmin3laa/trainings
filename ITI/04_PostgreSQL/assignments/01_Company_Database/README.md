# Company Database — PostgreSQL

A practical PostgreSQL exercise focused on database creation, table design, constraints, data insertion, data retrieval, validation, and database management.

## 📂 Project Files

* `company_db.sql` — SQL script containing the database and table creation, sample data, queries, and validation exercises.

## 📝 Questions Covered

### Question 1 — Create Database and Table

Created a PostgreSQL database named `company_db` and an `employees` table.

**Table Structure:**

* `employee_id` — Automatically generated primary key
* `first_name` — Required, maximum 50 characters
* `last_name` — Required, maximum 50 characters
* `phone` — Maximum 20 characters
* `age` — Must be at least 18
* `salary` — Must be greater than or equal to 0

**Constraints Used:**

* `PRIMARY KEY`
* `IDENTITY`
* `NOT NULL`
* `CHECK`
* `VARCHAR`
* `NUMERIC`

### Question 2 — Insert and Retrieve Data

Inserted employee records and practiced:

* `INSERT INTO`
* `SELECT`
* `RETURNING *`

**Sample Data:**

| First Name | Last Name | Age | Phone       | Salary |
| ---------- | --------- | --- | ----------- | ------ |
| Ahmed      | Hassan    | 30  | 01234567891 | 65000  |
| Sara       | Ali       | 25  | 01122334455 | 55000  |
| Mariam     | Mostafa   | 35  | 01234567890 | 72000  |

An additional employee was inserted using `RETURNING *` to immediately display the inserted record.

### Question 3 — Database Management and Validation

Practiced:

* Listing PostgreSQL databases
* Connecting to `company_db`
* Inspecting the database structure
* Testing `CHECK` constraints
* Validating employee ages
* Validating salary values
* Handling invalid data
* Understanding database deletion restrictions
* Safely dropping a database

## 🧠 Concepts Practiced

* PostgreSQL
* SQL
* Relational Databases
* Database Creation
* Table Creation
* Primary Keys
* Identity Columns
* `NOT NULL`
* `VARCHAR`
* `NUMERIC`
* `CHECK` Constraints
* `INSERT`
* `SELECT`
* `RETURNING`
* Data Validation
* Database Management

## 🔐 Main Constraints

```sql
employee_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY

first_name VARCHAR(50) NOT NULL

last_name VARCHAR(50) NOT NULL

phone VARCHAR(20)

age INT CHECK (age >= 18)

salary NUMERIC CHECK (salary >= 0)
```

## 🛠️ Tools & Technologies

* PostgreSQL
* SQL
* pgAdmin
* PostgreSQL Command Line

## 🎯 Learning Goals

* Practice creating relational databases
* Design tables with appropriate constraints
* Understand primary keys and identity columns
* Practice inserting and retrieving data
* Apply data validation using `CHECK` constraints
* Understand basic database management operations
* Build a strong foundation in PostgreSQL for backend and full-stack development

---

**Part of my Web Development learning journey.**
