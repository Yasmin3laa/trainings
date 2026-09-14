# Route Groups

## 1. What Are Route Groups?

Route groups allow multiple routes to share common configuration.

For example, imagine all admin routes start with:

```text
/admin
```

Instead of repeating `/admin`:

```php
Route::prefix('admin')->group(function () {

    Route::get('/dashboard', ...);

    Route::get('/doctors', ...);

    Route::get('/patients', ...);

});
```

---

## 2. Prefix

```php
Route::prefix('admin')->group(function () {

    Route::get('/doctors', ...);

});
```

The resulting URL:

```text
/admin/doctors
```

---

## 3. Name Prefix

```php
Route::name('admin.')->group(function () {

    Route::get('/doctors', ...)
        ->name('doctors');

});
```

The route becomes:

```text
admin.doctors
```

---

## 4. Middleware Group

You can protect a group:

```php
Route::middleware('auth')->group(function () {

    Route::get('/dashboard', ...);

    Route::get('/doctors', ...);

});
```

Now authentication middleware applies to all routes inside the group.

---

## 5. Combining Everything

A hospital admin area might use:

```php
Route::prefix('admin')
    ->name('admin.')
    ->middleware('auth')
    ->group(function () {

        Route::get('/dashboard', ...);

        Route::resource('doctors', DoctorController::class);

    });
```

Now you get a structure similar to:

```text
/admin/dashboard
/admin/doctors
/admin/doctors/create
/admin/doctors/{doctor}
```

with names such as:

```text
admin.dashboard
admin.doctors.index
admin.doctors.create
admin.doctors.show
```

---

## 6. Tip

Route groups are especially useful for:

* Admin dashboards
* Authentication
* API prefixes
* Versioned APIs
* Role-based sections

Example:

```text
/admin/*
/doctor/*
/receptionist/*
```
