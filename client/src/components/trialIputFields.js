
import Form from 'react-bootstrap/Form';
import {Col, Button} from 'react-bootstrap';
import React,{ useEffect, useState } from 'react';
// import {useState, useEffect} from "react";
import axios from 'axios';

// const [input,setInput] = useState([]);

// useEffect(()=>{
//   getTrial();
// })


const TrialFormPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState(''); 








  const getTrial = async () => {
    console.log(email,pass,state,city,address,zip);
    const response = await axios.post(`http://localhost:3001/enum/sign_up`,{email});
    // setInput(response.data);

  
  };
    return (
        <>
{/* <Form> */}

  {/* <Form.Row> */}
    {/* <Form.Group as={Col} controlId="formGridEmail" id="email">
      <Form.Label onChange= "changeEmail">Email</Form.Label> */}
      <input type="email" placeholder="Enter email"   onChange={(event) => setEmail(event.target.value)}/>
    {/* </Form.Group> */}

    {/* <Form.Group as={Col} controlId="formGridPassword" id ="pass">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  onChange={(event) => setPass(event.target.value)}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1" id="address" >
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St"  onChange={(event) => setAddress(event.target.value)} />
  </Form.Group>

  {/* <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group> */}

  {/* <Form.Row>
    <Form.Group as={Col} controlId="formGridCity" id ="city"  > 
      <Form.Label>City</Form.Label>
      <Form.Control onChange={(event) => setCity(event.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" id ="state">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose..."  onChange={(event) => setState(event.target.value)}>
        <option >TS</option>
        <option>AP</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" id = "zip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={(event) => setZip(event.target.value)}/>
    </Form.Group>
  </Form.Row> */}

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */} 

  <Button variant="primary" type="submit" onClick ={getTrial}>
    Submit
  </Button>
{/* </Form> */}
</>
    )}


export default TrialFormPage;
