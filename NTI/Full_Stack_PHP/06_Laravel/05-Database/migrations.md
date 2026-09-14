# Database Migrations

A migration is like version control for your database structure.

Instead of manually creating tables every time, Laravel allows you to define the database structure in PHP.

---

# 1. Create a Migration

Example:

```bash
php artisan make:migration create_doctors_table
```

Laravel creates a file inside:

```text
database/migrations
```

---

# 2. Creating a Table

Example:

```php
Schema::create('doctors', function (Blueprint $table) {

    $table->id();

    $table->string('name');

    $table->string('specialization');

    $table->integer('experience')->default(0);

    $table->boolean('is_active')->default(true);

    $table->timestamps();

});
```

---

# 3. Common Column Types

```php
$table->id();

$table->string('name');

$table->text('description');

$table->integer('experience');

$table->decimal('salary', 10, 2);

$table->boolean('is_active');

$table->date('birth_date');

$table->dateTime('appointment_at');

$table->timestamp('verified_at')->nullable();

$table->foreignId('department_id');

$table->timestamps();
```

---

# 4. nullable()

If a field is optional:

```php
$table->string('phone')->nullable();
```

This means the database can store `NULL`.

---

# 5. default()

```php
$table->boolean('is_active')->default(true);
```

If no value is provided, the database uses:

```text
true
```

---

# 6. Foreign Keys

Suppose every doctor belongs to a department.

```php
$table->foreignId('department_id')
      ->constrained()
      ->cascadeOnDelete();
```

This creates a relationship between:

```text
doctors.department_id
```

and:

```text
departments.id
```

---

# 7. Migration Example

Departments:

```php
Schema::create('departments', function (Blueprint $table) {

    $table->id();

    $table->string('name');

    $table->text('description')->nullable();

    $table->string('icon')->nullable();

    $table->boolean('is_active')->default(true);

    $table->timestamps();

});
```

Doctors:

```php
Schema::create('doctors', function (Blueprint $table) {

    $table->id();

    $table->foreignId('department_id')
          ->constrained()
          ->cascadeOnDelete();

    $table->string('name');

    $table->string('specialization');

    $table->integer('experience')->default(0);

    $table->boolean('is_active')->default(true);

    $table->timestamps();

});
```

---

# 8. Running Migrations

```bash
php artisan migrate
```

Laravel executes pending migrations.

---

# 9. Rollback

```bash
php artisan migrate:rollback
```

This rolls back the latest migration batch.

---

# 10. Fresh Migration

```bash
php artisan migrate:fresh
```

This drops all tables and runs migrations again.

Be careful:

```text
migrate:fresh
```

deletes existing database tables.

It is useful during development but dangerous if you have important data.

---

# 11. Migration Status

```bash
php artisan migrate:status
```

This shows which migrations have already run.

---

# Tip

Think of migrations as:

```text
PHP files
     ↓
Database structure
```

Your database schema becomes reproducible.

A teammate can clone your project and run:

```bash
php artisan migrate
```

instead of manually creating every table.
