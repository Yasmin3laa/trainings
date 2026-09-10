# 🗄️ MySQL Notes

A collection of **MySQL notes** covering database fundamentals, SQL commands, table management, CRUD operations, relationships, and common queries.

These notes are useful for **learning, revision, and quick reference** while working with PHP and backend applications.

---

## 🐬 What is MySQL?

**MySQL** is an open-source **relational database management system (RDBMS)** that uses **SQL (Structured Query Language)** to store, manage, and retrieve data.

MySQL is commonly used with PHP to build dynamic web applications.

---

# 🗃️ Database Basics

A database contains one or more tables.

A table consists of:

* **Columns** → Define the type of data.
* **Rows** → Store individual records.
* **Primary Key** → Uniquely identifies each record.

Example:

```text
users
--------------------------------
id | name   | email
--------------------------------
1  | Ali    | ali@example.com
2  | Yaso   | yaso@example.com
3  | Ahmed  | ahmed@example.com
```

---

# 🆕 Create Database

```sql
CREATE DATABASE school;
```

Create only if it doesn't already exist:

```sql
CREATE DATABASE IF NOT EXISTS school;
```

---

# 📂 Use Database

Select a database to work with:

```sql
USE school;
```

---

# 🏗️ Create Table

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);
```

### Common Data Types

| Data Type  | Description          |
| ---------- | -------------------- |
| `INT`      | Integer numbers      |
| `VARCHAR`  | Variable-length text |
| `TEXT`     | Large text           |
| `DATE`     | Date                 |
| `DATETIME` | Date and time        |
| `DECIMAL`  | Decimal numbers      |
| `BOOLEAN`  | True/False           |

---

# ➕ Insert Data

Insert one record:

```sql
INSERT INTO users (name, email, age)
VALUES ('Yaso', 'yaso@example.com', 20);
```

Insert multiple records:

```sql
INSERT INTO users (name, email, age)
VALUES
    ('Ali', 'ali@example.com', 21),
    ('Ahmed', 'ahmed@example.com', 22),
    ('Mona', 'mona@example.com', 20);
```

---

# 🔍 Select Data

Select all columns:

```sql
SELECT * FROM users;
```

Select specific columns:

```sql
SELECT name, email
FROM users;
```

---

# 🎯 WHERE Clause

Used to filter records.

```sql
SELECT *
FROM users
WHERE age = 20;
```

Other operators:

```sql
=
!=
>
<
>=
<=
```

Example:

```sql
SELECT *
FROM users
WHERE age >= 18;
```

---

# ✏️ Update Data

```sql
UPDATE users
SET name = 'Mohamed'
WHERE id = 1;
```

⚠️ Always use a `WHERE` condition when you only want to update specific records.

---

# 🗑️ Delete Data

```sql
DELETE FROM users
WHERE id = 1;
```

⚠️ Without `WHERE`, all records can be deleted:

```sql
DELETE FROM users;
```

---

# 🔢 ORDER BY

Sort results.

### Ascending

```sql
SELECT *
FROM users
ORDER BY age ASC;
```

### Descending

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

---

# 🔢 LIMIT

Limit the number of returned records.

```sql
SELECT *
FROM users
LIMIT 5;
```

Example:

```sql
SELECT *
FROM users
ORDER BY id DESC
LIMIT 10;
```

---

# 📊 Aggregate Functions

Common aggregate functions:

```sql
COUNT()
SUM()
AVG()
MIN()
MAX()
```

### COUNT

```sql
SELECT COUNT(*)
FROM users;
```

### AVG

```sql
SELECT AVG(age)
FROM users;
```

### MAX

```sql
SELECT MAX(age)
FROM users;
```

### MIN

```sql
SELECT MIN(age)
FROM users;
```

---

# 📦 GROUP BY

Used to group rows with the same values.

```sql
SELECT age, COUNT(*)
FROM users
GROUP BY age;
```

---

# 🎯 HAVING

Used to filter grouped results.

```sql
SELECT age, COUNT(*)
FROM users
GROUP BY age
HAVING COUNT(*) > 1;
```

### WHERE vs HAVING

* `WHERE` → Filters rows before grouping.
* `HAVING` → Filters groups after `GROUP BY`.

---

# 🔎 LIKE

Used for pattern matching.

### Starts with

```sql
SELECT *
FROM users
WHERE name LIKE 'A%';
```

### Ends with

```sql
SELECT *
FROM users
WHERE name LIKE '%a';
```

### Contains

```sql
SELECT *
FROM users
WHERE name LIKE '%ah%';
```

`%` represents zero or more characters.

---

# 🔢 BETWEEN

Select values within a range.

```sql
SELECT *
FROM users
WHERE age BETWEEN 18 AND 25;
```

---

# 📋 IN

Check if a value exists in a list.

```sql
SELECT *
FROM users
WHERE age IN (18, 20, 25);
```

---

# 🔗 Joins

Joins are used to retrieve related data from multiple tables.

Suppose we have:

### users

```text
id | name
---|------
1  | Ali
2  | Yaso
```

### orders

```text
id | user_id | product
---|---------|--------
1  | 1       | Laptop
2  | 2       | Mouse
```

---

## INNER JOIN

Returns matching records from both tables.

```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

---

## LEFT JOIN

Returns all records from the left table and matching records from the right table.

```sql
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

---

## RIGHT JOIN

Returns all records from the right table and matching records from the left table.

```sql
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;
```

---

# 🔑 Primary Key

A **Primary Key** uniquely identifies each row in a table.

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);
```

Properties:

* Unique
* Cannot be `NULL`
* Identifies each record

---

# 🔗 Foreign Key

A **Foreign Key** creates a relationship between two tables.

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product VARCHAR(100),

    FOREIGN KEY (user_id)
        REFERENCES users(id)
);
```

Here:

```text
users.id
    ↓
orders.user_id
```

---

# 🛡️ Constraints

Constraints control the data stored in a table.

### PRIMARY KEY

```sql
id INT PRIMARY KEY
```

### NOT NULL

```sql
name VARCHAR(100) NOT NULL
```

### UNIQUE

```sql
email VARCHAR(100) UNIQUE
```

### DEFAULT

```sql
status VARCHAR(20) DEFAULT 'active'
```

### AUTO_INCREMENT

```sql
id INT AUTO_INCREMENT
```

### FOREIGN KEY

```sql
FOREIGN KEY (user_id)
REFERENCES users(id)
```

---

# 🔗 Relationships

### One-to-One

One record is related to one record.

```text
User ─── Profile
```

### One-to-Many

One record can have many related records.

```text
User ───< Orders
```

### Many-to-Many

Many records can be related to many records.

Usually implemented using a **junction table**.

```text
Students >──< Courses
```

Example:

```text
students
courses
student_courses
```

---

# 🔄 CRUD

CRUD represents the four basic database operations:

| Operation | SQL Command |
| --------- | ----------- |
| Create    | `INSERT`    |
| Read      | `SELECT`    |
| Update    | `UPDATE`    |
| Delete    | `DELETE`    |

Example:

```sql
-- Create
INSERT INTO users (name)
VALUES ('Yaso');

-- Read
SELECT * FROM users;

-- Update
UPDATE users
SET name = 'Ahmed'
WHERE id = 1;

-- Delete
DELETE FROM users
WHERE id = 1;
```

---

# 🛠️ Useful Commands

### Show Databases

```sql
SHOW DATABASES;
```

### Show Tables

```sql
SHOW TABLES;
```

### Describe Table

```sql
DESCRIBE users;
```

or:

```sql
DESC users;
```

### Drop Database

```sql
DROP DATABASE school;
```

### Drop Table

```sql
DROP TABLE users;
```

### Add Column

```sql
ALTER TABLE users
ADD phone VARCHAR(20);
```

### Modify Column

```sql
ALTER TABLE users
MODIFY phone VARCHAR(30);
```

### Rename Column

```sql
ALTER TABLE users
RENAME COLUMN phone TO mobile;
```

### Rename Table

```sql
RENAME TABLE users TO customers;
```

---

# 🔐 SQL Injection

SQL Injection is a security vulnerability that can happen when user input is directly inserted into SQL queries.

❌ Avoid:

```php
$sql = "SELECT * FROM users WHERE id = $id";
```

For PHP applications, use **prepared statements** with MySQLi:

```php
$stmt = $conn->prepare(
    "SELECT * FROM users WHERE id = ?"
);

$stmt->bind_param("i", $id);

$stmt->execute();
```

Prepared statements separate SQL code from user-provided values.

---

# 🐘 MySQL with PHP

MySQL can be connected to PHP using **MySQLi**.

```php
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "school"
);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
```

Close the connection:

```php
$conn->close();
```

---

# 🎯 Learning Goals

By studying these notes, you can practice:

* Database Fundamentals
* SQL Syntax
* Database & Table Creation
* CRUD Operations
* Data Filtering
* Sorting & Limiting
* Aggregate Functions
* Grouping Data
* Joins
* Primary & Foreign Keys
* Database Relationships
* Constraints
* MySQL with PHP
* Prepared Statements
* Basic Database Security

---

## 👨‍💻 Author

**Yasmine Alaa**

> MySQL Learning Notes & Quick Reference 🐬
