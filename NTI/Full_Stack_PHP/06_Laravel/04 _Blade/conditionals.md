# Blade Conditionals

Blade provides clean syntax for conditional logic.

---

# 1. @if

```blade
@if ($doctor)
    <h2>{{ $doctor->name }}</h2>
@endif
```

---

# 2. @else

```blade
@if ($doctor)
    <h2>{{ $doctor->name }}</h2>
@else
    <p>Doctor not found.</p>
@endif
```

---

# 3. @elseif

```blade
@if ($status === 'active')
    <p>Doctor is active.</p>
@elseif ($status === 'inactive')
    <p>Doctor is inactive.</p>
@else
    <p>Unknown status.</p>
@endif
```

---

# 4. @unless

`@unless` means "if not".

```blade
@unless ($doctor->is_active)
    <p>This doctor is currently unavailable.</p>
@endunless
```

Equivalent PHP logic:

```php
if (!$doctor->is_active)
```

---

# 5. @isset

```blade
@isset($doctor)
    <p>{{ $doctor->name }}</p>
@endisset
```

---

# 6. @empty

```blade
@empty($doctors)
    <p>No doctors found.</p>
@endempty
```

---

# 7. Authentication Conditions

You may use:

```blade
@auth
    <p>Welcome back!</p>
@endauth
```

And:

```blade
@guest
    <p>Please login.</p>
@endguest
```

---

# 8. Authorization

Later, when authorization is configured:

```blade
@can('update', $doctor)
    <a href="#">Edit</a>
@endcan
```

This is useful when different hospital users have different permissions.

---

# Hospital Example

```blade
@if ($doctor->is_active)
    <span class="badge bg-success">
        Available
    </span>
@else
    <span class="badge bg-secondary">
        Unavailable
    </span>
@endif
```

---

# Tip

Do not put complicated business rules inside Blade.

Bad:

```blade
@if (
    $doctor->department->name === 'Cardiology'
    && $doctor->experience > 10
    && $doctor->is_active
)
```

If the condition becomes complicated, consider moving the logic into:

* Controller
* Model
* Service
* Policy

Blade should stay easy to read.
