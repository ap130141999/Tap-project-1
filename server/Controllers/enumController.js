const { MongoClient } = require("mongodb");
const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');

// const port = 4000;
const dbName = "credit_guardians";
const collectionName = "dynamic_enum";
const app = express();
let client = null;


const findAllEnums = async (req, res) => {
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.find({}).toArray();
  console.log(response);
  res.send(JSON.stringify(response));
  // console.log(JSON.stringify(response));
};

// const insertEnums = async (req,res) => {
//   const { enumId, optionValues, label,value } = req.body;
//   var doc = { enumId : "newEnum" , optionValues : [
//     label = "label1", value = "value1"
//   ]};

//   const collection = client.db(dbName).collection(collectionName);
//   const response = await collection(collectionName).insertOne(doc, (err) => {
//     if (err) throw err;
//     console.log("Document inserted");
//     res.send(JSON.stringify(response.result));

//   })

// }
const insertEnums = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
  // console.log(req.body.optionValues);
  // console.log(req.body);
  // console.log(enumId, optionValues);
  // console.log(label,value);
  //   let value = [];
  // for(let i=0;i<optionValues.length;i++){
  //    let { label, value} = optionValues[i];
  //     value.push(optionValues[i]);

  //   }
  //   console.log(value);
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.insertOne({
    enumId: enumId, optionValues
    //  optionValues: [ {
    //  label : label, 
    //  value : value
    //   } ]

  });


  console.log(value);


  res.send(JSON.stringify(response.result));
  console.log(response);
}

const updateEnum = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.find({ enumId })
  let dbResponse = {};
  if (response) {

    // optionValues.map(async (ele) => {
    //   dbResponse = await collection.updateOne({enumId},{$push:{optionValues:{label:ele.label,value:ele.value}}});
    // })
    dbResponse = await collection.updateOne({ enumId }, { $push: { optionValues: { $each: optionValues } } });
    console.log(JSON.stringify(dbResponse.result));
    res.send(JSON.stringify(dbResponse.result));
    console.log(dbResponse);
  }


}

const delEnum = async(req,res) => {
  const { enumId, optionValues } = req.body;
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.deleteOne({enumId});
}




const connectToDatabase = async () => {
  console.log("Connected to the database");
  client = await MongoClient.connect(process.env.MO_URI);
};

connectToDatabase();







// const mongoose = require('mongoose');
// // mongoose.connect = require('mongoose');
// mongoose.connect(process.env.MO_URI);
// var db = mongoose.connection;

// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })

// var app=express()


// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

const trialPost = async (req, res) => {
  // app.post('/sign_up', function(req,res)
  // {

  // console.log(req.body);
  const email = req.body.email;
  const pass = req.body.pass;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;

  console.log(email,pass,address,city,state,zip);

  //  const {email,pass,address,city,State,zip} = req.body;
  const data = {
    // "name": name,
    "email": email,
    "password": pass,
    "address": address,
    "zip": zip,
    "state": state,
    "city": city
  }
  // const collection = client.db('credit_guardians').collection('details');
  // const dbResponse = await collection.insertOne(data);

  // res.send(JSON.stringify(dbResponse.result));
  
  // }
  // app.post('/signup', async (req, res) => {
    // const { email, pass, address, zip,state,city } = req.body;
    // const collection = client.db('details_db').collection('details');
    // const response = await collection.insertOne(data);
    res.send(JSON.stringify(response.result));

// console.log(response);
console.log("server listening at port 3000");
}

const findAllDetails = async (req, res) => {
  const collection = client.db('details_db').collection('details');
  const response = await collection.find({}).toArray();
  console.log(response);
  res.send(JSON.stringify(response));
  // console.log(JSON.stringify(response));
};


module.exports = { findAllEnums, connectToDatabase, insertEnums, updateEnum, trialPost, findAllDetails, delEnum};