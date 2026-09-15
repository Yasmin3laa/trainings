# Middleware

Middleware sits between the incoming request and your application.

Think of it as a checkpoint.

```text
Request
   ↓
Middleware
   ↓
Controller
   ↓
Response
```

---

# Authentication Middleware

A route can require an authenticated user.

Conceptually:

```php
Route::middleware('auth')->group(function () {

    Route::get('/dashboard', ...);

});
```

Now the dashboard is protected.

---

# Middleware Group

You can protect several routes:

```php
Route::middleware('auth')->group(function () {

    Route::get('/dashboard', ...);

    Route::get('/doctors', ...);

    Route::get('/patients', ...);

});
```

---

# Custom Middleware

Create one:

```bash
php artisan make:middleware AdminMiddleware
```

Then you can implement logic that checks whether the current user has the required role/permission.

Conceptually:

```php
if ($request->user()?->role !== 'admin') {
    abort(403);
}
```

---

# 403

HTTP status:

```text
403 Forbidden
```

means the user is authenticated or understood by the system, but is not allowed to perform that action.

---

# Middleware Mental Model

Think airport security:

```text
Request
  ↓
Security Check
  ↓
Allowed?
  ├── No → Stop
  └── Yes
       ↓
    Controller
```

Middleware is a reusable checkpoint.
