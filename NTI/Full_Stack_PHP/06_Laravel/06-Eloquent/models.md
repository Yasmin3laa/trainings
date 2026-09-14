# Eloquent Models

An Eloquent model represents a database table.

Example:

```php
class Doctor extends Model
{
}
```

Laravel assumes:

```text
Model: Doctor
Table: doctors
```

---

# 1. Custom Table Name

If your table doesn't follow Laravel conventions:

```php
protected $table = 'hospital_doctors';
```

Normally, you don't need this.

---

# 2. Primary Key

Laravel assumes the primary key is:

```text
id
```

If your table uses another key:

```php
protected $primaryKey = 'doctor_id';
```

Only do this when necessary.

---

# 3. Timestamps

Laravel normally expects:

```text
created_at
updated_at
```

If a table doesn't use timestamps:

```php
public $timestamps = false;
```

---

# 4. Mass Assignment

Suppose you want:

```php
Doctor::create([
    'name' => 'Dr. Yasmine Alaa',
    'specialization' => 'Cardiology',
]);
```

The model needs to allow mass assignment for those fields.

Example:

```php
protected $fillable = [
    'name',
    'specialization',
    'experience',
    'department_id',
    'is_active',
];
```

---

# 5. $fillable

`$fillable` defines attributes that can be mass assigned.

Example:

```php
protected $fillable = [
    'name',
    'email',
    'phone',
];
```

This is commonly used in CRUD applications.

---

# 6. $guarded

Another approach is:

```php
protected $guarded = [];
```

This means all attributes are mass assignable.

Be careful with this approach, especially when handling user-controlled input.

For learning and real projects, explicitly defining `$fillable` is often clearer.

---

# 7. Casts

Models can cast attributes to specific types.

Example:

```php
protected function casts(): array
{
    return [
        'is_active' => 'boolean',
        'experience' => 'integer',
    ];
}
```

Then:

```php
$doctor->is_active
```

behaves like a boolean.

---

# Tip

A model is not simply a "database file".

It can contain:

* Relationships
* Query scopes
* Attribute transformations
* Business-related behavior
* Casts
* Events

As your Laravel skills grow, your models become more powerful.
