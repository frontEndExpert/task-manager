const mongoose = require('mongoose')
const { Schema } = mongoose;
const validator = require('validator')

const userSchema = new Schema({
    id: String,
    customer_id: {
        type: String,
        required: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email:  {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    gender: String,
    country: String,
    city:  String,
    street:  String,
    phone: String,
    total_price:  Number | String,
    currency: String,
    cerdit_card_type: String,
    cerdit_card_number:  Number | String
},  {minimize: false, } )

userSchema.query.findByCustomerID = function(customerID) {
    return this.where({ customer_id: customerID })
  };


const User = mongoose.model('User', userSchema);

//Database Init - populating with data from the json file
// ONLY USE ONCE 
/*
const usersObj = require('../db/data.json');

    const newCustomersArr = []
    //let customer = {};
    for(let i=0; i<10; i++){
        let customer = usersObj[i];
        newCustomersArr.push({ ...customer, "id": customer.customer_id})
    }
    console.log('newCustomersArr',newCustomersArr);

    User.insertMany(newCustomersArr).then(function(){
      console.log("Data inserted")  // Success
    }).catch(function(error){
      console.log(error)      // Failure
    });
*/

/*
  userSchema.methods.updateTotalPrice = function(customerID) {
    // mongoose.model('Transaction').find({ type: this.type }, cb);
     let sumArr = 0;
     sumArr = Transaction.find().findByCustomerID(customerID).exec((err, transArr) => {
        sumArr = transArr.reduce((a,b)=> a.amount + b.amount)
        console.log(sumArr);
        return sumArr;
      });
    return sumArr;
  };

userSchema.virtual('total_price').
  get(function(customerID) {
    //const transArr = Transaction.findByCustomerID( customerID)
    let sumArr = 0;
    Transaction.find().findByCustomerID(customerID).exec((err, transArr) => {
        const sumArr = transArr.reduce((a,b)=>a.amount+b.amount)
        console.log(sumArr);
      });

    //const sumArr = transArr.reduce((a,b)=>a+b)
    return sumArr;
    })

*/
module.exports = User;