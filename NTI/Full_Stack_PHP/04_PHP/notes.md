# 🐘 PHP Notes

A collection of **PHP notes** covering the fundamentals of PHP, web development concepts, OOP, forms, sessions, cookies, file handling, and database operations.

These notes are useful for **learning, revision, and quick reference** while working with PHP.

---

## 🐘 PHP Basics

PHP is a **server-side scripting language** commonly used to build dynamic websites and web applications.

```php
<?php

echo "Hello World";

?>
```

### Variables

PHP variables start with `$`.

```php
$name = "Yaso";
$age = 20;

echo $name;
echo $age;
```

PHP is dynamically typed:

```php
$name = "Yaso";
$name = 20;
```

---

## 🔤 Data Types

Common PHP data types:

```php
$string = "Hello";
$integer = 10;
$float = 10.5;
$boolean = true;
$array = [1, 2, 3];
$null = null;
```

Check the data type:

```php
var_dump($string);
```

---

## 📌 Constants

### `define()`

```php
define("SITE_NAME", "My Website");

echo SITE_NAME;
```

### `const`

```php
const PI = 3.14;

echo PI;
```

---

## ➕ Operators

### Arithmetic Operators

```php
$a + $b;
$a - $b;
$a * $b;
$a / $b;
$a % $b;
```

### Comparison Operators

```php
$a == $b;
$a === $b;
$a != $b;
$a !== $b;
$a > $b;
$a < $b;
$a >= $b;
$a <= $b;
```

### `==` vs `===`

```php
5 == "5";    // true
5 === "5";   // false
```

`===` checks both the **value and the data type**.

---

## 🔀 Conditions

### `if / elseif / else`

```php
$age = 20;

if ($age >= 18) {
    echo "Adult";
} elseif ($age >= 13) {
    echo "Teen";
} else {
    echo "Child";
}
```

### Ternary Operator

```php
$message = $age >= 18 ? "Adult" : "Minor";
```

---

## 🔄 Loops

### `for`

```php
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
```

### `while`

```php
$i = 1;

while ($i <= 5) {
    echo $i;
    $i++;
}
```

### `foreach`

```php
$names = ["Ali", "Yaso", "Ahmed"];

foreach ($names as $name) {
    echo $name;
}
```

With keys:

```php
$user = [
    "name" => "Yaso",
    "age" => 20
];

foreach ($user as $key => $value) {
    echo "$key : $value";
}
```

---

## 📦 Arrays

### Indexed Array

```php
$colors = ["red", "blue", "green"];

echo $colors[0];
```

### Associative Array

```php
$user = [
    "name" => "Yaso",
    "age" => 20
];

echo $user["name"];
```

### Multidimensional Array

```php
$users = [
    [
        "name" => "Ali",
        "age" => 20
    ],
    [
        "name" => "Yaso",
        "age" => 21
    ]
];

echo $users[0]["name"];
```

---

## 🧩 Functions

### Basic Function

```php
function sayHello() {
    echo "Hello";
}

sayHello();
```

### Parameters

```php
function welcome($name) {
    echo "Welcome $name";
}

welcome("Yaso");
```

### Return Value

```php
function add($a, $b) {
    return $a + $b;
}

$result = add(10, 20);

echo $result;
```

---

## 📂 Include & Require

Used to reuse PHP files.

```php
include "navbar.php";
```

```php
require "config.php";
```

### Main Difference

* `include` → Generates a warning if the file is missing and continues execution.
* `require` → Generates a fatal error and stops execution.

### Once

```php
include_once "navbar.php";
require_once "connect.php";
```

---

## 📝 Forms

### HTML Form

```html
<form method="POST">
    <input type="text" name="username">

    <button type="submit">
        Send
    </button>
</form>
```

### Handling POST Data

```php
if (isset($_POST['username'])) {
    $username = $_POST['username'];

    echo $username;
}
```

### GET

```php
$id = $_GET['id'];
```

### POST

```php
$username = $_POST['username'];
```

---

## 🌐 Superglobals

PHP provides several predefined superglobal variables:

```php
$_GET
$_POST
$_REQUEST
$_SESSION
$_COOKIE
$_FILES
$_SERVER
```

Example:

```php
echo $_SERVER['REQUEST_METHOD'];
```

---

## 🔐 Sessions

Sessions are used to store user information across multiple pages.

```php
session_start();

$_SESSION['userID'] = 10;
$_SESSION['username'] = "Yaso";
```

Read session data:

```php
session_start();

echo $_SESSION['username'];
```

Remove a session variable:

```php
unset($_SESSION['username']);
```

Destroy the session:

```php
session_destroy();
```

> Remember to call `session_start()` before working with `$_SESSION`.

---

## 🍪 Cookies

### Create a Cookie

```php
setcookie(
    "color",
    "blue",
    time() + 86400,
    "/"
);
```

### Read a Cookie

```php
echo $_COOKIE['color'];
```

### Delete a Cookie

```php
setcookie(
    "color",
    "",
    time() - 3600,
    "/"
);
```

---

## 📄 File Handling

### Open a File

```php
$file = fopen("data.txt", "r");
```

### Read a File

```php
$content = fread(
    $file,
    filesize("data.txt")
);
```

### Close a File

```php
fclose($file);
```

### Write to a File

```php
file_put_contents(
    "data.txt",
    "Hello PHP"
);
```

### Read the Entire File

```php
$content = file_get_contents("data.txt");
```

---

## ⚠️ Error Handling

Using `try / catch`:

```php
try {

    // Code

} catch (Exception $e) {

    echo $e->getMessage();

}
```

Example:

```php
try {
    throw new Exception("Something went wrong");
} catch (Exception $e) {
    echo $e->getMessage();
}
```

---

## 🔤 String Functions

Some commonly used string functions:

```php
strlen("Hello");

strtolower("HELLO");

strtoupper("hello");

trim(" Hello ");

str_replace(
    "PHP",
    "Laravel",
    "I love PHP"
);
```

### `explode()`

Convert a string into an array:

```php
explode(",", "PHP,HTML,CSS");
```

### `implode()`

Convert an array into a string:

```php
implode("-", ["2026", "09", "10"]);
```

---

## 📊 Array Functions

Common array functions:

```php
count($array);

in_array("PHP", $array);

array_push($array, "JavaScript");

array_pop($array);

sort($array);

rsort($array);
```

For associative arrays:

```php
array_keys($user);

array_values($user);
```

---

# 🧱 Object-Oriented Programming

## Class

```php
class User {

    public $name;

    public function sayHello() {
        echo "Hello";
    }
}
```

## Object

```php
$user = new User();

$user->name = "Yaso";

$user->sayHello();
```

---

## 🏗️ Constructor

The constructor runs automatically when an object is created.

```php
class User {

    public $name;

    public function __construct($name) {
        $this->name = $name;
    }
}

$user = new User("Yaso");

echo $user->name;
```

---

## 🔒 Access Modifiers

### Public

Accessible from anywhere.

```php
public $name;
```

### Private

Accessible only inside the same class.

```php
private $password;
```

### Protected

Accessible inside the class and its child classes.

```php
protected $email;
```

---

## 🧬 Inheritance

A class can inherit properties and methods from another class.

```php
class Animal {

    public function eat() {
        echo "Eating";
    }
}

class Dog extends Animal {

    public function bark() {
        echo "Bark";
    }
}
```

Usage:

```php
$dog = new Dog();

$dog->eat();
$dog->bark();
```

---

## 🔐 Encapsulation

Encapsulation protects data by controlling how it can be accessed.

```php
class User {

    private $password;

    public function setPassword($password) {
        $this->password = $password;
    }

    public function getPassword() {
        return $this->password;
    }
}
```

---

## ⚡ Static

Static methods can be called without creating an object.

```php
class Math {

    public static function add($a, $b) {
        return $a + $b;
    }
}
```

Usage:

```php
echo Math::add(10, 20);
```

---

# 🗄️ MySQLi & Database

**MySQLi (MySQL Improved)** is a PHP extension used to connect PHP applications to **MySQL databases**.

### Database Connection

```php
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "school"
);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
```

### Connection Parameters

```text
localhost → Database server
root      → MySQL username
""        → MySQL password
school    → Database name
```

### Prepared Statements

Prepared statements can be used to safely execute queries with user input.

```php
$stmt = $conn->prepare(
    "SELECT * FROM users WHERE id = ?"
);

$stmt->bind_param("i", $id);

$stmt->execute();

$result = $stmt->get_result();

$user = $result->fetch_assoc();
```

### Close Connection

```php
$conn->close();
```

### Basic CRUD with MySQLi

#### INSERT

```php
$stmt = $conn->prepare(
    "INSERT INTO users (name, email) VALUES (?, ?)"
);

$stmt->bind_param("ss", $name, $email);

$stmt->execute();
```

#### SELECT

```php
$result = $conn->query(
    "SELECT * FROM users"
);

while ($row = $result->fetch_assoc()) {
    echo $row['name'];
}
```

#### UPDATE

```php
$stmt = $conn->prepare(
    "UPDATE users SET name = ? WHERE id = ?"
);

$stmt->bind_param("si", $name, $id);

$stmt->execute();
```

#### DELETE

```php
$stmt = $conn->prepare(
    "DELETE FROM users WHERE id = ?"
);

$stmt->bind_param("i", $id);

$stmt->execute();
```

> **Note:** Prepared statements are recommended when working with user input because they help protect against **SQL Injection**.

---

# 🔄 CRUD

CRUD stands for:

| Operation | SQL      |
| --------- | -------- |
| Create    | `INSERT` |
| Read      | `SELECT` |
| Update    | `UPDATE` |
| Delete    | `DELETE` |

### INSERT

```sql
INSERT INTO users (name, email)
VALUES ('Yaso', 'yaso@example.com');
```

### SELECT

```sql
SELECT * FROM users;
```

### UPDATE

```sql
UPDATE users
SET name = 'Ahmed'
WHERE id = 1;
```

### DELETE

```sql
DELETE FROM users
WHERE id = 1;
```

---

# 🛠️ Useful PHP Functions

```php
isset($value);

empty($value);

is_array($value);

is_string($value);

is_numeric($value);
```

### `htmlspecialchars()`

Useful when displaying user-provided data inside HTML:

```php
echo htmlspecialchars($name);
```

Example:

```php
<h2>
    <?= htmlspecialchars($user['name']) ?>
</h2>
```

---

# 🔀 Redirect

Redirect the user to another page:

```php
header("Location: home.php");
exit();
```

Using `exit()` after `header()` ensures that the current script stops executing.

---

# 🔑 Password Hashing

Passwords should **never be stored as plain text**.

### Hash a Password

```php
$hash = password_hash(
    $password,
    PASSWORD_DEFAULT
);
```

### Verify a Password

```php
if (password_verify($password, $hash)) {
    echo "Correct password";
}
```

---

## 🎯 Main Concepts

Through these notes, you can practice:

* PHP Syntax
* Variables & Data Types
* Conditions & Loops
* Arrays
* Functions
* Forms & User Input
* Sessions & Cookies
* File Handling
* Error Handling
* Object-Oriented Programming
* Inheritance
* Encapsulation
* Static Methods
* SQL
* CRUD Operations
* Password Hashing
* Basic Web Application Concepts

---

## 🚀 Goal

The goal of these notes is to build a strong foundation in **PHP development** and prepare for building dynamic web applications and backend systems.

---

## 👨‍💻 Author

**Yasmine Alaa**

> PHP Learning Notes & Quick Reference 🐘
