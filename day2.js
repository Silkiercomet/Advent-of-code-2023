const cubesAmount = (cube) =>
  cube[1] === " " ? +cube[0] : +(cube[0] + cube[1]);

const func = () => {
  const inputValue = document.getElementById("value").value;
  const regex = /\d+\s(?:red|blue|green)/gi;
  const gameCubesSets = {};
  // lets format the date so we can used
  let formatedText = inputValue
    .trim()
    .split("\n")
    .map((line) => line.trim().match(regex));

  // we are finding the highest amount of cubes in each game and addind them to an object  
  formatedText.map((cubes, i) => {
    const cubesByColor = { blue: 0, red: 0, green: 0 };
    const isAmountHigher = (color, number) => {
      if (cubesByColor[color] < number) {
        cubesByColor[color] = number;
      }
    };
    for (let cube of cubes) {
      switch (cube[cube.length - 1]) {
        case "e":
          const blue = cubesAmount(cube);
          isAmountHigher("blue", blue);
          break;
        case "d":
          const red = cubesAmount(cube);
          isAmountHigher("red", red);
          break;
        case "n":
          const green = cubesAmount(cube);
          isAmountHigher("green", green);
          break;
        default:
          console.log("invalid color " + cube + ".");
      }
    }
    gameCubesSets[i + 1] = cubesByColor;
    return cubes;
  });
  // we are fiding the games where the asked combination of cubes was posible and addind them to a total
  let sum = 0,
    length = Object.keys(gameCubesSets).length;
  for (let i = 1; i < length + 1; i++) {
    const { blue, red, green } = gameCubesSets[i];
    if (blue <= 14 && green <= 13 && red <= 12) {
      console.log(gameCubesSets[i], i);
      sum += i;
    }
  }
  return sum;
};

console.log(func());
