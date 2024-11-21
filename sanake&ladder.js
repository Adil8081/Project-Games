function dice(playerName) {
  const diceNo = Math.ceil(Math.random() * 6);
  console.log(playerName + " got " + diceNo);
  return diceNo;
}

function playerScore(currentScore, playerName) {
  return currentScore + dice(playerName);
}

function border(width) {
  if (width < 1) {
    return '';
  }
  return '-' + border(width - 1);
}

function movePlayer(Number, playerName) {
  switch (Number) {
    // snake
    case 28:
      console.log("Bitten by snake 🐸, go down at 10 " + playerName);
      return 10;
    case 37:
      console.log("Bitten by snake 🐸, go down at 3 " + playerName);
      return 3;
    case 48:
      console.log("Bitten by snake 🐸, go down at 16 " + playerName);
      return 16;
    case 75:
      console.log("Bitten by snake 🐸, go down at 32 " + playerName);
      return 32;
    case 94:
      console.log("Bitten by snake 🐸, go down at 71 " + playerName);
      return 71;
    case 96:
      console.log("Bitten by snake 🐸, go down at 42 " + playerName);
      return 42;
    // Ladder
    case 4:
      console.log("'Woo Hoo! 🎊' ", playerName, " got ladders, go to 56");
      return 56;
    case 12:
      console.log("'Woo Hoo! 🎊' ", playerName, " got ladders, go to 50");
      return 50;
    case 14:
      console.log("'Woo Hoo! 🎊' ", playerName, " got ladders, go to 55");
      return 55;
    case 22:
      console.log("'Woo Hoo! 🎊' ", playerName, " got ladders, go to 58");
      return 58;
    case 41:
      console.log("'Woo Hoo! 🎊' ", playerName, " got ladders, go to 79");
      return 79;
    case 54:
      console.log("'Woo Hoo! 🎊' ", playerName, " got ladders, go to 88");
      return 88;
    default:
      return Number;
  }
}

function map(number, player1Score, player2Score) {
  let pad = '';

  if (number === 28 || number === 37 || number === 48 || number === 75 || number === 94 || number === 96) {
    num = '🐍';
  }

  for (number; number > 0; number--) {
    let num = number === player1Score ? '🟨' : number;

    if (number === 4 || number === 12 || number === 14 || number === 22 || number === 41 || number === 54) {
      num = "🪜";
    }

    if (number === 28 || number === 37 || number === 48 || number === 75 || number === 94 || number === 96) {
      num = '🐍';
    }

    if (number === player2Score) {
      num = "🟦";
    }

    if (player1Score === number && player2Score === number) {
      num = '🔳';
    }

    if (num === 100) {
      pad = border(97) + "\n" + num + "  |";
      continue;
    }

    if (number % 10 === 0) {
      num = "\n" + border(97) + "\n" + num;
    }

    if (num > 0 && num < 10) {
      pad = pad + "|   " + num + "    |";
      continue;
    }

    pad = pad + "|   " + num + "   |";
  }

  return pad + "|";
}

function hostGame(player1Name, player2Name, player1Score, player2Score) {
  if (player1Score > 99 || player2Score > 99) {
    const winner = player1Score > player2Score ? player1Name : player2Name;
    console.log("Hurray " + winner + " won the match");
    return;
  }

  prompt("Press ENTER to roll dice : 🟦 ", player1Name);
  console.clear();
  player1Score = playerScore(player1Score, player1Name);
  player1Score = movePlayer(player1Score, player1Name);
  console.log(map(100, player1Score, player2Score), "\n", border(96));

  if (player1Score > 99 || player2Score > 99) {
    const winner = player1Score > player2Score ? player1Name : player2Name;
    console.log("Hurray " + winner + " won the match");
    return;
  }

  prompt("Press ENTER to roll dice : 🟨 ", player2Name);
  console.clear();
  player2Score = playerScore(player2Score, player2Name);
  player2Score = movePlayer(player2Score, player2Name);
  console.log(map(100, player1Score, player2Score), "\n", border(96));

  return hostGame(player1Name, player2Name, player1Score, player2Score);

}

function wantsToPlay(userChoice, player1Name, player2Name) {
  if (userChoice) {
    hostGame(player1Name, player2Name, 0, 0)
  } else {
    console.log("You miss the fun 🙄");
  }
}

console.log("Snake 🐍 & Ladder 🪜");
const userChoice = confirm("Press Y to start the game. - ");
const player1Name = prompt("Enter Player1 🟦 name : ", 'player1');
const player2Name = prompt("Enter Player2 🟨 name : ", 'player2');

let player1Score = 0;
let player2Score = 0;

wantsToPlay(userChoice, player1Name, player2Name);
