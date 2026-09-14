# Blade Basics

Blade is Laravel's templating engine.

It allows you to write HTML with Laravel/PHP logic in a clean and readable way.

Blade files use the `.blade.php` extension.

Example:

```text
resources/views/home.blade.php
```

---

## 1. Creating a Blade View

Create:

```text
resources/views/home.blade.php
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>

    <h1>Welcome to CarePoint Community Hospital</h1>

</body>
</html>
```

Then return the view from a route:

```php
Route::get('/home', function () {
    return view('home');
});
```

Notice that we don't write:

```php
view('home.blade.php')
```

We write:

```php
view('home')
```

Laravel automatically looks inside:

```text
resources/views
```

---

# 2. Blade Variables

Blade uses:

```blade
{{ $variable }}
```

Example:

```php
Route::get('/doctor', function () {
    $name = 'Eng. Yasmine Alaa';

    return view('doctor', compact('name'));
});
```

Blade:

```blade
<h1>{{ $name }}</h1>
```

Laravel automatically escapes output when using:

```blade
{{ }}
```

This helps protect against XSS attacks.

---

# 3. Raw HTML

Blade also provides:

```blade
{!! $html !!}
```

Example:

```php
$html = '<strong>Important information</strong>';
```

```blade
{!! $html !!}
```

This renders the HTML.

Be careful with raw HTML.

Never render untrusted user input using:

```blade
{!! $userInput !!}
```

unless you know exactly what you are doing.

---

# 4. Blade Comments

Blade comments:

```blade
{{-- This is a Blade comment --}}
```

Unlike HTML comments:

```html
<!-- This is an HTML comment -->
```

Blade comments are removed before the response is sent to the browser.

---

# 5. Displaying Data

Example:

```php
$doctor = [
    'name' => 'Dr. Yasmine Alaa',
    'specialization' => 'Cardiology'
];
```

Blade:

```blade
<h2>{{ $doctor['name'] }}</h2>
<p>{{ $doctor['specialization'] }}</p>
```

---

# 6. Calling Functions

You can use PHP expressions inside Blade:

```blade
<p>{{ strtoupper($doctor['name']) }}</p>
```

You can also use Laravel helpers:

```blade
{{ route('home') }}
```

---

# 7. Including Another Blade File

Suppose we have:

```text
resources/views/components/header.blade.php
```

We can include it:

```blade
@include('components.header')
```

Example:

```blade
<body>

    @include('components.header')

    <main>
        <h1>Doctors</h1>
    </main>

</body>
```

---

# 8. Passing Data to Includes

```blade
@include('components.doctor-card', [
    'doctor' => $doctor
])
```

Then inside the included file:

```blade
<h3>{{ $doctor->name }}</h3>
```

---

# 9. Blade vs PHP

Instead of:

```php
<?php if ($doctor): ?>
    <h1><?= $doctor->name ?></h1>
<?php endif; ?>
```

Blade allows:

```blade
@if ($doctor)
    <h1>{{ $doctor->name }}</h1>
@endif
```

This makes Laravel views much easier to read.

---

# Tip

Think of Blade as:

```text
HTML + Laravel syntax = Blade
```

Blade should mainly be responsible for **displaying data**, not performing complicated business logic.

Bad:

```blade
@php
    // 100 lines of business logic
@endphp
```

Better:

```text
Controller
    ↓
Business logic
    ↓
View
    ↓
Blade displays result
```

---

# Hospital Example

Controller:

```php
public function index()
{
    $doctors = Doctor::all();

    return view('doctors.index', compact('doctors'));
}
```

Blade:

```blade
<h1>Our Doctors</h1>

@foreach ($doctors as $doctor)
    <h2>{{ $doctor->name }}</h2>
    <p>{{ $doctor->specialization }}</p>
@endforeach
```

This is the pattern you will use repeatedly in the hospital project.
