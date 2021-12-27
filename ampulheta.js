function imprimirTriangulo(inputNumber) {
  for (let i = 0; i < inputNumber; i++) {
    DUST = "#";
    VAZIO = " ";

    for (let j = 0; j < i + 1; j++) {
      NumberOfVazio = j;
      NumberOfDust = inputNumber - NumberOfVazio * 2;

      if (NumberOfDust > 0) {
        dustes = DUST.repeat(NumberOfDust);
        vazios = VAZIO.repeat(NumberOfVazio);
        string = "#" + vazios + dustes + vazios + "#";
      }
    }
    if (NumberOfDust > 0) {
      console.log(string);
    }
  }
}

function imprimirTrianguloInverso(inputNumber) {
  for (let i = 0; i < inputNumber; i++) {
    DUST = "#";
    DUSTTOBE = " ";
    VAZIO = " ";

    for (let j = 0; j < i + 1; j++) {
      NumberOfVazio = inputNumber - j;
      NumberOfDustTOBE = inputNumber - NumberOfVazio * 2;

      if (NumberOfDustTOBE > 0) {
        dustes = DUSTTOBE.repeat(NumberOfDustTOBE);
        vazios = VAZIO.repeat(NumberOfVazio - 1);
        fundo = DUST.repeat(inputNumber + 2);
        string = "#" + vazios + "#" + dustes + "#" + vazios + "#";
      }
    }
    if (NumberOfDustTOBE > 0) {
      console.log(string);
    }
  }
  console.log(fundo);
}

function fazerAmpulheta(tamanho) {
  imprimirTriangulo(tamanho);
  imprimirTrianguloInverso(tamanho);
}

fazerAmpulheta(100);
