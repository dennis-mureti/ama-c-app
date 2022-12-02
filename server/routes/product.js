const express = require('express');
const productRouter = express.Router();
const auth = require('../middlewares/auth')

// /api/products?category=Essentials -> will be the client side url so as to get category, and thus we use.query
// /api/products:category -> in this case we can use params i.e req.params.category
productRouter.get('/api/products', auth, async(req, res) => {
    try{
        console.log(req.query.category);
        const products = await Product.find({category: req.query.category});
        res.json(products);
    } catch (e) {
        res.status(500).json({error: e.message})
    }
});

// create a get request to search products and get them
productRouter.get('/api/products/search/:name', auth, async(req, res) => {
    try{
        const products = await Product.find({
            name: {$regex: req.params.name, $options: "i"},
        });
        
        res.json(products);
    } catch (e) {
        res.status(500).json({error: e.message})
    }
});

module.exports = productRouter; 