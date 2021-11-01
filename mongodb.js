// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    console.log("all is connectted ")


    //db.findone()
    const transArr = [{"transaction_id": "0001",
    "customer_id": "387-63-2772",
    "description": "product good",
    "currency": "NIO",
    "amount": "88.12",
    "cerdit_card_type": "mastercard",
    "cerdit_card_number": "5010126046192324"}]
    
    //_id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
//
//transactions: [...transArr]
/*
function updateUsers( idValue, fieldName, fieldValue) {
    //const record = JSON.parse(JSON.parse(JSON.stringify(`${fieldName} : ${fieldValue}`)));
    const record = <fieldName>:<fieldValue> ;
    console.log(<fieldName>:<fieldValue>);
 /*   db.collection('users').updateOne({
            customer_id: idValue
        }, {
            $set: {
                record
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });  
}; 
*/

updateUsers(  "387-63-2772", "first_name", "Nadea");
    /*
     db.collection('users').insertMany([
        {
            "customer_id": "183-06-7195",
    "first_name": "Felicia",
    "last_name": "Starbucke",
    "email": "fstarbucke3@mashable.com",
    "gender": "Female",
    "country": "China",
    "city": "Shijing",
    "street": "90119 Grasskamp Parkway",
    "phone": "312-874-7275",
    "total_price": "847.10",
    "currency": "CNY",
    "cerdit_card_type": "visa",
    "cerdit_card_number": "4041371907379",
            "transactions:": [
                 {
        "transaction_id": "0001",
        "customer_id": "813-86-3131",
        "description": "product good",
        "currency": "NIO",
        "amount": "32.12",
        "cerdit_card_type": "mastercard",
        "cerdit_card_number": "5010126046192324"
    },
    {
        "transaction_id": "0002",
        "customer_id": "813-86-3131",
        "description": "product good",
        "currency": "NIO",
        "amount": "34",
        "cerdit_card_type": "mastercard",
        "cerdit_card_number": "5010126046192324"
    }
]
    }], (error, result) => {
         if (error) {
            return console.log('Unable to insert user')
         }
            console.log(result.ops)
        })

   
*/
     /*
    db.collection('transactions').insertMany([
       {
        "transaction_id": "0001",
        "customer_id": "813-86-3131",
        "description": "product good",
        "currency": "NIO",
        "amount": "32.12",
        "cerdit_card_type": "mastercard",
        "cerdit_card_number": "5010126046192324"
    },{
        "transaction_id": "0002",
        "customer_id": "813-86-3131",
        "description": "product good",
        "currency": "NIO",
        "amount": "34",
        "cerdit_card_type": "mastercard",
        "cerdit_card_number": "5010126046192324"
    },{
        "transaction_id": "0003",
        "customer_id": "813-86-3131",
        "description": "product good",
        "currency": "NIO",
        "amount": "52",
        "cerdit_card_type": "mastercard",
        "cerdit_card_number": "5010126046192324"
    }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }
        console.log(result)
    })
    
*/
})