# Laravel Introduction

## 1. What is Laravel?

Laravel is a modern PHP framework used to build web applications and APIs.

Instead of writing everything from scratch, Laravel provides tools and conventions for common application tasks such as:

* Routing
* Controllers
* Database operations
* Authentication
* Validation
* Sessions
* File uploads
* APIs
* Testing
* Authorization

Laravel helps you organize your application so that each part has a clear responsibility.

---

## 2. Why Do We Use a Framework?

Imagine building a hospital website using only PHP.

You might create:

```text
index.php
login.php
doctors.php
add-doctor.php
edit-doctor.php
delete-doctor.php
db.php
functions.php
```

As the application becomes larger, the code becomes difficult to maintain.

Laravel gives us a structure like:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
Database
   ↓
Views
```

This makes large applications easier to understand and maintain.

---

## 3. MVC Architecture

Laravel commonly follows the MVC pattern.

MVC means:

```text
M = Model
V = View
C = Controller
```

### Model

The Model represents application data and communicates with the database.

Example:

```php
Doctor
Patient
Appointment
Department
```

A `Doctor` model usually works with the `doctors` table.

---

### View

The View is what the user sees.

Laravel uses Blade for views.

Example:

```text
resources/views/doctors/index.blade.php
```

Example:

```blade
<h1>Doctors</h1>

@foreach ($doctors as $doctor)
    <h2>{{ $doctor->name }}</h2>
@endforeach
```

---

### Controller

The Controller receives the request and coordinates the application logic.

Example:

```php
public function index()
{
    $doctors = Doctor::all();

    return view('doctors.index', compact('doctors'));
}
```

---

## 4. Laravel Request Flow

A typical Laravel request looks like:

```text
Browser
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Validation
   ↓
Model / Eloquent
   ↓
Database
   ↓
Controller
   ↓
Blade View / JSON
   ↓
Browser
```

This flow is extremely important.

When debugging Laravel, learn to ask:

> Which step is failing?

---

## 5. Example

Suppose the user visits:

```text
/doctors
```

The route may be:

```php
Route::get('/doctors', [DoctorController::class, 'index']);
```

Laravel calls:

```php
DoctorController@index
```

The controller gets the doctors:

```php
$doctors = Doctor::all();
```

Then returns:

```php
return view('doctors.index', compact('doctors'));
```

Blade displays them.

---

## 6. Laravel Advantages

Laravel provides:

### Routing

```php
Route::get('/doctors', ...);
```

### Controllers

```php
DoctorController
```

### Eloquent ORM

```php
Doctor::all();
```

### Validation

```php
$request->validate([
    'name' => 'required'
]);
```

### Authentication

Laravel provides tools for managing users and authentication.

### Blade

```blade
@if(...)
@endif
```

### Migrations

Database structure can be version controlled.

### Artisan

Laravel's command-line tool:

```bash
php artisan
```

### Testing

Laravel provides tools for automated testing.

---

## 7. Laravel and PHP

Laravel is not a replacement for PHP.

Laravel is built using PHP.

You should understand basic PHP before going deeply into Laravel:

* Variables
* Arrays
* Functions
* Classes
* Objects
* Inheritance
* Interfaces
* Traits
* Namespaces
* Exceptions
* Composer

---

## 8. Tip

Do not try to memorize Laravel syntax.

Instead, understand the flow:

```text
Request
→ Route
→ Controller
→ Model
→ Database
→ Response
```

Once you understand this flow, Laravel becomes much easier.
