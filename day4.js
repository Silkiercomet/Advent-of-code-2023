// first star solution
const regex = /(\d+(?:\s+\d+)*)\s*\|\s*(\d+(?:\s+\d+)*)/;
const func = () => {
  const input = document.querySelector("#value").value.trim();
  const arrayOfCards = input.split("\n").map((e) => e.trim());
  const pointsPerCard = arrayOfCards.map((card) => {
    const match = card.match(regex);
    if (match) {
      const leftNumbers = match[1].split(/\s+/);
      const rightNumbers = match[2].split(/\s+/);
      let winnerCounter = 0;
      for (let number of leftNumbers) {
        if (rightNumbers.includes(number)) {
          winnerCounter = winnerCounter !== 0 ? winnerCounter * 2 : 1;
        }
      }
      return winnerCounter;
    }
  });

  return pointsPerCard.reduce((acc, cur) => acc + cur, 0);
};

console.log(func());