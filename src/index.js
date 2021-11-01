const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/transaction')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



const User = require('./models/user')
const Transaction = require('./models/transaction')


    
    // await transaction.save().then(() => {
    //   // res.status(201).send(transaction)
    //    console.log("transaction",transaction.customer_id)
        
    //    return Transaction.find({ customer_id: transaction.customer_id })
    // }).then( function(transArr){ 
    //     console.log("transArr",transArr)
    //        const amountArr = transArr.map((trans) => trans.amount)
    //        console.log("amountArr:", amountArr)
    //         let total = amountArr.reduce((a,b) => parseFloat(a) + parseFloat(b))
    //         console.log("total:", total)

    //     User.updateOne({customer_id: transArr[0].customer_id}, { total_price: total }, function(error, user){
    //             if(!error){
    //                 console.log("update success, user", user)
    //                 res.status(201).send(user)
    //             } else {
    //                 console.log("update error", error)
    //                // res.status(400).send(user)
    //             }
    //        })
    //     }).catch((e) => {
    //         console.log("catch update error", e)
    //     res.status(400).send(e)
    // })
// });

         /*   
            Transaction.findOneAndUpdate( {_id: transObj._id} , {
                "customer_id" : transObj.customer_id,
                "description" : transObj.description,
                "currency" : transObj.currency,
                "amount" : transObj.amount,
                "cerdit_card_type" : transObj.cerdit_card_type,
                "cerdit_card_number" : transObj.cerdit_card_number}, 
                function(error, newUser){
                        if(!error){
                            console.log("update success", newUser)
                            newUser.save()
                            res.status(200).send(newUser)
                        } else {
                            console.log("update error", error)
                            res.status(400).send(error)
                        }
                } ) 
                .catch(function(error){ console.log('catch error2', error) })
    });
        
        */
        
 /*       Transaction.findOneAndDelete({ _id: id }, function(error, trans) {
            if (!error) {
                console.log('Delete success', trans)
                res.status(200).send(trans)
            } else {
                console.log('error1', error)
                throw error;
                }
            }).clone().catch(function(error){ console.log('catch error2', err) })
        });
*/

