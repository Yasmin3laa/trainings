# Blade Directives

Blade directives start with:

```text
@
```

They provide Laravel-specific template functionality.

---

# Common Directives

## @if

```blade
@if ($doctor)
    ...
@endif
```

## @foreach

```blade
@foreach ($doctors as $doctor)
    ...
@endforeach
```

## @forelse

```blade
@forelse ($doctors as $doctor)
    ...
@empty
    <p>No doctors.</p>
@endforelse
```

## @include

```blade
@include('navbar')
```

## @extends

```blade
@extends('layouts.app')
```

## @section

```blade
@section('content')
    ...
@endsection
```

## @yield

```blade
@yield('content')
```

## @csrf

Used in forms:

```blade
<form method="POST">

    @csrf

</form>
```

## @method

Useful when sending PUT, PATCH, or DELETE through an HTML form:

```blade
<form method="POST">

    @csrf
    @method('PUT')

</form>
```

## @error

Display validation errors:

```blade
@error('name')
    <span class="text-danger">
        {{ $message }}
    </span>
@enderror
```

## @auth

```blade
@auth
    <p>You are logged in.</p>
@endauth
```

## @guest

```blade
@guest
    <a href="#">Login</a>
@endguest
```

## @can

Used for authorization:

```blade
@can('update', $doctor)

    <a href="#">Edit</a>

@endcan
```

## @class

Conditional classes:

```blade
<div @class([
    'doctor-card',
    'active' => $doctor->is_active,
])>
```

---

# Tip

You do not need to memorize every Blade directive.

Learn the most common ones first:

```text
{{ }}
@if
@foreach
@forelse
@extends
@section
@yield
@include
@csrf
@method
@error
@auth
@can
```

You will naturally learn more while building projects.
