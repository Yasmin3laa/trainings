# SQL Queries and Database Maintenance

A practical PostgreSQL laboratory focused on modifying tables, writing SQL queries, working with aggregate functions, performing joins, and managing database objects safely.

## Topics Covered

### Table Modification

* `ALTER TABLE`
* Adding columns
* Adding `CHECK` constraints
* Renaming columns
* Dropping columns

### Sorting and Data Retrieval

* `ORDER BY`
* `ASC` and `DESC`
* `NULLS LAST`
* Column aliases using `AS`
* Table aliases
* `DISTINCT`
* String concatenation using `||`

### Aggregate Functions

* `COUNT()`
* `AVG()`
* `MIN()`
* `MAX()`
* `GROUP BY`
* `HAVING`

### Pagination

* `LIMIT`
* `OFFSET`
* Calculating pagination offsets

### SQL Essentials

* PostgreSQL statement termination with `;`
* Column aliases with and without `AS`
* String concatenation using `||`
* Understanding why `+` cannot be used for text concatenation in PostgreSQL

### Table Creation

Created and worked with:

* `suppliers`
* `products`
* `orders`

Practiced:

* `SERIAL`
* `PRIMARY KEY`
* `FOREIGN KEY`
* `DEFAULT`
* `CHECK`

### SQL Joins

Practiced the main types of joins:

* `INNER JOIN`
* `LEFT JOIN`
* `FULL JOIN`
* `CROSS JOIN`

Also verified the expected number of rows produced by a `CROSS JOIN`:

```text
rows(products) × rows(orders)
```

### Database Maintenance

Practiced:

* `DELETE`
* `TRUNCATE`
* `DROP`
* Verifying affected rows before destructive operations

## Practical Challenge

Created a query using `LEFT JOIN`, `GROUP BY`, aggregate functions, `HAVING`, and `ORDER BY` to analyze how frequently products are ordered and calculate their average order quantity.

## Concepts Practiced

* SQL Querying
* Table Modification
* Constraints
* Sorting
* Aliases
* DISTINCT
* String Concatenation
* Aggregate Functions
* GROUP BY
* HAVING
* LIMIT / OFFSET
* Table Relationships
* SQL Joins
* DELETE
* TRUNCATE
* DROP
* Referential Integrity
* Database Safety

## Technologies

* PostgreSQL
* SQL
* pgAdmin
* PostgreSQL Command Line (`psql`)

## Purpose

This laboratory is part of my PostgreSQL database training and focuses on developing practical SQL skills, understanding relational data, performing database maintenance operations, and writing queries for data analysis.
