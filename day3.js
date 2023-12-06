const regex = /[0-9]|[^\d\s\w.]/g;
const func = () => {
  const input = document.querySelector("#value").value;
  const formatedInput = input
    .trim()
    .split("\n")
    .map((e) => e.trim());

  const indexAppearences = [];
  for (let i = 0; i < formatedInput.length; i++) {
    const arr = {};
    for (let j = 0; j < formatedInput[i].length; j++) {
      if (formatedInput[i][j].match(regex)) {
        arr[j] = formatedInput[i][j];
      }
    }

    /* si el caracter es un simbolo se evalua si cualquier
    valor adjacente sea un numero de serlo, se debe determinar
    si se compone de uno a mas numeros */
    indexAppearences.push(arr);
  }
  /*
  indexAppearences[0][1] returns 6
  indexAppearences[0][3] returns undefined
  */
  return indexAppearences[0][1];
};

console.log(func());