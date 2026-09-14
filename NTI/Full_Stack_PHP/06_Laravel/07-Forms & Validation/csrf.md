# CSRF Protection

CSRF means:

> Cross-Site Request Forgery

It is a security problem where a malicious website attempts to make a user's browser perform an unwanted action on another website.

Laravel provides CSRF protection for web forms.

---

# 1. @csrf

Inside a POST form:

```blade
<form method="POST">

    @csrf

    ...
    
</form>
```

Laravel generates a hidden CSRF token.

Conceptually, the HTML contains something similar to:

```html
<input type="hidden" name="_token" value="...">
```

---

# 2. Why Laravel Needs It

Suppose an authenticated admin is logged into:

```text
CarePoint Hospital
```

A malicious website shouldn't be able to easily make that browser submit:

```text
Delete Doctor
```

without the application's CSRF protection.

---

# 3. POST Form

Use:

```blade
@csrf
```

for forms submitting data through Laravel's web routes.

Example:

```blade
<form action="{{ route('departments.store') }}" method="POST">

    @csrf

    <input name="name">

    <button type="submit">
        Create Department
    </button>

</form>
```

---

# 4. PUT / PATCH / DELETE

These also need CSRF protection when submitted through normal web forms:

```blade
<form method="POST">

    @csrf
    @method('DELETE')

</form>
```

---

# Tip

Whenever you write:

```blade
<form method="POST">
```

your first thought should be:

```blade
@csrf
```

Do not remove CSRF protection just to make a form work.
