import { Row, Col, Form, Input, Label, FormGroup } from "reactstrap";
import React from "react";
function InputFields() {
  return (
    <Form>
      <div>
        <Row>
          <FormGroup row>
            <Label for="FirstName" sm={2}>
              FirstName
            </Label>
            <Col sm={6}>
              <Input
                type="text"
                name="FirstName"
                id="FirstName"
                placeholder="Enter your first name"
                required
              />
            </Col>
          </FormGroup>
          <br></br>
          <FormGroup row>
            <Label for="MiddleName" sm={2}>
              MiddleName
            </Label>
            <Col sm={6}>
              <Input
                type="text"
                name="MiddleName"
                id="MiddleName"
                placeholder="Enter your Middle name"
              />
            </Col>
          </FormGroup>
          <br></br>
        </Row>
        <FormGroup row>
          <Label for="LastName" sm={2}>
            LastName
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="LastName"
              id="LastName"
              placeholder="Enter your last name"
            />
          </Col>
        </FormGroup>
      </div>
      <br></br>
      <FormGroup row>
        <Label for="PhoneNo" sm={2}>
          PhoneNumber
        </Label>
        <Col sm={6}>
          <Input
            type="number"
            name="MobileNumber"
            id="PhoneNo"
            placeholder="Enter phone number"
          />
        </Col>
      </FormGroup>
      <br></br>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={6}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your email address"
          />
        </Col>
      </FormGroup>
      <br></br>
      <FormGroup row>
        <Label for="Address" sm={2}>
          Address
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="Address"
            id="Address"
            placeholder="Enter your address"
          />
        </Col>
      </FormGroup>
      <br></br>
      <FormGroup row>
        <Label for="Country" sm={2}>
          Country
        </Label>
        <Col sm={6}>
          <Input
            type="text"
            name="Country"
            id="Country"
            placeholder="Enter your country"
          />
        </Col>
      </FormGroup>
      <br></br>
      <FormGroup row>
        <Label for="Loan Amount" sm={2}>
          Loan Amount
        </Label>
        <Col sm={6}>
          <Input
            type="number"
            name="LoanAmount"
            id="Loan Amount"
            placeholder="Enter the loan amount"
          />
        </Col>
      </FormGroup>
    </Form>
  );
}

export default InputFields;
