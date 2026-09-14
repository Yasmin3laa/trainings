# Laravel Controllers

## 1. What Is a Controller?

A Controller receives a request and coordinates what should happen.

Instead of putting everything inside:

```php
Route::get(...);
```

we move application logic into a controller.

---

## 2. Create a Controller

```bash
php artisan make:controller DoctorController
```

Laravel creates:

```text
app/Http/Controllers/DoctorController.php
```

---

## 3. Basic Controller

```php
namespace App\Http\Controllers;

class DoctorController extends Controller
{
    public function index()
    {
        return 'Doctors';
    }
}
```

---

## 4. Connect Route to Controller

```php
use App\Http\Controllers\DoctorController;

Route::get(
    '/doctors',
    [DoctorController::class, 'index']
);
```

Flow:

```text
GET /doctors
      ↓
DoctorController
      ↓
index()
```

---

## 5. Returning a View

```php
public function index()
{
    return view('doctors.index');
}
```

Blade file:

```text
resources/views/doctors/index.blade.php
```

---

## 6. Passing Data to a View

```php
public function index()
{
    $doctors = Doctor::all();

    return view(
        'doctors.index',
        compact('doctors')
    );
}
```

Blade:

```blade
@foreach($doctors as $doctor)
    <h2>{{ $doctor->name }}</h2>
@endforeach
```

---

## 7. Controller Responsibilities

A controller should usually:

```text
Receive request
      ↓
Authorize
      ↓
Validate
      ↓
Call model/service
      ↓
Return response
```

---

## 8. Avoid Fat Controllers

Bad idea:

```php
public function store(Request $request)
{
    // 300 lines of logic...
}
```

If a controller becomes huge, consider moving reusable business logic into:

* Form Requests
* Services
* Actions
* Domain classes
* Jobs

---

## Tip

A Controller is not the database.

A Controller is not the View.

A Controller is the coordinator between parts of the application.
