# Authorization

Authorization determines what an authenticated user is allowed to do.

Authentication:

```text
Is this person logged in?
```

Authorization:

```text
What can this person do?
```

---

# Hospital Example

Suppose:

```text
Admin
```

can delete doctors.

But:

```text
Doctor
```

cannot delete another doctor.

That is authorization.

---

# Simple Role Check

If your application stores a user's role:

```php
if ($user->role === 'admin') {
    // allowed
}
```

However, as an application grows, Laravel's authorization tools such as Gates and Policies provide a better structure.

---

# Blade Authorization

You can conditionally show UI:

```blade
@can('update', $doctor)

    <a href="{{ route('doctors.edit', $doctor) }}">
        Edit
    </a>

@endcan
```

---

# Important

Hiding a button is not enough.

Bad security:

```blade
@if ($user->role === 'admin')
    <button>Delete</button>
@endif
```

Someone could still manually send a request to the delete endpoint.

The server must enforce authorization too.

---

# Tip

Remember:

```text
UI restriction
+
Server-side authorization
=
Proper access control
```
