const express = require('express')
const Transaction = require('../models/transaction')
const User = require('../models/user')
const router = new express.Router()

// add a transaction to the table
router.post('/transactions', async (req, res) => {
    try {
        const transaction = new Transaction(req.body)
        await transaction.save()
        console.log("transaction",transaction.customer_id)
        let transArr = await Transaction.find({ customer_id: transaction.customer_id })
        console.log("transArr",transArr)
        const amountArr = transArr.map((trans) =>  trans.amount)
        console.log("amountArr:", amountArr)
        let total = amountArr.reduce((a,b) => parseFloat(a) + parseFloat(b))
        console.log("total:", total)  //transArr[0].customer_id
        const user = await User.updateOne({customer_id: transaction.customer_id }, { total_price: total })
                      if(user){
                          console.log("update success, user", user)
                          res.status(201).send(user)
                      } else {
                          console.log("update error", error)
                          res.status(400).send(user)
                      }
    } catch (e) {
        console.log("catch update error", e)
        res.status(500).send(e)
    }
})




// present all transactions
router.get('/transactions', async (req, res) => {
    try {
        let trans = await Transaction.find({})
        res.status(200).send(trans)
    } catch (e) {
        res.status(500).send(e)
    }
});

// get all Transaction per customer by customer id
router.get('/transactions/user/:id', async (req, res) => {
    const id = req.params.id
    try {
        let trans = await Transaction.find({ customer_id: id }) 
        console.log("trans", trans)
        if (trans) {
             res.status(200).send(trans);
            return trans;
        } else {
            console.log('error1', error)
            throw error;
            }
    } catch (error) {
        console.log('catch error2', err) 
        res.status(500).send(error)
    }
})
    
    // delete transaction and update the total_price for customer
    router.delete('/transactions/del/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const trans = await Transaction.findOneAndDelete({ _id: id })
            console.log("trans.customer_id ",trans.customer_id )
            let foundUser = await  User.findOne({ customer_id: trans.customer_id })
            console.log("foundUser",foundUser )
                if(!foundUser){
                    res.status(400).send(error);
                }
            let result = await User.updateOne({customer_id: foundUser.customer_id},
                {total_price: parseFloat(foundUser.total_price) - parseFloat(trans.amount)})
                console.log("Update success",trans)
                return res.status(200).send(trans);
        } catch (error){
            console.log('catch error2', error);
            res.status(500).send(error);
        }
    }); 
    
    // update transaction
    router.patch('/transactions/update/', async (req, res) => {  
        try {
            console.log("req.body", req.body);
            const transObj = req.body;
            console.log("transObj._id", transObj._id);
            const newUser = await Transaction.findOneAndUpdate( {_id: transObj._id} , {
                "customer_id" : transObj.customer_id,
                "description" : transObj.description,
                "currency" : transObj.currency,
                "amount" : transObj.amount,
                "cerdit_card_type" : transObj.cerdit_card_type,
                "cerdit_card_number" : transObj.cerdit_card_number} );
                if(newUser){
                    console.log("update success", newUser)
                    newUser.save()
                    res.status(200).send(newUser)
                } else {
                    res.status(400).send()
                }

        } catch (error) {
            res.status(500).send(error)
        }
    });
            
module.exports = router;