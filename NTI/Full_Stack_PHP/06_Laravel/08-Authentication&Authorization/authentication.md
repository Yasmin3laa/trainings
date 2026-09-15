# Authentication

Authentication answers:

> Who are you?

Examples:

```text
Login
Logout
Registration
Password verification
Remembering authenticated users
```

---

# Authentication vs Authorization

These are different concepts.

Authentication:

```text
Who are you?
```

Authorization:

```text
What are you allowed to do?
```

Example:

```text
Admin logs in
       ↓
Authentication

Can admin delete a doctor?
       ↓
Authorization
```

---

# Hospital Example

Your system may have:

```text
Admin
Receptionist
Doctor
```

All may authenticate.

But their permissions can be different.

For example:

```text
Admin
 ├── Manage doctors
 ├── Manage departments
 ├── Manage services
 └── Manage users

Receptionist
 ├── Register patients
 └── Manage appointments

Doctor
 ├── View appointments
 └── Manage assigned medical records
```

---

# Authentication System

Laravel authentication can be provided through Laravel's supported starter/authentication approaches.

The important concepts to understand are:

```text
User
 ↓
Login
 ↓
Authenticated session
 ↓
Protected routes
```

---

# Checking Authentication

In Blade:

```blade
@auth
    <p>Welcome!</p>
@endauth
```

Or:

```blade
@guest
    <a href="/login">Login</a>
@endguest
```

---

# Tip

Don't think of authentication as just a login page.

Authentication is the complete process of:

```text
Credentials
 ↓
Identity verification
 ↓
Session
 ↓
Authenticated user
 ↓
Protected resources
```
