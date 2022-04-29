import fetch from "node-fetch";

const url =
  "https://docs.google.com/forms/d/e/1FAIpQLSfC8GFzuWN-bfyTEredx1DwfSVIrJYwNnHyaB1uPk34NyVwgA/viewform?usp=sf_link";

const dataJSON = {
  "entry.179826024": "1",
  "entry.592587281": "igor+Pierre",
  "entry.702963771":
    "Trabalho+em+uma+empresa/repartição+com+outras+pessoas+remotamente",
  "entry.749177177": "Sim,+tenho+poucos+mas+bons+amigos",
  "entry.30308885	": "Um+pouco,+passo+cerca+de+4+horas/dia+fora+de+casa.",
  "entry.1259640338": "Solteiro",
  "entry.2127050911": "Me+sinto+confortável.+Não+tenho+problemas",
  "entry.974272450":
    "Sim,+meus+familiares+me+aprovam+e+me+incentivam+a+ser+quem+sou",
  "entry.896330860": "Meio+a+meio,+parte+me+aceita+e+admira+parte+não",
  "entry.159669796": "solicitações+do+trabalho/faculdade,",
  "entry.987096907":
    "Uma+pessoa+média,+50%+do+meu+tempo+triste,+os+outros+50%+feliz",
  dlut: 1651185832853,
  hud: true,
  "entry.179826024_sentinel": "",
  "entry.702963771_sentinel": "",
  "entry.749177177_sentinel": "",
  "entry.30308885_sentinel": "",
  "entry.1259640338_sentinel": "",
  "entry.2127050911_sentinel": "",
  "entry.974272450_sentinel": "",
  "entry.896330860_sentinel": "",
  "entry.159669796_sentinel": "",
  "entry.987096907_sentinel": "",
  fvv: "1",
  partialResponse: '[null,null,"-2091047357291916988"]',
  pageHistory: 0,
  fbzx: "5945452773557669507",
};

const dataURl =
  "entry.179826024=1&entry.592587281=Michael+Wuososky&entry.702963771=Trabalho+em+uma+empresa%2Freparti%C3%A7%C3%A3o+com+outras+pessoas+remotamente&entry.749177177=Sim%2C+tenho+poucos+mas+bons+amigos&entry.30308885=Um+pouco%2C+passo+cerca+de+4+horas%2Fdia+fora+de+casa.&entry.1259640338=Solteiro&entry.2127050911=Me+sinto+confort%C3%A1vel.+N%C3%A3o+tenho+problemas&entry.974272450=Sim%2C+meus+familiares+me+aprovam+e+me+incentivam+a+ser+quem+sou&entry.896330860=Meio+a+meio%2C+parte+me+aceita+e+admira+parte+n%C3%A3o&entry.159669796=solicita%C3%A7%C3%B5es+do+trabalho%2Ffaculdade%2C&entry.987096907=Uma+pessoa+m%C3%A9dia%2C+50%25+do+meu+tempo+triste%2C+os+outros+50%25+feliz&dlut=1651185832853&hud=true&entry.179826024_sentinel=&entry.702963771_sentinel=&entry.749177177_sentinel=&entry.30308885_sentinel=&entry.1259640338_sentinel=&entry.2127050911_sentinel=&entry.974272450_sentinel=&entry.896330860_sentinel=&entry.159669796_sentinel=&entry.987096907_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%22-2091047357291916988%22%5D&pageHistory=0&fbzx=5945452773557669507";

function makerequest() {
  fetch(url, {
    method: "POST",
    body: dataURl,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

makerequest();
