const { MongoClient } = require("mongodb");
const express = require("express");
require("dotenv").config();

const port = 4000;
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
  const { enumId, optionValues } = req.body[0];
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
    dbResponse = await collection.updateOne({ enumId }, { $push: { optionValues:  {$each : optionValues}  } });
    console.log(JSON.stringify(dbResponse.result));
    res.send(JSON.stringify(dbResponse.result));
    console.log(dbResponse);
  }


}





const connectToDatabase = async () => {
  console.log("Connected to the database");
  client = await MongoClient.connect(process.env.MO_URI);
};

connectToDatabase();

module.exports = { findAllEnums, connectToDatabase, insertEnums, updateEnum };
