const express = require('express')
const User = require('../models/user')
const router = new express.Router()
//const geocode = require('./utils/geocode')

// post a new user
router.post('/users', async (req, res) => {
    console.log('posting...');
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// get all users
router.get('/users', async (req, res) => {
    console.log('getting...');
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send()
    }
});

//get user by customer_id (only one)
router.get('/users/:id', async (req, res) => {
    const customer_id = req.params.id
    try {
        const user = await User.findOne({ customer_id: customer_id })
        if (!user) {
            console.log("Error no user", err)
            res.status(404).send()
        } else { res.status(200).send(user) }
    } catch (e) {
        console.log("catch my error", e)
        res.status(500).send()
    }
});

 // delete user by id
 router.delete('/user/del/:id', async (req, res) => {
    const customer_id = req.params.id
    try {
        let foundUser = await User.findOneAndDelete({ customer_id: customer_id })
            if(!foundUser){
                console.log("internal error: cannot find the customer")
                res.status(400).send("internal error: cannot find the customer");
            }else{
                console.log('Delete successful',foundUser)
                res.status(200).send(foundUser);
            }
            
    } catch (error){
        console.log('catch error2', error);
        res.status(500).send(error);
    }
}); 


 // update user {_id: userObj._id}
 router.patch('/user/update/', async (req, res) => {  
    try {
        console.log("req.body", req.body);
        const userObj = req.body;
        console.log("userObj._id", userObj._id);
        const newUser = await User.findOneAndUpdate( { customer_id : userObj.customer_id} , {
            "first_name" : userObj.first_name,
            "last_name" : userObj.last_name,
            "email" : userObj.email,
            "gender" : userObj.gender,
            "street" : userObj.street,
            "city" : userObj.city,
            "country" : userObj.country,
            "cerdit_card_type" : userObj.cerdit_card_type,
            "cerdit_card_number" : userObj.cerdit_card_number,
            "total_price" : userObj.total_price,
            "currency" : userObj.currency
            
            } );
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