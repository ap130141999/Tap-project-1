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

const insertEnums = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
 
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.insertOne({
    enumId: enumId, optionValues
    
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

const findAllDetails = async (req, res) => {
  const collection = client.db('details_db').collection('details');
  const response = await collection.find({}).toArray();
  console.log(response);
  res.send(JSON.stringify(response));
  // console.log(JSON.stringify(response));
};


const insertData = async (req,res)=> {
  const {firstname,lastname,middlename,phone,country,loan,gender} = req.body;
  console.log(gender,"hello");
  const collection = client.db('details_db').collection('details');
  const data = {
      firstname:firstname,
      lastname:lastname,
      middlename:middlename,
      phone:phone,
      country:country,
      loan:loan ,
      gender:gender
      
  }
  const response = await collection.insertOne(data);
  res.send(JSON.stringify(response.result));
  console.log(response);

}


connectToDatabase();


module.exports = { findAllEnums, connectToDatabase, insertEnums, updateEnum,  findAllDetails, delEnum , insertData};