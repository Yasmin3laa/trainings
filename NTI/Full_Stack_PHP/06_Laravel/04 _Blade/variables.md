# Blade Variables

Blade variables are used to display data received from controllers, routes, models, and other sources.

---

# 1. Passing a Variable to a View

Controller:

```php
public function index()
{
    $hospitalName = 'CarePoint Community Hospital';

    return view('home', compact('hospitalName'));
}
```

Blade:

```blade
<h1>{{ $hospitalName }}</h1>
```

---

# 2. Using an Array

Controller:

```php
$doctor = [
    'name' => 'Dr. Yasmine Alaa',
    'specialization' => 'Cardiology',
];

return view('doctor', compact('doctor'));
```

Blade:

```blade
<h1>{{ $doctor['name'] }}</h1>
<p>{{ $doctor['specialization'] }}</p>
```

---

# 3. Using an Object

If `$doctor` is an Eloquent model:

```blade
<h1>{{ $doctor->name }}</h1>
<p>{{ $doctor->specialization }}</p>
```

This is what you will normally use with Eloquent.

---

# 4. Passing Multiple Variables

```php
return view('dashboard', [
    'hospitalName' => $hospitalName,
    'doctors' => $doctors,
    'departments' => $departments,
]);
```

Blade:

```blade
<h1>{{ $hospitalName }}</h1>

@foreach ($departments as $department)
    <p>{{ $department->name }}</p>
@endforeach
```

---

# 5. compact()

Instead of:

```php
return view('dashboard', [
    'doctors' => $doctors,
]);
```

You can write:

```php
return view('dashboard', compact('doctors'));
```

With multiple variables:

```php
return view(
    'dashboard',
    compact('doctors', 'departments')
);
```

---

# 6. Checking if a Variable Exists

Blade:

```blade
@isset($doctor)
    <h1>{{ $doctor->name }}</h1>
@endisset
```

---

# 7. Default Values

You can use:

```blade
{{ $name ?? 'Guest' }}
```

If `$name` doesn't exist or is null, Laravel displays:

```text
Guest
```

---

# 8. Escaping Output

Prefer:

```blade
{{ $name }}
```

for normal user/data output.

Use raw output only when you intentionally want HTML:

```blade
{!! $html !!}
```

---

# Tip

Data usually moves like this:

```text
Database
   ↓
Model
   ↓
Controller
   ↓
Blade View
   ↓
HTML
   ↓
Browser
```

Understanding this flow is extremely important in Laravel.
