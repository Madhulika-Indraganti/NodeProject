const express = require('express')
const route = express()

const path = require('path')
const dirname = require('../Utils/util')



route.get('/routes/Mens',(req,res,next)=>{
    res.render("Mens",{title:'Mens Clothing', path:'/Mens' })
})

module.exports = route