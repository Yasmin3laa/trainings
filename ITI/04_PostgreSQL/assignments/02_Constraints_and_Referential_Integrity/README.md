## Constraints and Referential Integrity

This lab focuses on PostgreSQL constraints, default values, foreign keys, and referential integrity.

## Business Rules

* Product price must be greater than `0`.
* Product names must be unique.
* Order quantity defaults to `1`.
* Every order must reference an existing product.
* Products referenced by existing orders cannot be deleted unless `CASCADE` is explicitly used.
* Categories must have unique names.
* Products must reference valid categories.

## Labs Covered

### Part A — CHECK and UNIQUE

Practiced:

* `PRIMARY KEY`
* `UNIQUE`
* `CHECK`

Tested invalid prices and duplicate product names.

### Part B — DEFAULT

Used:

```sql
quantity NUMERIC DEFAULT 1
```

Tested inserting an order without specifying the quantity.

### Part C — Foreign Key Enforcement

Created relationships between `products` and `orders` using:

```sql
REFERENCES products(product_id)
```

Tested inserting an order with a non-existent `product_id`.

### Part D — Referential Integrity on Delete

Tested deleting a product that is referenced by existing orders.

The product could not be deleted until its related orders were removed.

### Part E — RESTRICT vs CASCADE

Recreated the `orders` table using:

```sql
ON DELETE CASCADE
```

Tested automatic deletion of related orders when their product was deleted.

### Safety Exercise

Before deleting a product, checked related orders using:

```sql
SELECT *
FROM orders
WHERE product_id = 1;
```

This is especially important when using `ON DELETE CASCADE`.

### Practical Challenge — Categories

Extended the database with a `categories` table.

Implemented:

* Primary key
* `NOT NULL`
* `UNIQUE`
* Foreign key
* `ON DELETE RESTRICT`
* Product-category relationship
* Category assignment
* Referential integrity validation

## Concepts Practiced

* Primary Keys
* Foreign Keys
* `CHECK`
* `UNIQUE`
* `NOT NULL`
* `DEFAULT`
* `ON DELETE RESTRICT`
* `ON DELETE CASCADE`
* `ALTER TABLE`
* `INSERT`
* `UPDATE`
* `DELETE`
* `SELECT`
* `JOIN`
* Referential Integrity
* Database Constraints

## Technologies

* PostgreSQL
* SQL
* pgAdmin / PostgreSQL Command Line

## Purpose

This lab is part of my PostgreSQL database training and focuses on enforcing business rules and maintaining data integrity using relational database constraints.
