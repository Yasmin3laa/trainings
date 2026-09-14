# Dependency Injection

## 1. What Is Dependency Injection?

Dependency Injection means giving a class the objects it needs instead of making the class create those objects itself.

---

## 2. The Problem

Imagine:

```php
class DoctorController
{
    public function index()
    {
        $service = new DoctorService();

        return $service->getDoctors();
    }
}
```

The controller is tightly connected to the concrete implementation.

---

## 3. Dependency Injection

Instead:

```php
class DoctorController
{
    public function __construct(
        private DoctorService $doctorService
    ) {}

    public function index()
    {
        return $this->doctorService->getDoctors();
    }
}
```

Laravel's service container can resolve many dependencies automatically.

---

## 4. Why Use Dependency Injection?

It improves:

* Testability
* Maintainability
* Flexibility
* Separation of responsibilities

---

## 5. Method Injection

Dependencies can also be injected into methods when appropriate.

```php
public function store(
    Request $request
) {
    // ...
}
```

Laravel resolves the request object.

---

Without DI:

```text
Controller
   ↓
creates dependency
```

With DI:

```text
Laravel Container
       ↓
Dependency
       ↓
Controller
```

---

## Tip

You do not need to create a service class for every tiny operation.

Use dependency injection when a class genuinely depends on another service/object.
