const data = require('../Model/productseq')

exports.createProduct = (req,res,next) => {
    res.render('Admin/Addproducts',{
        editing:false,   
    })
    console.log("created")
}
exports.postProduct = (req,res,next) => {
    const {title,image,price,description}= req.body
    data.create({
        title: title,
        image: image,
        price: price,
        description: description,   
    })
    .then((result) => {
        console.log("posted");
        res.redirect("/")
    })
    .catch((e) => console.log(e))
}
// const Product = require('../Model/productseq');
// exports.getCart = (req, res, next) => {
//     Product.findAll()
//         .then(items => {
//             console.log(items); // Check the retrieved items in the console
//             res.render('cart', { items: items });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: 'Internal server error' });
//         });
// };
