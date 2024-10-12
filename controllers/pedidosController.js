import express from 'express'
const router = express.Router()

import Pedido from "../models/pedidos.js"

router.get("/pedidos", (req,res) =>{
    Pedido.findAll()
    .then((pedidos) => {
    res.render("pedidos", {
        pedidos:pedidos,
        })
    })
})

router.post("/pedidos/new", (req,res) => {
    const numero = req.body.numero
    const valor = req.body.valor

    Pedido.create({
        numero:numero,
        valor:valor
    })
    .then(() => {
        res.redirect("/pedidos")
    })
    .catch((error) => {
        console.log(error)
    })
})

router.get("/pedidos/delete/:id", (req,res) =>{
    const id = req.params.id
    Pedido.destroy({
        where:{ id:id }
    })
    .then(() => {
        res.redirect("/pedidos")
    })
    .catch((error) =>
    console.log(error))
})


// ROTA DE EDIÇÃO
router.get('/pedidos/edit/:id', (req, res) => {
    const id = req.params.id
    Pedido.findByPk(id)
        .then((pedidos) => {
            res.render("pedidosEdit", {
                pedidos: pedidos,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

// ROTA ALTERAR
router.post('/pedidos/update', (req, res) => {
    const id = req.body.id;
    const numero = req.body.numero;
    const valor = req.body.valor;
    Pedido.update(
        { numero: numero, valor: valor },
        { where: { id: id } }
    )
        .then(() => {
            res.redirect("/pedidos")
        })
        .catch((error) => {
            console.log(error)
        })
})

export default router;