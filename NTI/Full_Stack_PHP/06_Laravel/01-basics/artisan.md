# Laravel Artisan

## 1. What is Artisan?

Artisan is Laravel's command-line interface.

You use it to:

* Generate files
* Run migrations
* Start development tools
* Clear caches
* Run tests
* Inspect routes
* Work with Tinker

The basic command is:

```bash
php artisan
```

---

## 2. See All Commands

```bash
php artisan list
```

Get help for a specific command:

```bash
php artisan help migrate
```

---

## 3. Generate a Controller

```bash
php artisan make:controller DoctorController
```

---

## 4. Generate a Model

```bash
php artisan make:model Doctor
```

Model + migration:

```bash
php artisan make:model Doctor -m
```

Model + migration + factory + seeder:

```bash
php artisan make:model Doctor -mfsc
```

---

## 5. Generate a Resource Controller

```bash
php artisan make:controller DoctorController --resource
```

---

## 6. Generate a Migration

```bash
php artisan make:migration create_doctors_table
```

---

## 7. Database Commands

Run migrations:

```bash
php artisan migrate
```

Check migration status:

```bash
php artisan migrate:status
```

Rollback:

```bash
php artisan migrate:rollback
```

Refresh:

```bash
php artisan migrate:refresh
```

Drop all tables and migrate again:

```bash
php artisan migrate:fresh
```

Seed database:

```bash
php artisan db:seed
```

Fresh database + seed:

```bash
php artisan migrate:fresh --seed
```

### Warning

`migrate:fresh` deletes all tables in the configured database.

Do not use it casually on a production database.

---

## 8. Start Laravel Server

```bash
php artisan serve
```

---

## 9. Route List

```bash
php artisan route:list
```

This is one of the most useful debugging commands.

---

## 10. Tinker

```bash
php artisan tinker
```

Tinker lets you interact with your Laravel application.

Example:

```php
Doctor::count();
```

Find a doctor:

```php
Doctor::first();
```

Create a doctor:

```php
Doctor::create([
    'name' => 'Dr. Sara',
    'specialization' => 'Cardiology',
]);
```

---

## 11. Clear Caches

Useful command:

```bash
php artisan optimize:clear
```

Other commands include:

```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

---

## 12. Tip

Do not be afraid of Artisan.

When you want to know whether Laravel already has a command for something, try:

```bash
php artisan list
```

Artisan is one of the tools that makes Laravel development much faster.
