const { MongoClient } = require("mongodb");
const express = require("express");
require("dotenv").config();

const dbName = "credit_guardians";
const collectionName = "dynamic_enum";
const app = express();
let client = null;

const findAllEnums = async (req, res) => {
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.find({}).toArray();
  res.send(JSON.stringify(response));
};

const insertEnums = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.insertOne({
    enumId: enumId, optionValues
  });

  res.send(JSON.stringify(response.result));
}

const updateEnum = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.find({ enumId })
  let dbResponse = {};
  if (response) {
    dbResponse = await collection.updateOne({ enumId }, { $push: { optionValues: { $each: optionValues } } });
    res.send(JSON.stringify(dbResponse.result));
  }
}

const connectToDatabase = async () => {
  client = await MongoClient.connect(process.env.MO_URI);
  console.log("Connected to the database");
};

const findAllDetails = async (req, res) => {
  const collection = client.db('details_db').collection('details');
  const response = await collection.find({}).toArray();
  res.send(JSON.stringify(response));

};

const insertData = async (req, res) => {
  const { firstname, lastname, middlename, phone, country, loan, gender, marital, education, loanType, employment, account, aadhar } = req.body;
  const collection = client.db('details_db').collection('details');
  const data = {
    firstname: firstname,
    lastname: lastname,
    middlename: middlename,
    phone: phone,
    country: country,
    loan: loan,
    gender: gender,
    marital: marital,
    education: education,
    employment: employment,
    loanType: loanType,
    account: account,
    aadhar: aadhar
  }

  const response = await collection.insertOne(data);
  res.send(JSON.stringify(response.result));

}

connectToDatabase();

module.exports = { findAllEnums, connectToDatabase, insertEnums, updateEnum, findAllDetails, insertData };