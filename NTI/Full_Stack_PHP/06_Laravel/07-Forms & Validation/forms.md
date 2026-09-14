# Forms in Laravel

Forms are used to collect information from users.

In the hospital project, forms will be used for:

* Creating doctors
* Creating departments
* Registering patients
* Booking appointments
* Updating doctor information
* Updating patient information

---

# 1. Basic HTML Form

```blade
<form action="{{ route('doctors.store') }}" method="POST">

    @csrf

    <input type="text" name="name">

    <input type="text" name="specialization">

    <button type="submit">
        Save Doctor
    </button>

</form>
```

---

# 2. Why @csrf?

Laravel protects POST forms against CSRF attacks.

Always include:

```blade
@csrf
```

inside forms that submit data.

---

# 3. Form Action

The action determines where the form sends its data:

```blade
<form action="{{ route('doctors.store') }}" method="POST">
```

The route might be:

```php
Route::post('/doctors', [DoctorController::class, 'store'])
    ->name('doctors.store');
```

---

# 4. GET vs POST

GET is commonly used to retrieve a page:

```php
Route::get('/doctors/create', ...);
```

POST is commonly used to submit new data:

```php
Route::post('/doctors', ...);
```

Think:

```text
GET
 ↓
Show form

POST
 ↓
Process submitted form
```

---

# 5. PUT / PATCH

For updating records:

```blade
<form action="{{ route('doctors.update', $doctor) }}" method="POST">

    @csrf
    @method('PUT')

    ...
    
</form>
```

---

# 6. DELETE

For deleting:

```blade
<form action="{{ route('doctors.destroy', $doctor) }}" method="POST">

    @csrf
    @method('DELETE')

    <button type="submit">
        Delete
    </button>

</form>
```

---

# 7. Complete Doctor Form

```blade
<form action="{{ route('doctors.store') }}" method="POST">

    @csrf

    <div>
        <label>Name</label>

        <input
            type="text"
            name="name"
            value="{{ old('name') }}"
        >
    </div>

    <div>
        <label>Specialization</label>

        <input
            type="text"
            name="specialization"
            value="{{ old('specialization') }}"
        >
    </div>

    <div>
        <label>Experience</label>

        <input
            type="number"
            name="experience"
            value="{{ old('experience') }}"
        >
    </div>

    <button type="submit">
        Save Doctor
    </button>

</form>
```

---

# Tip

A form flow looks like:

```text
User
 ↓
HTML Form
 ↓
Route
 ↓
Controller
 ↓
Validation
 ↓
Model
 ↓
Database
```

This flow is fundamental to Laravel CRUD applications.
