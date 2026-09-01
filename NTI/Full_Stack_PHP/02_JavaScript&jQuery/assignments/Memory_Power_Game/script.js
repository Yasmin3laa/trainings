const items = ["🍎", "🍌", "🍒", "🍕", "🚀", "🎮", "⚽", "💎"];

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matchedPairs = 0;
let timerInterval = null;
let seconds = 0;
let gameStarted = false;

function initGame() {
  const $board = $("#game-board");
  $board.empty();
  $("#win-screen").css("display", "none");

  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  moves = 0;
  matchedPairs = 0;
  seconds = 0;
  gameStarted = false;

  $("#moves").text(moves);
  $("#timer").text(seconds);
  clearInterval(timerInterval);

  const deck = [...items, ...items].sort(() => 0.5 - Math.random());

  deck.forEach((symbol) => {
    const cardHTML = `
          <div class="card" data-symbol="${symbol}">
            <div class="front-face">${symbol}</div>
            <div class="back-face">❓</div>
          </div>
        `;
    $board.append(cardHTML);
  });

  $(".card").on("click", flipCard);
}

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    $("#timer").text(seconds);
  }, 1000);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

  $(this).addClass("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  $("#moves").text(moves);

  checkForMatch();
}

function checkForMatch() {
  let isMatch = $(firstCard).data("symbol") === $(secondCard).data("symbol");

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  $(firstCard).off("click", flipCard);
  $(secondCard).off("click", flipCard);

  matchedPairs++;
  resetBoard();

  if (matchedPairs === items.length) {
    clearInterval(timerInterval);
    setTimeout(() => {
      $("#final-stats").text(
        `You finished the game in ${moves} move and ${seconds} seconds.`,
      );
      $("#win-screen").css("display", "flex");
    }, 500);
  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    $(firstCard).removeClass("flip");
    $(secondCard).removeClass("flip");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

$(document).ready(function () {
  initGame();
  $("#restart-btn").on("click", initGame);
});
