# Resource Controllers

Resource controllers are designed for CRUD operations.

Create one:

```bash
php artisan make:controller DoctorController --resource
```

Laravel generates:

```php
index()
create()
store()
show()
edit()
update()
destroy()
```

---

## CRUD Mapping

```text
index   → list
create  → show create form
store   → save new record
show    → show one record
edit    → show edit form
update  → update record
destroy → delete record
```

---

## Example

```php
class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Doctor::latest()->get();

        return view('doctors.index', compact('doctors'));
    }

    public function create()
    {
        return view('doctors.create');
    }

    public function store(StoreDoctorRequest $request)
    {
        Doctor::create($request->validated());

        return redirect()
            ->route('doctors.index')
            ->with('success', 'Doctor created.');
    }

    public function show(Doctor $doctor)
    {
        return view('doctors.show', compact('doctor'));
    }

    public function edit(Doctor $doctor)
    {
        return view('doctors.edit', compact('doctor'));
    }

    public function update(
        UpdateDoctorRequest $request,
        Doctor $doctor
    ) {
        $doctor->update($request->validated());

        return redirect()
            ->route('doctors.index')
            ->with('success', 'Doctor updated.');
    }

    public function destroy(Doctor $doctor)
    {
        $doctor->delete();

        return redirect()
            ->route('doctors.index')
            ->with('success', 'Doctor deleted.');
    }
}
```

---

## Tip

Resource controllers are especially useful for:

```text
Doctors
Departments
Services
Patients
Appointments
```

because these resources naturally follow CRUD.
