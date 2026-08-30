# Django Fundamentals

Notes and practical commands covering the fundamentals of building web applications with Django.

## 1. Create a Virtual Environment

Create a virtual environment:

```bash
py -m venv env
```

Activate the virtual environment on Windows PowerShell:

```bash
env\Scripts\Activate.ps1
```

---

## 2. Install Django

Install Django:

```bash
py -m pip install Django
```

Check the installed Django version:

```bash
django-admin --version
```

---

## 3. Create a Django Project

Create a new project:

```bash
django-admin startproject project_name
```

Navigate to the project:

```bash
cd project_name
```

Run the development server:

```bash
py manage.py runserver
```

Stop the server:

```text
Ctrl + C
```

---

## 4. Create a Django App

Create a new app:

```bash
py manage.py startapp app_name
```

---

## 5. Add the App to Settings

Open:

```text
project_name/settings.py
```

Add the application to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ...
    'members',
]
```

---

## 6. Create `urls.py` in the App

Create:

```text
members/urls.py
```

Add:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
]
```

---

## 7. Connect App URLs to Project URLs

Open the project's `urls.py`.

Import `include`:

```python
from django.urls import include, path
```

Add the app URLs to `urlpatterns`:

```python
urlpatterns = [
    path('', include('members.urls')),
]
```

---

## 8. Create Views

Open:

```text
members/views.py
```

Create the required view functions.

Example:

```python
from django.http import HttpResponse

def members(request):
    return HttpResponse("Hello from Members")
```

---

## 9. Create Templates

Create a `templates` folder for HTML files.

Example:

```text
templates/
├── home.html
└── members.html
```

Use Django templates to create dynamic web pages.

---

## 10. Run Migrations

When Django requires database migrations:

```bash
py manage.py migrate
```

Run the development server:

```bash
py manage.py runserver
```

---

# Models and Database

## 11. Create Models

Open:

```text
models.py
```

Create database tables using Python classes.

Example:

```python
from django.db import models

class Member(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
```

Create migrations:

```bash
py manage.py makemigrations
```

Apply migrations:

```bash
py manage.py migrate
```

---

# Django ORM

## 12. Add Records

Open the Django shell:

```bash
py manage.py shell
```

Import the model:

```python
from members.models import Member
```

Display all records:

```python
Member.objects.all()
```

Create a new record:

```python
member = Member(
    firstname='Emil',
    lastname='Refsnes'
)

member.save()
```

Display records as dictionaries:

```python
Member.objects.all().values()
```

---

## 13. Update Records

Import the model:

```python
from members.models import Member
```

Retrieve a record:

```python
x = Member.objects.all()[4]
```

Update a field:

```python
x.firstname = "Stalikken"
x.save()
```

---

## 14. Delete Records

Retrieve a record:

```python
x = Member.objects.all()[4]
```

Delete it:

```python
x.delete()
```

---

# Django Admin

## 15. Access the Admin Interface

Run the server:

```bash
py manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/admin/
```

---

## 16. Create a Superuser

Create an admin user:

```bash
py manage.py createsuperuser
```

Then run the server:

```bash
py manage.py runserver
```

---

## 17. Register Models in Admin

Open:

```text
admin.py
```

Import the model and register it:

```python
from django.contrib import admin
from .models import Member

admin.site.register(Member)
```

The model will now appear in the Django Admin interface.

---

## 18. Make Records More Readable

Define the `__str__()` method inside the model:

```python
def __str__(self):
    return f"{self.firstname} {self.lastname}"
```

This makes model records easier to identify in the Django Admin interface.

---

# Concepts Practiced

* Virtual Environments
* Django Installation
* Django Projects
* Django Apps
* URL Routing
* Views
* Templates
* Models
* Migrations
* Django ORM
* CRUD Operations
* Django Shell
* Django Admin
* Superusers
* Model Registration
* `__str__()`

## Purpose

These notes document my Django fundamentals training and provide a reference for the main concepts and commands used when building Django web applications.
