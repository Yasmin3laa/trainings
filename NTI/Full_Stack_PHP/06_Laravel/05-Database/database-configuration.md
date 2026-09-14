# Database Configuration

Laravel can work with several database systems.

Common choices include:

* MySQL
* PostgreSQL
* SQLite
* SQL Server

MySQL is a practical choice.

---

# 1. The .env File

Laravel stores environment-specific configuration in:

```text
.env
```

Example MySQL configuration:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=carepoint
DB_USERNAME=root
DB_PASSWORD=
```

Your exact values depend on your local MySQL configuration.

---

# 2. Create the Database

Using phpMyAdmin, create:

```text
carepoint
```

Then configure `.env`.

---

# 3. Clear Configuration Cache

If Laravel doesn't recognize your `.env` changes, run:

```bash
php artisan config:clear
```

You can also clear application caches when troubleshooting:

```bash
php artisan optimize:clear
```

---

# 4. Test the Connection

A simple way to test the database is to run:

```bash
php artisan migrate
```

If the connection is correct, Laravel will communicate with MySQL and create its migration tables.

---

# 5. config/database.php

Laravel's database configuration is available through:

```text
config/database.php
```

Normally, you should configure your environment through `.env` instead of hard-coding credentials in your application.

---

# Hospital Example

Your database may eventually contain:

```text
carepoint
│
├── users
├── departments
├── doctors
├── services
├── patients
├── appointments
└── medical_records
```

The next step is creating these structures with migrations.
