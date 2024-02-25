// const path = require('path')
// const dirname = require('../Utils/util')
// const router = require('./Home')

const express = require('express')
const route = express()
const data = require('./Home')


route.get('/', (req,res,next)=>{
    res.render('Home',{Home:data.Home,title:'Shoppers Stop', path:'/'})
})


module.exports = route