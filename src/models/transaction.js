const mongoose = require('mongoose')
const { Schema } = mongoose;
//const validator = require('validator')


const transactionSchema = new Schema({
    id: String,
    customer_id: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    currency: String,
    amount: Number | String, 
    cerdit_card_type: String,
    cerdit_card_number: Number | String
}, {minimize: false } )

const Transaction = mongoose.model('Transaction', transactionSchema);


//transactionSchema.static('findByCustomerID', function(customer_id) { 
//    return this.find({ customer_id }); 
//});

/*
transactionSchema.query.findByCustomerID = function(customerID) {
    return this.where({ customer_id: new RegExp(customerID, 'i') })
  };
*/

module.exports = Transaction;
