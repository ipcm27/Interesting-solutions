function getRandomInt(min = 1, max = 61) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function gerarNumeros(qtd) {
  const selectedNumbers = new Set();
  let i = 0;

  while (i < qtd) {
    const number = getRandomInt();

    selectedNumbers.add(+number);

    i = selectedNumbers.size;
  }

  const meuArray = Array.from(selectedNumbers);
  meuArray.sort((a, b) => a - b);
  return meuArray;
}

console.log(gerarNumeros(20));
