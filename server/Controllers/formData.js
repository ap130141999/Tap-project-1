import React from "react";


const insertData = async (req,res)=> {
    const {firstname,lastname,middlename,phone,country,loan} = req.body;
    const collection = client.db('client_guardians').collection('details');
    const data = {
        firstname:firstname,
        lastname:lastname,
        middlename:middlename,
        phone:phone,
        country:country,
        loan:loan 
    }
    const response = await collection.insertOne(data);
    res.send(JSON.stringify(response.result));
  console.log(response);

}


// module.exports = {insertData};