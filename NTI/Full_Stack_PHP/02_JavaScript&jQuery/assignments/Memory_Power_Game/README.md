# 🧠 Memory Power Game

A fun and interactive **Memory Card Game** built using **HTML5, CSS3, JavaScript, and jQuery**.

The goal of the game is simple: **find all matching card pairs using the fewest possible moves and in the shortest time.**

---

## 🎮 Game Preview

<p align="center">
  <img src="screenshots/game_pic1.png" width="45%" alt="Memory Power Game - Game Board"/>
  <img src="screenshots/game_pic2.png" width="45%" alt="Memory Power Game - Cards"/>
</p>

<p align="center">
  <img src="screenshots/show_win.png" width="60%" alt="Memory Power Game - Winning Screen"/>
</p>

---

## 🎥 Demo

You can watch a complete gameplay demonstration here:

[▶️ Watch Memory Power Game Demo](screenshots/Memory_Power_Game.mp4)

---

## ✨ Features

* 🃏 **16 Cards** — The game contains 8 matching pairs.
* 🔀 **Randomized Cards** — Cards are shuffled when the game starts.
* ⏱️ **Timer** — Tracks the time spent playing.
* 🔢 **Moves Counter** — Counts the number of attempts.
* 🧠 **Matching System** — Checks whether the selected cards match.
* 🔒 **Board Lock** — Prevents additional card selections while unmatched cards are being checked.
* 🏆 **Winning Screen** — Appears after finding all matching pairs.
* 🔄 **Restart Game** — Allows the player to restart the game at any time.
* 🎨 **Interactive UI** — Provides a simple and engaging user experience.
* ⚡ **Dynamic Card Generation** — Cards are generated dynamically using JavaScript/jQuery.

---

## 🛠️ Technologies Used

<p align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>

<img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery"/>

</p>

---

## 📂 Project Structure

```text
Memory_Power_Game/
│
├── screenshots/
│   ├── Memory_Power_Game.mp4
│   ├── game_pic1.png
│   ├── game_pic2.png
│   └── show_win.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧩 How the Game Works

### 1. Game Initialization

When the game starts, a deck of cards is created.

The deck contains **8 different symbols**, with each symbol appearing twice, resulting in **16 cards**.

The cards are then shuffled before being displayed on the board.

---

### 2. Selecting Cards

The player clicks on a card to reveal its hidden symbol.

The game stores the first selected card.

When the player selects a second card, the game compares the two cards.

---

### 3. Matching Logic

The game checks whether the two selected cards contain the same symbol.

If the cards match:

* The cards remain visible.
* The pair becomes inactive.
* The matched-pairs counter is updated.

If the cards do not match:

* The board is temporarily locked.
* The cards are flipped back after a short delay.
* The player can continue searching for pairs.

---

### 4. Timer

The timer starts when the player begins playing.

It continuously counts the elapsed time until the game is completed.

The timer is stopped automatically when all pairs have been found.

---

### 5. Moves Counter

The game keeps track of the player's moves.

A move is counted when the player selects the second card of a pair.

The counter helps the player keep track of their performance.

---

### 6. Winning the Game 🏆

The player wins after successfully matching all **8 pairs**.

Once the game is completed:

* The timer stops.
* The board is completed.
* A winning screen is displayed.
* The final number of moves and elapsed time are shown.

---

## 🔄 Restart Game

The **Restart** button allows the player to start a new game.

Restarting the game resets:

* 🃏 Cards
* 🔀 Card order
* ⏱️ Timer
* 🔢 Moves counter
* 🧠 Matched pairs
* 🎯 Selected cards
* 🔒 Board state

A new shuffled deck is generated for every new game.

---

## 💻 Main JavaScript Concepts

This project demonstrates several important JavaScript concepts.

### Arrays

Arrays are used to store the card symbols and create the game deck.

```javascript
const items = [
    "🍎",
    "🍌",
    "🍒",
    "🍕",
    "🚀",
    "🎮",
    "⚽",
    "💎"
];
```

The symbols are duplicated to create matching pairs.

---

### Randomization

The cards are shuffled so that the game layout changes each time.

```javascript
const deck = [...items, ...items];
```

---

### DOM Manipulation

JavaScript and jQuery are used to dynamically create and update the game elements.

---

### Event Handling

The game responds to user interactions such as:

* Card clicks
* Restart button clicks

---

### Timers

The project uses JavaScript timers to implement the game clock and delayed card flipping.

Examples include:

```javascript
setInterval()
```

and

```javascript
setTimeout()
```

---

### State Management

The game keeps track of different states, including:

* First selected card
* Second selected card
* Number of moves
* Number of matched pairs
* Timer state
* Board lock state

---

## 📚 Concepts Practiced

During the development of this project, I practiced:

* HTML5
* CSS3
* JavaScript fundamentals
* jQuery
* DOM Manipulation
* Event Handling
* Arrays
* Array Methods
* Functions
* Conditional Statements
* Variables
* Randomization
* `setInterval()`
* `setTimeout()`
* Dynamic HTML Elements
* CSS Classes Manipulation
* Game Logic
* State Management
* User Interaction

---

## 🎯 Learning Objectives

The main objective of this project was to apply **JavaScript and jQuery concepts** in a real interactive web application.

Through this project, I practiced how to:

* Build an interactive webpage.
* Manipulate the DOM dynamically.
* Handle user events.
* Manage application state.
* Work with arrays and data.
* Implement timers.
* Create game logic.
* Control UI states.
* Build a complete browser-based game.

---

## 🚀 How to Run the Project

### Option 1 — Open Directly

Clone or download the repository, then open:

```text
index.html
```

in your browser.

---

### Option 2 — Using VS Code

1. Open the project folder in **Visual Studio Code**.
2. Open `index.html`.
3. Run the project using a local development server such as **Live Server**.
4. Start playing 🎮.

---

## 📸 Screenshots

### Game Board

<p align="center">
  <img src="screenshots/game_pic1.png" width="80%" alt="Game Board"/>
</p>

### Gameplay

<p align="center">
  <img src="screenshots/game_pic2.png" width="80%" alt="Gameplay"/>
</p>

### Winning Screen

<p align="center">
  <img src="screenshots/show_win.png" width="80%" alt="Winning Screen"/>
</p>

---

## 🎓 Training

This project was developed as part of the:

**NTI — Full Stack PHP Training**

### Course

**JavaScript & jQuery**

### Assignment

**Memory Power Game**

---

## 👩‍💻 Author

### Yasmine 3laa

Full Stack Web Development Trainee

<p align="center">

<a href="https://github.com/Yasmin3laa">
  <img src="https://img.shields.io/badge/GitHub-Yasmin3laa-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

</p>

---

## ⭐ Project

If you like this project, feel free to explore the repository and check out the other projects developed during the training.

**Made with ❤️ using HTML, CSS, JavaScript & jQuery.**
