function status(request, response) {
  response.status(200).json({
    nupac: "Núcleo de Pagamento de ex-Servidores e Licenciados",
  });
}

export default status;
