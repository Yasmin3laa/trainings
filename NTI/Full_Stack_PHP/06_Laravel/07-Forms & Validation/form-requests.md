# Form Requests

As an application grows, validation rules can make controllers large.

Laravel provides Form Request classes to organize validation.

---

# 1. Create a Form Request

```bash
php artisan make:request StoreDoctorRequest
```

This creates a request class under:

```text
app/Http/Requests
```

---

# 2. Validation Rules

Example:

```php
public function rules(): array
{
    return [
        'name' => 'required|string|max:255',

        'specialization' =>
            'required|string|max:255',

        'experience' =>
            'required|integer|min:0',

        'department_id' =>
            'required|exists:departments,id',
    ];
}
```

---

# 3. Use the Request in Controller

Instead of:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        ...
    ]);
}
```

you can use:

```php
public function store(StoreDoctorRequest $request)
{
    Doctor::create($request->validated());

    return redirect()
        ->route('doctors.index');
}
```

---

# 4. Why Form Requests?

They keep controllers cleaner.

Without Form Request:

```text
Controller
 ├── Validation
 ├── Business logic
 ├── Database logic
 └── Response
```

With Form Request:

```text
Form Request
 └── Validation

Controller
 ├── Business logic
 ├── Database logic
 └── Response
```

---

# Tip

Start with:

```php
$request->validate([...]);
```

while learning.

When your project becomes larger, Form Requests become very useful.

For CarePoint, you could eventually have:

```text
StoreDoctorRequest
UpdateDoctorRequest
StorePatientRequest
UpdatePatientRequest
StoreAppointmentRequest
```
