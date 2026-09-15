# Policies

Policies organize authorization logic around a model.

For example:

```text
Doctor
  ↓
DoctorPolicy
```

The policy can contain:

```text
view
create
update
delete
```

---

# 1. Create a Policy

```bash
php artisan make:policy DoctorPolicy --model=Doctor
```

---

# 2. Example Policy

```php
public function update(User $user, Doctor $doctor): bool
{
    return $user->role === 'admin';
}
```

---

# 3. Controller

You can authorize an action before performing it.

Conceptually:

```php
$this->authorize('update', $doctor);
```

If authorization fails, Laravel returns an appropriate forbidden response.

---

# 4. Blade

```blade
@can('update', $doctor)

    <a href="{{ route('doctors.edit', $doctor) }}">
        Edit
    </a>

@endcan
```

---

# 5. Why Policies?

Imagine you have:

```text
DoctorPolicy
PatientPolicy
AppointmentPolicy
MedicalRecordPolicy
```

Each model gets its own authorization rules.

This is much easier to maintain than putting every permission inside controllers.

---

# Tip

```text
Authentication
    ↓
Who are you?

Authorization
    ↓
What can you do?

Policy
    ↓
Can you perform this action on this model?
```
