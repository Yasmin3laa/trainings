# Gates

Gates are a simple way to define authorization rules.

A gate answers a question such as:

> Can this user update this doctor?

---

# Example

A gate can check the user's role:

```php
Gate::define('manage-doctors', function ($user) {
    return $user->role === 'admin';
});
```

Then:

```php
if (Gate::allows('manage-doctors')) {
    // allowed
}
```

---

# Blade

```blade
@can('manage-doctors')

    <a href="{{ route('doctors.create') }}">
        Add Doctor
    </a>

@endcan
```

---

# Gate with a Model

A gate can also receive a model:

```php
Gate::define('update-doctor', function ($user, $doctor) {
    return $user->role === 'admin';
});
```

Then:

```php
Gate::allows('update-doctor', $doctor);
```

---

# When to Use Gates

Gates are useful for relatively simple authorization rules.

Examples:

```text
manage-dashboard
manage-users
view-reports
manage-doctors
```

For model-specific authorization, Policies are often a better fit.
