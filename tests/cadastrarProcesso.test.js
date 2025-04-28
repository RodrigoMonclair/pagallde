const cadProc = require("../models/cadastrarProcesso.js");

console.log(cadProc);

const resultado = cadProc.cadastrarProcesso(
  "0000663/2025",
  "Rodrigo Andrade Monclair",
);
console.log(resultado);

test("verificar se número do processo possui 12 dígitos", () => {
  expect(resultado.numero.length).toBe(12);
});

test("Verificar se o Nome do serivodr está vazio", () => {
  expect(resultado.nome).not.toBe("");
});
