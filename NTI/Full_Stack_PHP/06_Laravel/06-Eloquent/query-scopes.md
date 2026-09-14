# Query Scopes

Query scopes allow you to reuse common query conditions.

Suppose your hospital frequently needs active doctors.

Without a scope:

```php
Doctor::where('is_active', true)->get();
```

If this appears everywhere, a scope makes the code cleaner.

---

# 1. Local Scope

Inside the `Doctor` model:

```php
public function scopeActive($query)
{
    return $query->where('is_active', true);
}
```

Now:

```php
$doctors = Doctor::active()->get();
```

Much cleaner.

---

# 2. Another Scope

Suppose you want doctors with at least 10 years of experience:

```php
public function scopeExperienced($query)
{
    return $query->where('experience', '>=', 10);
}
```

Use:

```php
$doctors = Doctor::experienced()->get();
```

---

# 3. Combining Scopes

```php
$doctors = Doctor::active()
    ->experienced()
    ->get();
```

This creates readable queries.

---

# 4. Dynamic Scopes

Sometimes the scope needs a parameter.

Example:

```php
public function scopeWithExperience($query, $years)
{
    return $query->where('experience', '>=', $years);
}
```

Use:

```php
$doctors = Doctor::withExperience(15)->get();
```

---

# 5. Why Scopes Matter

Scopes are useful for common application rules:

```text
active()
available()
experienced()
verified()
recent()
published()
```

For the hospital:

```php
Doctor::active()->get();
```

is much more readable than repeating:

```php
Doctor::where('is_active', true)->get();
```

---

# Tip

A scope gives a name to a reusable query.

Instead of thinking:

```text
where is_active = true
```

you think:

```text
active doctors
```

That makes your code closer to the language of your application.
