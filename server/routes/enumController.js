const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const port = 3000;
const dbName = "credit_guardians";
const collectionName = "dynamic_enum";

const url = `mongodb+srv://Abhilash:1289@development.j5amt.mongodb.net/credit_guardians?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    console.log("Connected to the database");
    client = await MongoClient.connect(url);

    const getEnum = () => {
        let client = "";
       
        app.get('/', async (req, res) => {
        const collection = client.db(dbName).collection(collectionName);
        const response = await collection.find( {enumId : "gender" }).toArray();
        res.send(JSON.stringify(response));
        
    
    })
     }
    
}


connectToDatabase();


app.listen(3001);
 
module.exports = {
    connectToDatabase
}


