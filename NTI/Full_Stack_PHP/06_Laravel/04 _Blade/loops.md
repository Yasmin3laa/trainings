# Blade Loops

Blade provides convenient directives for loops.

---

# 1. @foreach

```blade
@foreach ($doctors as $doctor)
    <h2>{{ $doctor->name }}</h2>
@endforeach
```

---

# 2. Associative Arrays

```blade
@foreach ($doctor as $key => $value)
    <p>{{ $key }}: {{ $value }}</p>
@endforeach
```

---

# 3. @forelse

`@forelse` is useful when a collection might be empty.

```blade
@forelse ($doctors as $doctor)

    <h2>{{ $doctor->name }}</h2>

@empty

    <p>No doctors found.</p>

@endforelse
```

This is often cleaner than:

```blade
@if ($doctors->count())
```

followed by a separate loop.

---

# 4. $loop Variable

Blade provides a special `$loop` variable.

```blade
@foreach ($doctors as $doctor)

    <p>
        {{ $loop->iteration }}.
        {{ $doctor->name }}
    </p>

@endforeach
```

Useful properties include:

```text
$loop->index
$loop->iteration
$loop->first
$loop->last
$loop->count
```

---

# 5. Example

```blade
@foreach ($doctors as $doctor)

    <div class="doctor-card">

        <h3>
            {{ $loop->iteration }}.
            {{ $doctor->name }}
        </h3>

        <p>{{ $doctor->specialization }}</p>

        @if ($loop->last)
            <p>This is the last doctor.</p>
        @endif

    </div>

@endforeach
```

---

# Tip

For database records, you will use:

```blade
@foreach ($doctors as $doctor)
```

very frequently.

This is one of the most important Blade patterns.
