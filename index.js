const express = require("express");
const app = express();

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// Renderizador de página
app.set("view engine", "ejs");
// Define arquivos estáticos
app.use(express.static("public"));

// Rota clientes
app.get("/clientes", (req, res) => {
  const cliente = [
    {
      nome: "Ana kuzendorff",
      cpf: "123.456.789.10",
      endereco: "Rua São Luis, 79",
    },
    {
      nome: "Isabely Lemos",
      cpf: "693.678.823.06",
      endereco: "Rua das limeiras, 192",
    },
    {
      nome: "Gustavo Lanna",
      cpf: "731.463.098.67",
      endereco: "Rua Aracaju, 03",
    },
    {
      nome: "Yasmin Pires",
      cpf: "982.378.432.09",
      endereco: "Rua Santo Antônio, 232",
    },
    {
      nome: "Luiz da Silva",
      cpf: "893.239.892.30",
      endereco: "Rua Maria das Dores, 190",
    },
    {
      nome: "Mariana Alves Pereira",
      cpf: "765.892.345.12",
      endereco: "Rua dos Pinheiros, 45",
    },
    {
      nome: "Lucas Fernandes Costa",
      cpf: "987.654.321-09",
      endereco: "Avenida Brasil, 987",
    },
    {
      nome: "Pedro Henrique Lima",
      cpf: "456.789.123-03",
      endereco: "Rua das Palmeiras, 321",
    },
    {
      nome: "Camila Oliveira",
      cpf: "654.321.987-04",
      endereco: "Alameda dos Anjos, 72",
    },
    {
      nome: "Lucia Lima",
      cpf: "453.499.122-03",
      endereco: "Rua dos vales, 331",
    },
    {
      nome: "João Henrique alves",
      cpf: "254.941.919-25",
      endereco: "Avenida Maria bonita, 54",
    },
  ];
  res.render("clientes", { cliente: cliente });
});

// Rota produtos
app.get("/produtos", (req, res) => {
  const produtos = [
    { produto: "Barraca 4 lugares", preco: 570, categoria: "Barracas" },
    { produto: "Barraca 2 lugares", preco: 240, categoria: "Barracas" },
    { produto: "Barraca 8 lugares", preco: 1020, categoria: "Barracas" },
    { produto: "Mesa dobrável", preco: 130, categoria: "Acessórios" },
    { produto: "Cadeira dobrável", preco: 70, categoria: "Acessórios" },
    { produto: "Garrafa térmica classic", preco: 220, categoria: "Acessórios" },
    { produto: "Kit fogareiro", preco: 380, categoria: "Acessórios" },
  ];
  res.render("produtos", { produtos: produtos });
});

// Rota pedidos
app.get("/pedidos", (req, res) => {
  const pedidos = [
    { nmrpedido: "01", valor: 1420 },
    { nmrpedido: "02", valor: 730 },
    { nmrpedido: "03", valor: 210 },
    { nmrpedido: "04", valor: 340 },
    { nmrpedido: "05", valor: 670 },
    { nmrpedido: "06", valor: 380 },
    { nmrpedido: "07", valor: 360 },
    { nmrpedido: "08", valor: 70 },
    { nmrpedido: "09", valor: 1400 },
    { nmrpedido: "10", valor: 840 },
    { nmrpedido: "11", valor: 290 },
    { nmrpedido: "12", valor: 210 },
    { nmrpedido: "13", valor: 340 },
    { nmrpedido: "14", valor: 670 },
    { nmrpedido: "15", valor: 380 },
  ];
  res.render("pedidos", { pedidos: pedidos });
});

// Iniciar servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
