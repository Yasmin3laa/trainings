# File Storage

Laravel provides a filesystem abstraction for storing files.

Common examples:

```text
Doctor profile images
Hospital logo
Patient documents
Medical files
Service images
```

---

# Storage Disks

Laravel can work with different storage locations through configured disks.

The most common local disk is:

```text
storage/app
```

---

# 1. Store a File

Suppose:

```php
$request->file('image')->store('doctors');
```

Laravel stores the uploaded file in the configured storage disk.

---

# 2. Specify a Disk

Conceptually:

```php
$request->file('image')->store(
    'doctors',
    'public'
);
```

---

# 3. Retrieve File Path

The returned value is the stored path.

For example:

```text
doctors/abc123.jpg
```

Store that path in your database rather than storing the entire file inside the database.

---

# Tip

Usually:

```text
Database
    ↓
Stores file path

Storage
    ↓
Stores actual file
```

This keeps your database design cleaner.
