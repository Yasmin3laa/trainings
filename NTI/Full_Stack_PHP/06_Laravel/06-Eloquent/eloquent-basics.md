# Eloquent Basics

Eloquent is Laravel's ORM.

ORM means:

> Object-Relational Mapping

It allows you to work with database records as PHP objects.

---

# Without Eloquent

You might write:

```php
DB::table('doctors')->where('id', 1)->first();
```

With Eloquent:

```php
Doctor::find(1);
```

The second approach works with a model representing the `doctors` table.

---

# 1. Create a Model

```bash
php artisan make:model Doctor
```

Laravel creates:

```text
app/Models/Doctor.php
```

---

# 2. Basic Model

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    //
}
```

Laravel conventionally maps:

```text
Doctor
```

to:

```text
doctors
```

---

# 3. Retrieve All Doctors

```php
$doctors = Doctor::all();
```

---

# 4. Find a Doctor

```php
$doctor = Doctor::find(1);
```

---

# 5. Find or Fail

```php
$doctor = Doctor::findOrFail(1);
```

If the record doesn't exist, Laravel can return a 404 response.

This is very useful for show/edit/delete pages.

---

# 6. Query with Eloquent

```php
$doctors = Doctor::where('is_active', true)->get();
```

Multiple conditions:

```php
$doctors = Doctor::where('is_active', true)
    ->where('experience', '>=', 10)
    ->get();
```

---

# 7. Eloquent Models Represent Business Entities

In the hospital project:

```text
Doctor
Department
Patient
Appointment
MedicalRecord
Service
User
```

Each can have its own model.

---

# Tip

Think:

```text
Database table
      ↕
Eloquent Model
      ↕
PHP application
```

For example:

```text
doctors table
      ↕
Doctor model
      ↕
DoctorController
      ↕
Blade
```

This is one of the most important Laravel concepts.
