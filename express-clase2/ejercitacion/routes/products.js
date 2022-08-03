let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,

router.get('/products', (req, res) => {
    res.json(products)
})
//2. Obtener un producto específico mediante su ID “/api/products/:id”

router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const consulta = products.find(e => e.id === parseInt(id))
    res.json([consulta])

})

//3. Agregar un nuevo producto “/api/products”

router.post('/products/add', (req, res) => {
    const product = req.body
    products.push(product)
    res.json(product)
})
//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,

router.put('/products/:id/:name', (req, res) => {
    const { id, name } = req.params;
    const result = products.find(e => e.id === parseInt(id));
    result.name = name;
    res.json(result)
})

//5. Eliminar un producto mediante su ID “/api/products/:id”,

router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const result = products.indexOf(e => e.id === parseInt(id));
    const elementoEliminado = products.splice(result, 1)
    res.json(elementoEliminado)
})

module.exports = { router, products };
