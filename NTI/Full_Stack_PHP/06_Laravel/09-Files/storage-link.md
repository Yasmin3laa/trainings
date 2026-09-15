# Storage Link

Laravel's public storage setup commonly uses:

```bash
php artisan storage:link
```

This creates a symbolic link allowing files stored on the public disk to be accessible through the application's public web path.

Conceptually:

```text
storage/app/public
        ↓
public/storage
```

---

# Example

Suppose the file is:

```text
storage/app/public/doctors/doctor.jpg
```

It can be accessed through the application's public storage path:

```text
/storage/doctors/doctor.jpg
```

In Blade:

```blade
<img
    src="{{ asset('storage/doctors/doctor.jpg') }}"
    alt="Doctor"
>
```

---

# Common Problem

If the image exists in:

```text
storage/app/public
```

but doesn't appear in the browser, check whether you have run:

```bash
php artisan storage:link
```

---

# Tip

```text
Uploaded file
      ↓
storage/app/public
      ↓
storage:link
      ↓
public/storage
      ↓
Browser
```
