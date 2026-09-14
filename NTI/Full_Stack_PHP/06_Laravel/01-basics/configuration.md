# Laravel Configuration

## 1. What is Configuration?

Configuration controls how your Laravel application behaves.

Configuration files are mainly inside:

```text
config/
```

Environment-specific values are commonly stored in:

```text
.env
```

---

## 2. The .env File

Example:

```env
APP_NAME="CarePoint Hospital"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost
```

Database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hospital
DB_USERNAME=root
DB_PASSWORD=
```

---

## 3. Access Configuration

Use:

```php
config('app.name');
```

Example:

```php
$name = config('app.name');
```

---

## 4. Why Not Use env() Everywhere?

The `.env` file is intended to provide environment values to configuration.

Prefer:

```php
config('app.name');
```

instead of spreading direct environment access throughout application code.

This also works better with Laravel's configuration caching.

---

## 5. Debug Mode

Development:

```env
APP_DEBUG=true
```

Production:

```env
APP_DEBUG=false
```

Never expose detailed exception information to production users.

---

## 6. Application Key

Laravel uses an application key for important encryption-related functionality.

Generate it with:

```bash
php artisan key:generate
```

Do not share your real application key publicly.

---

## 7. Configuration Cache

Laravel can cache configuration:

```bash
php artisan config:cache
```

If configuration seems incorrect during development:

```bash
php artisan config:clear
```

Or:

```bash
php artisan optimize:clear
```

---

## 8. Tip

Think of configuration as:

```text
.env
   ↓
config/
   ↓
Application
```

Keep environment-specific secrets out of your source code.
