const numberObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const checkNumber = (arr) => {
    let num1 = arr[0],
      num2 = arr[arr.length - 1];
    let string = "";
    if (num1.length > 1) {
      string += `${numberObj[num1]}`;
    } else {
      string += num1;
    }
    if (num2.length > 1) {
      string += `${numberObj[num2]}`;
    } else {
      string += num2;
    }
    console.log(string, "test result");
    return string;
  };
  const func = () => {
    const inputValue = document.getElementById("value").value;
    const regex = /\d|(one|two|three|four|five|six|seven|eight|nine)/gi;
    let formatedText = inputValue
      .trim()
      .split("\n")
      .map((line) => line.trim().match(regex));
    let sum = 0;
    for (let numbers of formatedText) {
      console.log(numbers);
      let number = checkNumber(numbers);
      sum += +number;
    }
    return sum;
  };
  
  console.log(func());