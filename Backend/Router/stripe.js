const express = require('express');
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51Nzdr1FFNMOVS5H4gDEThyv4npwzjFEmXAc4r9DBtebsWmEobn85dku4r04qy8OQJ29p04qE6kF9B0eaNAFkOnBm00u1dTewrk')

const routerPayment= express.Router()

routerPayment.post('/create-checkout-session', async(req,res)=>{
    const line_items=req.body.state.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.title,
                        
                        description: item.product.desc,
                        metadata:{
                            id:item.product._id
                        }
                    },
                    unit_amount: item.product.price*100,
                },
                quantity: item.quantity,
            }
        
    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
})
module.exports= routerPayment