import pkg from "superagent";
const { post } = pkg;

// https://docs.google.com/forms/d/<form-id>/edit

var formId = "1FAIpQLSfC8GFzuWN-bfyTEredx1DwfSVIrJYwNnHyaB1uPk34NyVwgA";
var fields = {
  size: "entry.1721541334",
  sizeOther: "entry.1721541334.other_option_response",
  email: "entry.1414359800",
  mobile: "entry.1534391001",
  delivery_method: "entry.1215248009",
  address: "entry.1445466410",
};

post(`https://docs.google.com/forms/d/e/${formId}/formResponse`)
  .type("form")
  .send({
    "entry.592587281": "Jorge+Benjor",
    "entry.179826024": "3",
    "entry.702963771":
      "Trabalho+em+uma+empresa/repartição+com+outras+pessoas+fisicamente",
    "entry.749177177":
      "Não,+falo+com+algumas+pessoas+mas+não+posso+considera-los+amigos",
    "entry.30308885":
      "Não,+fico+praticamente+o+dia+todo+em+casa.+Saio+apenas+para+necessidades.",
    "entry.1259640338": "Solteiro",
    "entry.2127050911": "Me+sinto+mal.+Evito+esses+locais",
    "entry.974272450": "Não,+minha+família+não+me+aceita",
    "entry.896330860": "Apenas+um+ou+outro+me+aprova,+o+resto+não",
    "entry.159669796": "bem+estar+e+sucesso+pesssoal",
    "entry.987096907": "Não+sei+responder",
    dlut: "1651190128213",
    "entry.179826024_sentinel": "",
    "entry.702963771_sentinel": "",
    "entry.749177177_sentinel": "",
    "entry.30308885_sentinel	": "",
    "entry.1259640338_sentinel": "",
    "entry.2127050911_sentinel": "",
    "entry.974272450_sentinel": "",
    "entry.896330860_sentinel": "",
    "entry.159669796_sentinel": "",
    "entry.987096907_sentinel": "",
    fvv: "1",
    partialResponse: '[null,null,"116138730554404128"]',
    pageHistory: "0",
    fbzx: "116138730554404128",
  })
  .end(function(err, res) {
    if (err || !res.ok) {
      console.log("Fracasso!");
      console.error(err);
    } else {
      console.log("Sucesso!");
      console.log(res.statusCode);
      console.log(res.body);
    }
  });
