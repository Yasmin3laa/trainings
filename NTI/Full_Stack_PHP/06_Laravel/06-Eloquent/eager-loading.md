# Eager Loading

Eager loading is used to load relationships efficiently.

It helps prevent the **N+1 query problem**.

---

# 1. The Problem

Suppose:

```php
$doctors = Doctor::all();
```

Then in Blade:

```blade
@foreach ($doctors as $doctor)

    {{ $doctor->department->name }}

@endforeach
```

Laravel may execute:

```text
1 query → get doctors

+ 1 query → department for doctor 1
+ 1 query → department for doctor 2
+ 1 query → department for doctor 3
...
```

With many doctors, this becomes inefficient.

---

# 2. Eager Loading with with()

Instead:

```php
$doctors = Doctor::with('department')->get();
```

Now Laravel loads the related departments efficiently.

Blade:

```blade
@foreach ($doctors as $doctor)

    <h3>{{ $doctor->name }}</h3>

    <p>
        {{ $doctor->department->name }}
    </p>

@endforeach
```

---

# 3. Multiple Relationships

```php
$doctors = Doctor::with([
    'department',
    'services'
])->get();
```

---

# 4. Nested Relationships

You can eager load nested relationships:

```php
$doctors = Doctor::with(
    'department.hospital'
)->get();
```

---

# 5. load()

If you already have a model:

```php
$doctor = Doctor::findOrFail(1);

$doctor->load('department');
```

---

# 6. withCount()

Suppose you want the number of appointments:

```php
$doctors = Doctor::withCount('appointments')->get();
```

Then:

```blade
{{ $doctor->appointments_count }}
```

---

# N+1 Mental Model

Bad:

```text
Get doctors
    ↓
Query department repeatedly
    ↓
Query department repeatedly
    ↓
Query department repeatedly
```

Better:

```text
Get doctors + related departments
            ↓
        Efficient queries
```

---

# Tip

Whenever you write:

```blade
$doctor->department
```

inside a loop, ask yourself:

> "Should I eager load department?"

If yes:

```php
Doctor::with('department')->get();
```

This habit will make your Laravel applications much more efficient.
