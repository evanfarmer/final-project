const btn = document.getElementById("roll");
const you = document.getElementById("You");
const computer = document.getElementById("Computer");

const youDice1 = document.getElementById("youDice1");
const youDice2 = document.getElementById("youDice2");

const computerDice1 = document.getElementById("computerDice1");
const computerDice2 = document.getElementById("computerDice2");

const youR1Score = document.getElementById("youR1Results");
const youR2Score = document.getElementById("youR2Results");
const youR3Score = document.getElementById("youR3Results");

const computerR1Score = document.getElementById("computerR1Results");
const computerR2Score = document.getElementById("computerR2Results");
const computerR3Score = document.getElementById("computerR3Results");

const rules = document.getElementById("rules");
const hide = document.getElementById("hide");

const rounds = [1, 2, 3];

const diceImages = [
  "../images/dice1.jpg",
  "../images/dice2.jpg",
  "../images/dice3.jpg",
  "../images/dice4.jpg",
  "../images/dice5.jpg",
  "../images/dice6.jpg",
];

//player object
class Player {
  score = 0;
  dice1Element;
  dice2Element;
  dice1;
  dice2;
  constructor(dice1Element, dice2Element) {
    this.dice1Element = dice1Element;
    this.dice2Element = dice2Element;
  }
  rollDice() {
    this.dice1 = Math.floor(Math.random() * 6 + 1);
    this.dice2 = Math.floor(Math.random() * 6 + 1);
    this.dice1Element.src = diceImages[this.dice1 - 1];
    this.dice2Element.src = diceImages[this.dice2 - 1];
  }
}
//
class Scoreboard {
  score = 0;
  round = 1;
  youTotalScore = 0;
  computerTotalScore = 0;

  constructor() {}

  updateRound() {
    if (this.round <= 3) {
      this.round++;
    } else {
      youR1Score.innerHTML = "";
      youR2Score.innerHTML = "";
      youR3Score.innerHTML = "";
      computerR1Score.innerHTML = "";
      computerR2Score.innerHTML = "";
      computerR3Score.innerHTML = "";
      this.youTotalScore = 0;
      this.computerTotalScore = 0;
      this.round = 1;
    }
  }
  updateScoreBoard(Player) {
    if (Player == player1) {
      const roundScore = this.updateRoundScore(player1.dice1, player1.dice2);

      if (this.round == 1) {
        youR1Score.innerHTML = roundScore;
      } else if (this.round == 2) {
        youR2Score.innerHTML = roundScore;
      } else if (this.round == 3) {
        youR3Score.innerHTML = roundScore;
      }
      this.youTotalScore += roundScore;
    } else {
      const roundScore = this.updateRoundScore(player2.dice1, player2.dice2);
      if (this.round == 1) {
        computerR1Score.innerHTML = roundScore;
      } else if (this.round == 2) {
        computerR2Score.innerHTML = roundScore;
      } else if (this.round == 3) {
        computerR3Score.innerHTML = roundScore;
      }
      this.computerTotalScore += roundScore;
    }
  }
  updateRoundScore(dice1, dice2) {
    if (dice1 == 1 || dice2 == 1) {
      return 0;
    } else if (dice1 == dice2) {
      return (dice1 + dice2) * 2;
    } else {
      return dice1 + dice2;
    }
  }
  //   updateTotalScore(player1, player2) {
  //     if ((this.round = 1)) {
  //       player1.roundScore += this.youTotalScore;
  //     } else if ((this.round = 2)) {
  //       player1.roundScore += this.youTotalScore;
  //     } else if ((this.round = 3)) {
  //       player1.roundScore += this.youTotalScore;
  //     } else if ((this.round = 1)) {
  //       player2.roundScore += this.computerTotalScore;
  //     } else if ((this.round = 2)) {
  //       player2.roundScore += this.computerTotalScore;
  //     } else if ((this.round = 3)) {
  //       player2.roundScore += this.computerTotalScore;
  //     }
  //   }
  endGameMessage(youTotalScore, computerTotalScore) {
    if (youTotalScore > computerTotalScore) {
      document.getElementById("popupText").innerHTML = "You Win!";
    } else if (computerTotalScore > youTotalScore) {
      document.getElementById("popupText").innerHTML = "Computer Wins :(";
    } else if (youTotalScore == computerTotalScore) {
      document.getElementById("popupText").innerHTML = "Draw";
    }
  }
}
console.log(this.youTotalScore);
console.log(this.computerTotalScore);

const player1 = new Player(youDice1, youDice2);
const player2 = new Player(computerDice1, computerDice2);

const scoreBoard = new Scoreboard();

btn.onclick = function () {
  player1.rollDice();
  player2.rollDice();
  scoreBoard.updateScoreBoard(player1);
  scoreBoard.updateScoreBoard(player2);
  scoreBoard.updateRound();
  //   updateTotalScore(player1);
  //   updateTotalScore(player2);
};

$(document).ready(function () {
  $("#hide").click(function () {
    $("#rules").fadeOut();
  });
  $("#show").click(function () {
    $("#rules").fadeIn();
  });
});
