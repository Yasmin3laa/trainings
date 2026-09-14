# Validation

Validation checks whether submitted data is acceptable before saving it.

For example, when creating a doctor:

```text
Name              → required
Specialization    → required
Experience        → integer
Email             → valid email
```

---

# 1. Basic Validation

Controller:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'specialization' => 'required|string|max:255',
        'experience' => 'required|integer|min:0',
    ]);

    Doctor::create($validated);

    return redirect()
        ->route('doctors.index');
}
```

---

# 2. What Happens When Validation Fails?

Laravel automatically redirects the user back to the form and makes validation errors available to the view.

---

# 3. Displaying Errors

```blade
@error('name')
    <div class="text-danger">
        {{ $message }}
    </div>
@enderror
```

---

# 4. Display All Errors

```blade
@if ($errors->any())

    <div class="alert alert-danger">

        <ul>

            @foreach ($errors->all() as $error)

                <li>{{ $error }}</li>

            @endforeach

        </ul>

    </div>

@endif
```

---

# 5. Common Validation Rules

```text
required
nullable
string
integer
numeric
email
boolean
date
min
max
in
unique
exists
```

Example:

```php
'email' => 'required|email',
```

---

# 6. Unique Email

```php
'email' => 'required|email|unique:doctors,email',
```

This prevents duplicate doctor emails.

---

# 7. Exists

Suppose a doctor must belong to an existing department:

```php
'department_id' => 'required|exists:departments,id',
```

This checks that the department exists.

---

# 8. Validation Before Database

Never assume that browser validation is enough.

HTML:

```html
<input type="number">
```

does not replace Laravel validation.

The server must validate the data.

---

# Tip

Think:

```text
Browser validation
        ↓
Nice user experience

Laravel validation
        ↓
Actual server-side protection
```

You need the second one even if the first one exists.
