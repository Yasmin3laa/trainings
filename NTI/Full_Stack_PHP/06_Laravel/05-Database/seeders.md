# Database Seeders

Seeders insert initial or sample data into the database.

They are especially useful during development.

---

# 1. Create a Seeder

```bash
php artisan make:seeder DepartmentSeeder
```

The file will be:

```text
database/seeders/DepartmentSeeder.php
```

---

# 2. Insert Data

```php
use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        Department::create([
            'name' => 'Cardiology',
            'description' => 'Heart and cardiovascular care.',
            'icon' => 'fa-heart-pulse',
            'is_active' => true,
        ]);
    }
}
```

---

# 3. Calling the Seeder

Inside:

```text
database/seeders/DatabaseSeeder.php
```

you can call:

```php
$this->call([
    DepartmentSeeder::class,
]);
```

---

# 4. Run Seeders

```bash
php artisan db:seed
```

---

# 5. Run a Specific Seeder

```bash
php artisan db:seed --class=DepartmentSeeder
```

---

# 6. Migration + Seeding

During development, this is extremely useful:

```bash
php artisan migrate:fresh --seed
```

It:

```text
Delete tables
     ↓
Run migrations
     ↓
Run seeders
```

---

# 7. Hospital Example

You might seed initial departments:

```php
Department::create([
    'name' => 'Cardiology',
    'description' => 'Heart and cardiovascular care.',
    'icon' => 'fa-heart-pulse',
]);

Department::create([
    'name' => 'Neurology',
    'description' => 'Brain and nervous system care.',
    'icon' => 'fa-brain',
]);

Department::create([
    'name' => 'Pediatrics',
    'description' => 'Healthcare for children and teens.',
    'icon' => 'fa-baby',
]);
```

---

# Tip

Seeders are not only for fake data.

They can be useful for:

* Default roles
* Default permissions
* Initial admin setup
* Default departments
* Development data
* Testing data

---

# Important

Do not rely on seeders as the real hospital administration system.

The final application should allow the admin to create/update/delete records through the dashboard.

Seeder:

```text
Developer → Database
```

Admin dashboard:

```text
Admin → Application → Database
```
