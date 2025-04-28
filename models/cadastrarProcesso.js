function cadastrarProcesso(numProc, nomeServidor) {
  const cadastro = {
    numero: numProc,
    nome: nomeServidor,
  };
  return cadastro;
}

exports.cadastrarProcesso = cadastrarProcesso;
