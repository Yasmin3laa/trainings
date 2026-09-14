# Resource Routes

## 1. What Are Resource Routes?

Resource routes provide the conventional CRUD routes for a resource.

For example:

```php
Route::resource('doctors', DoctorController::class);
```

Laravel creates the standard routes automatically.

---

## 2. The Seven Resource Actions

A resource controller normally contains:

```text
index
create
store
show
edit
update
destroy
```

---

## 3. Generated Routes

Conceptually:

| Method    | URL                      | Controller Method |
| --------- | ------------------------ | ----------------- |
| GET       | `/doctors`               | index             |
| GET       | `/doctors/create`        | create            |
| POST      | `/doctors`               | store             |
| GET       | `/doctors/{doctor}`      | show              |
| GET       | `/doctors/{doctor}/edit` | edit              |
| PUT/PATCH | `/doctors/{doctor}`      | update            |
| DELETE    | `/doctors/{doctor}`      | destroy           |

---

## 4. Resource Controller

Generate:

```bash
php artisan make:controller DoctorController --resource
```

You get methods for the CRUD workflow.

---

## 5. Route

```php
Route::resource(
    'doctors',
    DoctorController::class
);
```

---

## 6. `index`

Shows all doctors:

```php
public function index()
{
    $doctors = Doctor::latest()->get();

    return view('doctors.index', compact('doctors'));
}
```

---

## 7. `create`

Shows the create form:

```php
public function create()
{
    return view('doctors.create');
}
```

---

## 8. `store`

Receives the submitted form:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => ['required', 'string'],
        'specialization' => ['required', 'string'],
    ]);

    Doctor::create($validated);

    return redirect()->route('doctors.index');
}
```

---

## 9. `show`

Displays one doctor:

```php
public function show(Doctor $doctor)
{
    return view('doctors.show', compact('doctor'));
}
```

---

## 10. `edit`

Shows the edit form:

```php
public function edit(Doctor $doctor)
{
    return view('doctors.edit', compact('doctor'));
}
```

---

## 11. `update`

Updates the doctor:

```php
public function update(
    Request $request,
    Doctor $doctor
) {
    $validated = $request->validate([
        'name' => ['required', 'string'],
        'specialization' => ['required', 'string'],
    ]);

    $doctor->update($validated);

    return redirect()->route('doctors.index');
}
```

---

## 12. `destroy`

Deletes:

```php
public function destroy(Doctor $doctor)
{
    $doctor->delete();

    return redirect()->route('doctors.index');
}
```

---

## 13. Limit Resource Routes

If you only need:

```text
index
show
```

you can use:

```php
Route::resource('doctors', DoctorController::class)
    ->only(['index', 'show']);
```

Or exclude actions:

```php
Route::resource('doctors', DoctorController::class)
    ->except(['destroy']);
```

---

## 14. Hospital Project Example

Your admin system will probably have:

```php
Route::resource('departments', DepartmentController::class);

Route::resource('doctors', DoctorController::class);

Route::resource('services', ServiceController::class);

Route::resource('patients', PatientController::class);

Route::resource('appointments', AppointmentController::class);
```

This is one of the most important Laravel patterns for CRUD applications.
