# Eloquent Relationships

Relationships describe how database records are connected.

Hospital systems are full of relationships.

Examples:

```text
Department → Doctors
Doctor → Appointments
Patient → Appointments
Patient → Medical Records
Doctor → Medical Records
```

---

# 1. One-to-Many

One department can have many doctors.

```text
Department
    |
    |--- Doctor
    |--- Doctor
    |--- Doctor
```

Department model:

```php
public function doctors()
{
    return $this->hasMany(Doctor::class);
}
```

Doctor model:

```php
public function department()
{
    return $this->belongsTo(Department::class);
}
```

---

# 2. Access Doctors

```php
$department = Department::findOrFail(1);

$doctors = $department->doctors;
```

---

# 3. Access Department

```php
$doctor = Doctor::findOrFail(1);

$department = $doctor->department;
```

Then:

```php
echo $doctor->department->name;
```

---

# 4. One-to-One

Example:

```text
User
  |
  └── Profile
```

User:

```php
public function profile()
{
    return $this->hasOne(Profile::class);
}
```

Profile:

```php
public function user()
{
    return $this->belongsTo(User::class);
}
```

---

# 5. Many-to-Many

Example:

A doctor may work with multiple services.

A service may be provided by multiple doctors.

```text
Doctor
  ↕
doctor_service
  ↕
Service
```

Doctor:

```php
public function services()
{
    return $this->belongsToMany(Service::class);
}
```

Service:

```php
public function doctors()
{
    return $this->belongsToMany(Doctor::class);
}
```

---

# 6. Pivot Table

For many-to-many relationships, Laravel commonly uses a pivot table.

Example:

```text
doctor_service
```

with:

```text
doctor_id
service_id
```

---

# 7. belongsTo

If a doctor belongs to a department:

```php
public function department()
{
    return $this->belongsTo(Department::class);
}
```

The foreign key is normally:

```text
department_id
```

---

# Hospital Relationship Map

A simplified design:

```text
Department
    |
    | hasMany
    ↓
Doctor
    |
    | hasMany
    ↓
Appointment
    ↑
    |
belongsTo
Patient
```

And:

```text
Doctor
    ↕
doctor_service
    ↕
Service
```

Understanding this diagram will make Eloquent much easier.

---

# Tip

Before writing relationships in Laravel, understand the database relationship first.

Ask:

> "Who owns the foreign key?"

For example:

```text
doctors.department_id
```

means:

```text
Doctor belongsTo Department
```

and:

```text
Department hasMany Doctors
```
