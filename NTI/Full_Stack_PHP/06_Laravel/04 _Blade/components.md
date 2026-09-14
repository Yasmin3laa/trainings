# Blade Components

Blade components allow you to create reusable UI elements.

Instead of repeating:

```html
<div class="alert alert-danger">
    ...
</div>
```

you can create a reusable component.

---

# 1. Anonymous Component

Example:

```text
resources/views/components/alert.blade.php
```

```blade
<div class="alert alert-danger">
    {{ $slot }}
</div>
```

Use it:

```blade
<x-alert>
    Something went wrong.
</x-alert>
```

---

# 2. Component Props

Component:

```blade
@props(['type' => 'info'])

<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>
```

Use:

```blade
<x-alert type="danger">
    Invalid information.
</x-alert>
```

---

# 3. Component for Doctor Card

Create:

```text
resources/views/components/doctor-card.blade.php
```

```blade
@props(['doctor'])

<div class="card">

    <div class="card-body">

        <h3>{{ $doctor->name }}</h3>

        <p>{{ $doctor->specialization }}</p>

        <p>{{ $doctor->experience }} years experience</p>

    </div>

</div>
```

Use:

```blade
@foreach ($doctors as $doctor)

    <x-doctor-card :doctor="$doctor" />

@endforeach
```

---

# 4. Why Components?

Components improve:

* Reusability
* Maintainability
* Readability
* Consistency

If you change the doctor card once, every page using it gets the update.

---

# Tip

Good candidates for components:

```text
Navbar
Footer
Alert
Button
Doctor Card
Department Card
Appointment Card
Modal
Pagination
Form Input
```

Your hospital project will benefit heavily from components.
