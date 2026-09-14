# Laravel Project Structure

Understanding the project structure is one of the first important Laravel skills.

A Laravel project commonly contains:

```text
app/
bootstrap/
config/
database/
public/
resources/
routes/
storage/
tests/
```

---

## 1. app/

Contains the main application code.

Important directories include:

```text
app/
├── Http/
├── Models/
└── Providers/
```

### app/Models

Contains Eloquent models.

Example:

```text
Doctor.php
Patient.php
Appointment.php
Department.php
```

---

## 2. app/Http

Contains HTTP-related application code.

Common locations:

```text
Controllers/
Middleware/
Requests/
```

### Controllers

Example:

```text
DoctorController.php
PatientController.php
```

Controllers handle requests.

### Middleware

Middleware can inspect or modify requests before they reach the controller.

Examples:

```text
auth
guest
```

### Requests

Form Request classes contain validation and authorization logic.

Example:

```text
StoreDoctorRequest.php
UpdateDoctorRequest.php
```

---

## 3. bootstrap/

Contains files used to bootstrap the Laravel application.

You normally do not need to modify this directory while learning basic Laravel.

---

## 4. config/

Contains application configuration.

Examples:

```text
config/app.php
config/database.php
config/filesystems.php
config/mail.php
```

Configuration values can use environment variables.

---

## 5. database/

Contains database-related files:

```text
database/
├── factories/
├── migrations/
└── seeders/
```

### migrations

Define database structure.

### seeders

Insert initial/sample data.

### factories

Generate fake data.

---

## 6. public/

Contains files that are publicly accessible.

It commonly contains:

```text
index.php
```

and public assets.

The `index.php` file is an important entry point for web requests.

---

## 7. resources/

Contains frontend resources.

Commonly:

```text
resources/
├── views/
├── css/
└── js/
```

### views

Contains Blade templates.

Example:

```text
resources/views/doctors/index.blade.php
```

---

## 8. routes/

Contains route definitions.

Important files include:

```text
web.php
console.php
```

Depending on the Laravel application setup, API routes may also be configured separately.

Example:

```php
Route::get('/doctors', [DoctorController::class, 'index']);
```

---

## 9. storage/

Contains generated and stored application files.

Examples:

```text
storage/logs/
storage/app/
```

Laravel logs are commonly found under:

```text
storage/logs/
```

---

## 10. tests/

Contains automated tests.

Common directories:

```text
tests/
├── Feature/
└── Unit/
```

---

## 11. .env

Contains environment-specific configuration.

Example:

```env
APP_ENV=local
APP_DEBUG=true
DB_DATABASE=hospital
```

Never commit real secrets.

---

## 12. vendor/

Composer creates:

```text
vendor/
```

It contains installed PHP dependencies.

Do not manually edit files inside `vendor`.

---

## 13. Tip

When building a feature, think:

```text
Route
  ↓
Controller
  ↓
Request / Validation
  ↓
Model
  ↓
Database
  ↓
View
```

Knowing where each piece belongs is more important than memorizing every filename.
