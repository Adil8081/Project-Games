function getRandomNo() {
  const randomNo = Math.round(Math.random() * 10);

  return randomNo;
}

function guessTheNo(playerChoice, randomNo, attempts) {
  if (attempts === 1) {
    console.log('No more attempts left ❌ ');
  
    return;
  }

  if (playerChoice === randomNo) {
    console.log("🥳🙌woo-hoo!!!, you guessed it right✅");
  
    return;
  }

  if (playerChoice < randomNo) {
    console.log("❗Atempts remaing : ", attempts - 1);
  
    playerChoice = +prompt("❗ Think bigger no than " + playerChoice + " 🤔");
  
    return guessTheNo(playerChoice, randomNo, attempts - 1);
  }

  if (playerChoice > randomNo) {
    console.log("❗Atempts remaing : ", attempts - 1);
  
    playerChoice = +prompt("🤌🏼 Think samll no than " + playerChoice + " 🤔");

    return guessTheNo(playerChoice, randomNo, attempts - 1);
  }
}

console.log("'Guess the No 🤔💭'");

const wantsToPlay = confirm("You have 3 attempts : \nPress Y to start the game");

if (wantsToPlay) {
  const playerChoice = prompt("Guess no between 1 to 10.");
  const randomNo = getRandomNo();

  guessTheNo(playerChoice, randomNo, 3);
} else {
  console.log("You miss the fun 🙄");
}
