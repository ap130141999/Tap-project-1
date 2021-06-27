import { Col, Form, Input, Label, FormGroup } from "reactstrap";
import React, { useState } from "react";
import Helmet from "react-helmet";
// import { use } from "../../../server/routes/enumRoutes";

<Helmet bodyAttributes={{ style: "background-color : red" }} />;
const InputFields =  (props) => {
  const {sendFirstName,sendMiddleName,sendLastName,sendLoan,sendPhone,sendCountry}= props;
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [middlename , setMiddlename] = useState('');
  // const [phone, setPhone] = useState('');
  // const [country,setCountry] = useState('');
  // const [loan, setLoan] = useState('');

  return (
    <Form>
      <div>
        <FormGroup row>
          <Label for="FirstName" md={2} >
            <h5> First Name </h5>
          </Label>
          <Col md={4}>
            <Input
              style={{ backgroundColor: "white" }}
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="Enter your first name"
              required
x              onChange={(event) => sendFirstName(event.target.value)}
            />
          </Col>
          {/* </FormGroup> */}
          <br></br>

          {/* <FormGroup row> */}
          <Label for="MiddleName" md={2}>
            <h5> Middle Name</h5>
          </Label>
          <Col md={4}>
            <Input
              style={{ backgroundColor: "white" }}
              type="text"
              name="MiddleName"
              id="MiddleName"
              placeholder="Enter your Middle name"
              onChange={(event) => sendMiddleName(event.target.value)}
            />
          </Col>
        </FormGroup>
      </div>
      <br></br>

      <FormGroup row>
        <Label for="Last Name" md={2}>
          <h5> Last Name</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Enter your last name"
            onChange={(event) => sendLastName(event.target.value)}
          />
        </Col>
        {/* </FormGroup> */}

        <br></br>

        {/* <FormGroup row> */}
        <Label for="PhoneNo" md={2}>
          <h5> Phone No</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="number"
            name="MobileNumber"
            id="PhoneNo"
            placeholder="Enter phone number"
            onChange={(event) => sendPhone(event.target.value)}
          />
        </Col>
      </FormGroup>

      {/* <FormGroup row>
        <Label for="exampleEmail" md={3}>
        <h4>   Email</h4> 
        </Label>
        <Col md={3}>
          <Input style={{backgroundColor:"white"}}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your email address"
          />
        </Col> */}
      {/* </FormGroup> */}
      <br></br>

      {/* <FormGroup row> */}
      {/* <Label for="Address" md={3}>
        <h4>  Address</h4> 
        </Label>
        <Col md={3}>
          <Input style={{backgroundColor:"white"}}
            type="text"
            name="Address"
            id="Address"
            placeholder="Enter your address"
          />
        </Col>
      </FormGroup> */}

      <FormGroup row>
        <Label for="Country" md={2}>
          <h5> Country:</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="text"
            name="Country"
            id="Country"
            placeholder="Enter your country"
            onChange={(event) => sendCountry(event.target.value)}
          />
        </Col>
        {/* </FormGroup> */}
        <br></br>

        {/* <FormGroup row> */}
        <Label for="Loan Amount" md={2}>
          <h5> Loan Amount</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="text"
            name="LoanAmount"
            id="Loan Amount"
            placeholder="Enter the loan amount"
            onChange={(event) => sendLoan(event.target.value)}
          />
        </Col>
      </FormGroup>
      <br></br>
    </Form>
  );
}

export default InputFields;