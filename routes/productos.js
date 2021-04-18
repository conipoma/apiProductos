const { Router, query } = require('express');
const router = Router();
const mongoose = require('mongoose');
const Product  = mongoose.model('products');
// const products = require('../jsons.json');

router.get('/products', function(req, res) {
	console.log('entro')
    Product.find(function(err, product) {
    if(err) res.send(500, err.message);

    console.log('GET /products')
		res.status(200).jsonp(product);
	});
});

// Get product by ID, description and brand
router.get('/products/:searchString', function(req, res) {
	const regex = /^[0-9]*$/;
    if(regex.test(req.params.searchString)) {
        Product.findOne({id:req.params.searchString}).lean().exec(function(err, product) {
        if(err) return res.send(500, err.message);
    
        console.log('GET /products/:searchString' + req.params.searchString);
        if (isPalindromo(req.params.searchString)) {
            product.promotion = true
            product.originalPrice = product.price;
            product.price = product.price / 2;
        }
            res.status(200).jsonp(product);
        });
    }else {
        var query = {$or:[{brand:{$regex: req.params.searchString, $options: 'i'}},{description:{$regex: req.params.searchString, $options: 'i'}}]}
     
        Product.find(query).lean().exec(function(err, product) {
            if(err) return res.send(500, err.message);
        
            console.log('GET /products/:searchString' + req.params.searchString);
            
            if (isPalindromo(req.params.searchString)) {
                reducePrice(product)
                
            }
                res.status(200).jsonp(product);
            });
    }
});


function reducePrice(productos){
    productos.forEach(function(producto, index) {
        producto.originalPrice = producto.price;
        producto.price = producto.price / 2;
        producto.promotion = true
    }); 
}


// ID - Palindromo Function 
function isPalindromo(numero = 0){
    numero = numero.toString();
    var alReves = numero.split("").reverse().join("");
    if (numero === alReves) {
        return true;
    } else {
        return false
    }
}


module.exports = router, mongoose;
