const data = require('../Model/productseq')
exports.getProduct = (req, res, next) => {
    data.findAll().then(result => {
        console.log('hellooooo',result)
      res.render('/ItemDetail',{
        product: result 
      });
    })
  };
