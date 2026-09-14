# Database Queries

Laravel provides the Query Builder for interacting with databases.

You can use:

```php
use Illuminate\Support\Facades\DB;
```

---

# 1. Get All Records

```php
$doctors = DB::table('doctors')->get();
```

---

# 2. Find by ID

```php
$doctor = DB::table('doctors')->find(1);
```

---

# 3. Where

```php
$doctors = DB::table('doctors')
    ->where('is_active', true)
    ->get();
```

---

# 4. Multiple Conditions

```php
$doctors = DB::table('doctors')
    ->where('is_active', true)
    ->where('experience', '>=', 10)
    ->get();
```

---

# 5. Where In

```php
$doctors = DB::table('doctors')
    ->whereIn('department_id', [1, 2, 3])
    ->get();
```

---

# 6. Order By

```php
$doctors = DB::table('doctors')
    ->orderBy('name')
    ->get();
```

Descending:

```php
->orderBy('name', 'desc')
```

---

# 7. Select Specific Columns

```php
$doctors = DB::table('doctors')
    ->select('id', 'name', 'specialization')
    ->get();
```

Avoid selecting unnecessary columns when you don't need them.

---

# 8. First Record

```php
$doctor = DB::table('doctors')
    ->where('id', 1)
    ->first();
```

---

# 9. Insert

```php
DB::table('doctors')->insert([
    'name' => 'Dr. Yasmine Alaa',
    'specialization' => 'Cardiology',
]);
```

---

# 10. Update

```php
DB::table('doctors')
    ->where('id', 1)
    ->update([
        'is_active' => false,
    ]);
```

---

# 11. Delete

```php
DB::table('doctors')
    ->where('id', 1)
    ->delete();
```

---

# 12. Count

```php
$count = DB::table('doctors')->count();
```

---

# 13. Aggregates

```php
$maxExperience = DB::table('doctors')->max('experience');

$minExperience = DB::table('doctors')->min('experience');

$averageExperience = DB::table('doctors')->avg('experience');
```

---

# 14. Pagination

```php
$doctors = DB::table('doctors')
    ->paginate(10);
```

This is useful when displaying many doctors.

---

# 15. Transactions

Transactions are useful when several database operations must succeed together.

```php
DB::transaction(function () {

    // Operation 1

    // Operation 2

    // Operation 3

});
```

If an exception occurs, the transaction can be rolled back.

---

# Query Builder vs Eloquent

Query Builder:

```php
DB::table('doctors')->get();
```

Eloquent:

```php
Doctor::all();
```

For Laravel applications, Eloquent is often the preferred approach when working with application models.

Use Query Builder when it makes sense for a particular query.

---

# Tip

Do not learn Query Builder as a replacement for Eloquent.

Learn both.

Think:

```text
Query Builder
    ↓
Database-focused queries

Eloquent
    ↓
Application-focused models + relationships
```
