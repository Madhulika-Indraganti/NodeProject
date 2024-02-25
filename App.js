const express = require('express')
const bodyParser = require('body-parser')

const Home = require('./routes/Home')
const Mens = require('./routes/Mens')
const Womens = require('./routes/Womens')
const Cart = require('./routes/Cart')
const addproducts = require('./routes/Addproducts')

const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', 'Views')

app.use(bodyParser.urlencoded({extended:true}))

app.use(Home)
app.use(addproducts)
app.use(Mens)
app.use(Womens)
app.use(Cart)

app.use(express.static(path.join(__dirname,'Public')))

app.use('/', (req,res,next)=>{
    res.status(404).send('<h1> Page not found </h1>')
})

const model = require('./Model/productseq')
model.sync()
console.log(model)


app.listen(3003)