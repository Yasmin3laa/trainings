# Eloquent CRUD

CRUD means:

```text
C = Create
R = Read
U = Update
D = Delete
```

Almost every database application uses CRUD.

---

# 1. Create

Using `create()`:

```php
$doctor = Doctor::create([
    'name' => 'Dr. Yasmine Alaa',
    'specialization' => 'Cardiology',
    'experience' => 15,
]);
```

Make sure the model allows these attributes through `$fillable`.

---

# 2. Create with new()

You can also create an instance:

```php
$doctor = new Doctor();

$doctor->name = 'Dr. Yasmine Alaa';
$doctor->specialization = 'Cardiology';
$doctor->experience = 15;

$doctor->save();
```

---

# 3. Read All

```php
$doctors = Doctor::all();
```

---

# 4. Find One

```php
$doctor = Doctor::find(1);
```

---

# 5. Find or Fail

```php
$doctor = Doctor::findOrFail(1);
```

---

# 6. Update

```php
$doctor = Doctor::findOrFail(1);

$doctor->update([
    'name' => 'Dr. Yasmine Updated',
    'experience' => 16,
]);
```

---

# 7. Update Individual Attributes

```php
$doctor->experience = 16;

$doctor->save();
```

---

# 8. Delete

```php
$doctor = Doctor::findOrFail(1);

$doctor->delete();
```

---

# 9. firstOrCreate()

```php
$doctor = Doctor::firstOrCreate(
    [
        'email' => 'doctor@example.com',
    ],
    [
        'name' => 'Dr. Yasmine Alaa',
        'specialization' => 'Cardiology',
    ]
);
```

Laravel searches for the record first.

If it doesn't exist, it creates it.

---

# 10. updateOrCreate()

```php
Doctor::updateOrCreate(
    [
        'email' => 'doctor@example.com',
    ],
    [
        'name' => 'Dr. Yasmine Alaa',
        'specialization' => 'Cardiology',
    ]
);
```

This is useful when synchronizing or maintaining records.

---

# Hospital CRUD Flow

For doctors:

```text
Admin
 ↓
Doctors List
 ↓
Create Doctor
 ↓
Store in database
 ↓
Redirect to doctors list
```

For editing:

```text
Admin
 ↓
Edit Doctor
 ↓
Update
 ↓
Database
 ↓
Redirect
```

For deleting:

```text
Admin
 ↓
Delete
 ↓
Database
 ↓
Redirect
```

This will become the foundation of your hospital admin dashboard.
