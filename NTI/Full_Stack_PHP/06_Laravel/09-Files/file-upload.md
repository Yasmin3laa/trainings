# File Uploads

File uploads are common in hospital applications.

Example:

```text
Doctor
 └── profile image
```

---

# 1. Form

The form needs:

```blade
<form
    action="{{ route('doctors.store') }}"
    method="POST"
    enctype="multipart/form-data"
>

    @csrf

    <input
        type="file"
        name="image"
    >

    <button type="submit">
        Save
    </button>

</form>
```

The important part is:

```text
enctype="multipart/form-data"
```

---

# 2. Validate the File

```php
$request->validate([
    'image' => 'nullable|image|max:2048',
]);
```

The exact validation rules should match your application's requirements.

---

# 3. Store the File

```php
$imagePath = null;

if ($request->hasFile('image')) {

    $imagePath = $request
        ->file('image')
        ->store('doctors', 'public');
}
```

Then save:

```php
Doctor::create([
    'name' => $request->name,
    'image' => $imagePath,
]);
```

---

# 4. Display the Image

If the file is stored on the public disk, Laravel applications commonly expose that storage through a symbolic link.

Then:

```blade
<img
    src="{{ asset('storage/' . $doctor->image) }}"
    alt="{{ $doctor->name }}"
>
```

---

# Security

Never trust uploaded files simply because the browser says they are images.

Always validate uploads on the server.

Consider:

```text
File type
File size
Storage location
Generated filename
Access permissions
```

---

# Tip

Don't use the original user filename as your only storage identifier.

Let Laravel generate a safe stored filename/path.
