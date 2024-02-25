const express = require('express')
const app = express()
const data = require('../Controller/products')

app.get('/addproducts',data.createProduct)
app.post('/products',data.postProduct)
// app.post('/getproduct',data.getProduct)
// app.post('/deleteproducts',data.deleteProduct)

module.exports = app