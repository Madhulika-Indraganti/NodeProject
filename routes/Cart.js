const express = require('express')
const route = express()
const data = require('./Cart')
const dataa = require('../Controller/display')


// route.get('/routes/Cart',(req,res,next)=>{
//     res.render("Cart",{title:'My Cart', path:'/Cart'})
// })
route.get('/getproducts',dataa.getProduct)
console.log("getting controller")

module.exports = route
