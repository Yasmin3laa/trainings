# Route Parameters

## 1. What Are Route Parameters?

Route parameters allow part of the URL to be dynamic.

Example:

```php
Route::get('/doctors/{id}', function ($id) {
    return "Doctor: {$id}";
});
```

Now:

```text
/doctors/1
/doctors/2
/doctors/10
```

are all handled by the same route.

---

## 2. Required Parameters

```php
Route::get('/doctors/{id}', function ($id) {
    return $id;
});
```

The `{id}` parameter is required.

This:

```text
/doctors
```

does not match the route.

But:

```text
/doctors/5
```

does.

---

## 3. Multiple Parameters

```php
Route::get(
    '/departments/{department}/doctors/{doctor}',
    function ($department, $doctor) {
        return "Department: {$department}, Doctor: {$doctor}";
    }
);
```

Example:

```text
/departments/2/doctors/10
```

---

## 4. Optional Parameters

Add `?`:

```php
Route::get('/hello/{name?}', function ($name = 'Guest') {
    return "Hello {$name}";
});
```

Now both work:

```text
/hello
/hello/Yaso
```

---

## 5. Route Constraints

You can restrict parameters.

For numeric IDs:

```php
Route::get('/doctors/{id}', function ($id) {
    return $id;
})->whereNumber('id');
```

Or:

```php
Route::get('/doctors/{id}', function ($id) {
    return $id;
})->where('id', '[0-9]+');
```

---

## 6. Route Model Binding

One of Laravel's most useful features.

Instead of:

```php
Route::get('/doctors/{id}', function ($id) {
    $doctor = Doctor::findOrFail($id);

    return $doctor;
});
```

Laravel can automatically resolve the model:

```php
Route::get('/doctors/{doctor}', function (Doctor $doctor) {
    return $doctor;
});
```

Laravel sees:

```text
{doctor}
```

and:

```php
Doctor $doctor
```

and attempts to find the corresponding model.

---

## 7. Implicit Model Binding in Controllers

Example:

```php
public function show(Doctor $doctor)
{
    return view('doctors.show', compact('doctor'));
}
```

Route:

```php
Route::get('/doctors/{doctor}', [
    DoctorController::class,
    'show'
]);
```

Laravel automatically provides the `Doctor`.

---

## 8. Custom Binding Key

By default, Laravel usually uses the model's primary key.

You can use another column:

```php
Route::get('/doctors/{doctor:slug}', ...);
```

Now Laravel can find the doctor using:

```text
slug
```

instead of:

```text
id
```

---

## 9. Why Route Model Binding Is Useful

Without it:

```php
$doctor = Doctor::findOrFail($id);
```

With it:

```php
public function show(Doctor $doctor)
```

The second approach keeps controllers cleaner.

---

## Tip

When you see:

```php
/{doctor}
```

and:

```php
Doctor $doctor
```

think:

```text
URL parameter
      ↓
Laravel
      ↓
Doctor model
      ↓
Database record
```
