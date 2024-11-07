import express from 'express';
const router = express.Router();

import Auth from '../middleware/Auth.js'
import Produto from '../models/produtos.js';

// ROTA DE PRODUTOS
router.get('/produtos',Auth, (req, res) => {
    Produto.findAll().then((produtos) => {
        res.render("produtos", {
            produtos: produtos,
        })
    })
})

// ROTA CADASTRO
router.post('/produtos/new',Auth, (req, res) => {
    const produto = req.body.produto
    const preco = req.body.preco
    const categoria = req.body.categoria

    Produto.create({
        produto: produto,
        preco: preco,
        categoria: categoria
    })
        .then(() => {
            res.redirect("/produtos")
        })
})

// ROTA EXCLUIR
router.get('/produtos/delete/:id',Auth, (req, res) => {
    const id = req.params.id
    Produto.destroy({
        where: {
            id: id,
        }
    })
        .then(() => {
            res.redirect('/produtos')
        })
        .catch((error) => {
            console.log(error)
        })
})

// ROTA DE EDIÇÃO
router.get('/produtos/edit/:id',Auth, (req, res) => {
    const id = req.params.id
    Produto.findByPk(id)
        .then((produtos) => {
            res.render("produtosEdit", {
                produtos: produtos,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

// ROTA ALTERAR
router.post('/produtos/update',Auth, (req, res) => {
    const id = req.body.id;
    const produto = req.body.produto;
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    Produto.update(
        { produto: produto, preco: preco, categoria: categoria },
        { where: { id: id } }
    )
        .then(() => {
            res.redirect("/produtos")
        })
        .catch((error) => {
            console.log(error)
        })
})

export default router;