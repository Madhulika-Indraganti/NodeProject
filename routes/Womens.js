const express = require('express')
const route = express()

// const path = require('path')
// const dirname = require('../Utils/util')
const {title} = require('process')



route.get('/routes/Womens',(req,res,next)=>{
    res.render("Womens",{title:'Womens', path:'/Womens'})
})

module.exports = route