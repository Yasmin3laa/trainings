# Laravel Installation

## 1. Requirements

Before creating a Laravel project, make sure you have:

* PHP
* Composer
* A supported database
* A terminal
* A code editor

Check PHP:

```bash
php -v
```

Check Composer:

```bash
composer -V
```

---

## 2. Create a Laravel Project

Using Composer:

```bash
composer create-project laravel/laravel example-app
```

Move into the project:

```bash
cd example-app
```

Start the development server:

```bash
php artisan serve
```

Laravel will display the local development URL.

---

## 3. Create a Project in XAMPP

If your projects are inside:

```text
C:\xampp\htdocs
```

You can run:

```powershell
cd C:\xampp\htdocs
```

Then:

```powershell
composer create-project laravel/laravel hospital
```

Move into the project:

```powershell
cd hospital
```

Run:

```powershell
php artisan serve
```

---

## 4. Environment File

Laravel uses:

```text
.env
```

for environment-specific configuration.

Example:

```env
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost
```

Database example:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hospital
DB_USERNAME=root
DB_PASSWORD=
```

---

## 5. Generate Application Key

Laravel applications normally have an application key in `.env`.

If needed:

```bash
php artisan key:generate
```

---

## 6. Database Setup

Create your database in MySQL.

For example:

```text
hospital
```

Then configure `.env`:

```env
DB_DATABASE=hospital
DB_USERNAME=root
DB_PASSWORD=
```

Run:

```bash
php artisan migrate
```

---

## 7. Useful Installation Commands

```bash
php artisan about
```

Shows information about the Laravel application.

```bash
php artisan list
```

Shows available Artisan commands.

```bash
php artisan serve
```

Starts the development server.

---

## 8. Common Problem: PHP Version

If Composer says something like:

```text
requires php ^8.3
```

but your PHP version is:

```text
PHP 8.2
```

then your installed PHP version does not satisfy that package version.

Check:

```bash
php -v
```

Remember that Composer uses the PHP executable available to your command line.

---

## 9. Tip

Always check:

```bash
php -v
composer -V
```

before troubleshooting a Laravel installation.

Many installation problems are actually environment/version problems.
