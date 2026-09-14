# Blade Layouts

A layout allows multiple pages to share the same HTML structure.

Without layouts, you may repeat:

```html
<html>
<head>
...
</head>
<body>
...
</body>
</html>
```

on every page.

Layouts solve this problem.

---

# 1. Create a Layout

Example:

```text
resources/views/layouts/app.blade.php
```

```blade
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <title>
        @yield('title')
    </title>
</head>

<body>

    <header>
        <h1>CarePoint Community Hospital</h1>
    </header>

    <main>
        @yield('content')
    </main>

</body>

</html>
```

---

# 2. Extending the Layout

Create:

```text
resources/views/doctors/index.blade.php
```

```blade
@extends('layouts.app')

@section('title', 'Doctors')

@section('content')

    <h2>Our Doctors</h2>

@endsection
```

---

# 3. @yield

In the layout:

```blade
@yield('content')
```

This defines a place where child views can insert content.

---

# 4. @section

Child view:

```blade
@section('content')

    <h1>Doctors</h1>

@endsection
```

---

# 5. Including Components

You can also include reusable files:

```blade
@include('layouts.navbar')
```

Example structure:

```text
resources/views/
│
├── layouts/
│   ├── app.blade.php
│   ├── navbar.blade.php
│   └── footer.blade.php
│
└── doctors/
    └── index.blade.php
```

---

# 6. @stack and @push

Sometimes a page needs additional CSS or JavaScript.

Layout:

```blade
<head>
    @stack('styles')
</head>
```

Child view:

```blade
@push('styles')

<style>
    .doctor-card {
        border-radius: 10px;
    }
</style>

@endpush
```

Another common example:

```blade
@stack('scripts')
```

and:

```blade
@push('scripts')
<script>
    console.log('Doctors page');
</script>
@endpush
```

---

# Hospital Layout

A practical hospital structure could be:

```text
resources/views/
│
├── layouts/
│   ├── app.blade.php
│   ├── navbar.blade.php
│   └── footer.blade.php
│
├── home.blade.php
│
├── doctors/
│   ├── index.blade.php
│   ├── show.blade.php
│   ├── create.blade.php
│   └── edit.blade.php
│
├── departments/
│   ├── index.blade.php
│   └── show.blade.php
│
└── appointments/
    ├── index.blade.php
    ├── create.blade.php
    └── show.blade.php
```

---

# Tip

Think:

```text
app.blade.php
      ↓
common website structure
      ↓
child pages
      ↓
page-specific content
```

This prevents duplicated HTML.
