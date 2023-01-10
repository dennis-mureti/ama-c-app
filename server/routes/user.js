const express =  require( "express" );
const auth = require("../middlewares/auth");
const { Product } = require("../models/product");
const userRouter = express.Router();

userRouter.post('/api/add-to-cart', auth, async (req, res) => {
    try{
       const {id} = req.body;
       const product = await Product.findById(id);
       let user = await user.findById(req.user);

       if(user.cart.length == 0) {
           user.cart,push({product, quantity: 1});
       } else {
           let isProductFound = false;
           // looping through all the products to check if the product is there in the users cart
           for(let i = 0; i < user.cart.length; i++) {
               if(user.cart[i].product._id.equals(product._id)) {
                isProductFound = true;
               }
           }

           if(isProductFound) {
               let producttt = user.cart.find((producttt) => producttt.product._id);
               // if product exists we increase its quantity by 1
               producttt.quantity +=  1;
           } else {
               user.cart.push({ product, quantity: 1 });
           }
       }
       user = await user.save();
       res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

userRouter.delete('/api/remove-from-cart/:id', auth, async (req, res) => {
    try{
       const { id } = req.params;
       const product = await Product.findById(id);
       let user = await user.findById(req.user);

     
           let isProductFound = false;
           // looping through all the products to check if the product is there in the users cart
           for(let i = 0; i < user.cart.length; i++) {
               if(user.cart[i].product._id.equals(product._id)) {
                   if(user.cart[i].quantity == 1) {
                    user.cart.splice(i, 1);
                   } else {
                    user.cart[i].quantity -= 1
                   }
               }
           }
       user = await user.save();
       res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = userRouter ;