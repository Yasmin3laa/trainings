# Named Routes

## 1. What Is a Named Route?

A named route gives a route a unique name.

Example:

```php
Route::get('/doctors', [
    DoctorController::class,
    'index'
])->name('doctors.index');
```

Now instead of writing:

```text
/doctors
```

everywhere, you can use:

```php
route('doctors.index')
```

---

## 2. Why Use Named Routes?

Imagine your URL is:

```text
/admin/hospital/doctors
```

You use this URL in 20 different places.

Later you change it to:

```text
/admin/doctors
```

If you hard-coded the URL everywhere, you need to change many files.

With named routes:

```php
route('doctors.index')
```

you only change the route definition.

---

## 3. Generate URL

```php
route('doctors.index');
```

In Blade:

```blade
<a href="{{ route('doctors.index') }}">
    Doctors
</a>
```

---

## 4. Route Parameters

Suppose:

```php
Route::get('/doctors/{doctor}', [
    DoctorController::class,
    'show'
])->name('doctors.show');
```

Generate the URL:

```php
route('doctors.show', [
    'doctor' => $doctor
]);
```

Or:

```php
route('doctors.show', [
    'doctor' => 5
]);
```

---

## 5. Redirect Using Route Name

Instead of:

```php
return redirect('/doctors');
```

prefer:

```php
return redirect()->route('doctors.index');
```

This is easier to maintain.

---

## 6. Route Naming Convention

For a Doctor resource:

```text
doctors.index
doctors.create
doctors.store
doctors.show
doctors.edit
doctors.update
doctors.destroy
```

This convention becomes extremely useful in CRUD applications.

---

## 7. Tip

Think:

```text
Route URL
    ↓
Route Name
    ↓
route('name')
```

The route name is the stable identifier your application uses.
