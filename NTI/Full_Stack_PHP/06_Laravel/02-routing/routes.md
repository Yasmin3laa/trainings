# Laravel Routes

## 1. What is Routing?

Routing tells Laravel:

> When the user requests this URL with this HTTP method, what should Laravel do?

For example:

```text
GET /doctors
```

can be connected to:

```php
DoctorController@index
```

So the basic idea is:

```text
URL + HTTP Method
        ↓
      Route
        ↓
 Controller / Action
```

---

## 2. Where Are Routes Defined?

Web routes are commonly defined in:

```text
routes/web.php
```

Example:

```php
use Illuminate\Support\Facades\Route;

Route::get('/doctors', function () {
    return 'Doctors';
});
```

When the user visits:

```text
/doctors
```

Laravel returns:

```text
Doctors
```

---

## 3. HTTP Methods

The most important HTTP methods are:

```text
GET
POST
PUT
PATCH
DELETE
```

### GET

Used to retrieve information.

```php
Route::get('/doctors', function () {
    return 'All Doctors';
});
```

Example:

```text
GET /doctors
```

---

### POST

Usually used to create data.

```php
Route::post('/doctors', function () {
    return 'Create Doctor';
});
```

---

### PUT

Usually represents replacing/updating a resource.

```php
Route::put('/doctors/{doctor}', function ($doctor) {
    return "Update Doctor {$doctor}";
});
```

---

### PATCH

Usually represents a partial update.

```php
Route::patch('/doctors/{doctor}', function ($doctor) {
    return "Update part of Doctor {$doctor}";
});
```

---

### DELETE

Used to delete a resource.

```php
Route::delete('/doctors/{doctor}', function ($doctor) {
    return "Delete Doctor {$doctor}";
});
```

---

## 4. Route to Controller

In a real application, avoid putting large logic inside route closures.

Instead:

```php
use App\Http\Controllers\DoctorController;

Route::get('/doctors', [DoctorController::class, 'index']);
```

Laravel calls:

```php
DoctorController@index
```

---

## 5. Route Returning a View

For simple pages:

```php
Route::get('/about', function () {
    return view('about');
});
```

The view would be:

```text
resources/views/about.blade.php
```

---

## 6. Route Parameters

A route can contain dynamic values:

```php
Route::get('/doctors/{id}', function ($id) {
    return "Doctor ID: {$id}";
});
```

Request:

```text
/doctors/5
```

Result:

```text
Doctor ID: 5
```

---

## 7. Route List

One of the most important debugging commands:

```bash
php artisan route:list
```

It shows information such as:

```text
Method
URI
Name
Action
Middleware
```

If your route is not working, check `route:list` first.

---

## 8. Route Order

Laravel must match requests to routes.

Be careful with routes that could overlap.

For example:

```php
Route::get('/doctors/{doctor}', ...);

Route::get('/doctors/create', ...);
```

The static `create` route should be defined appropriately so it isn't interpreted as a `{doctor}` value.

---

## 9. Tip

When you see:

```php
Route::get('/doctors', [DoctorController::class, 'index']);
```

read it as:

> When someone sends a GET request to `/doctors`, execute the `index` method in `DoctorController`.

That sentence is more important than memorizing the syntax.
