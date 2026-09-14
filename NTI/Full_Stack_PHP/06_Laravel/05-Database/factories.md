# Model Factories

Factories generate fake database records.

They are extremely useful for testing and development.

---

# 1. Create a Factory

```bash
php artisan make:factory DoctorFactory
```

---

# 2. Factory Example

```php
use Illuminate\Database\Eloquent\Factories\Factory;

class DoctorFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'specialization' => fake()->randomElement([
                'Cardiology',
                'Neurology',
                'Pediatrics',
                'Orthopedics',
            ]),
            'experience' => fake()->numberBetween(1, 20),
            'is_active' => true,
        ];
    }
}
```

---

# 3. Create One Record

```php
Doctor::factory()->create();
```

---

# 4. Create Multiple Records

```php
Doctor::factory()->count(20)->create();
```

This creates 20 doctors.

---

# 5. Factory + Relationships

Suppose doctors belong to departments.

You can generate related records using factory relationships.

Example concept:

```php
Department::factory()
    ->has(Doctor::factory()->count(5))
    ->create();
```

This can create:

```text
1 Department
    ↓
5 Doctors
```

---

# 6. Factories + Seeders

You can use factories inside a seeder:

```php
Doctor::factory()->count(50)->create();
```

Then:

```bash
php artisan db:seed
```

---

# Why Factories Matter

Imagine testing the hospital's doctor listing page with:

```text
3 doctors
```

You may miss problems that happen with:

```text
500 doctors
```

Factories allow you to quickly create realistic amounts of data.

---

# Tip

```text
Migration
    ↓
Creates structure

Factory
    ↓
Generates fake records

Seeder
    ↓
Runs predefined data generation/insertion
```
