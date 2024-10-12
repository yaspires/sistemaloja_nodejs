import express from "express";
const app = express();

// IMPORTAÇÃO SEQUELIZE
import connection from "./config/sequelize_config.js";

// CONEXÃO COM BANCO DE DADOS
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// CRIAÇÃO DO BANCO
connection
  .query("CREATE DATABASE IF NOT EXISTS 4woods;")
  .then(() => {
    console.log("O banco de dados foi criado com sucesso");
  })
  .catch((error) => {
    console.log(error);
  });

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// Renderizador de página
app.set("view engine", "ejs");
// Define arquivos estáticos
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

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
import produtosController from './controllers/produtosCrontroller.js'
app.use("/", produtosController);

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
