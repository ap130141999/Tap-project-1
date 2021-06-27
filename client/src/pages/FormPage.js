import React from "react";
import "../App.css";
import axios from "axios";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import { useState } from "react";
import {
  DropdownSelectGender,
  DropdownSelectLoan,
  DropdownSelectMartial,
  DropdownSelectEducation,
  DropdownSelectEmplyoment,
} from "../components/dropDownItems";

import InputFields from "../components/inputFields";
import FormButtons from "../components/formButtons";
import Header from "../components/Header";
// import HomePage from "./HomePage";

const FormPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [loan, setLoan] = useState("");
  const [gender, setGender] = useState("");
  const [employment, setEmployment] = useState("");
  const [education,setEducation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [loanType, setLoanType] = useState("");



  const submitData = async () => {
    let bodyPayload = { firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      phone: phone,
      country: country,
      loan: loan,
      gender : gender,
      employment : employment,
      education : education,
      marital : marital,
      loanType : loanType,
      employment : employment,


    }
    console.log(bodyPayload,"hi");
    const response = await axios.post(`http://localhost:3001/enum/add`,bodyPayload);
  };

  const getfirstName = (value) => {
    console.log(value);
    setFirstname(value);
  };
  const getMiddleName = (value) => {
    console.log(value);
    setMiddlename(value);
  };
  const getLastName = (value) => {
    console.log(value);
    setLastname(value);
  };
  const getPhone = (value) => {
    console.log(value);
    setPhone(value);
  };
  const getCountry = (value) => {
    console.log(value);
    setCountry(value);
  };
  const getLoan = (value) => {
    console.log(value);
    setLoan(value);
  };

  const dropDownHandler = (label) => {
    console.log("Hi option here", label);
    setGender(label);
  };
  
  const getEmployment =(label) => {
    setEmployment(label);
  }
  
  const getEducation =(label) =>{
    setEducation(label);
  }

  const getMaritalStatus = (label) ={
    setMaritalStatus(label);
  }

  const getLoanType = (label) ={
    setLoanType(label);
  }
  return (
    <main>
      <Header />
      <Container className="mb-4">
        <Card style={{ boxShadow: "5px 5px 5px grey" }}>
          <CardBody
            className="text-center "
            style={{ backgroundColor: "#9d4edd", color: "white" }}
          >
            <p> LOAN APPLICATION FORM </p>
          </CardBody>
        </Card>
      </Container>
      <Container>
        <Card
          style={{
            backgroundColor: "#ECECEC",
            padding: "40px",
            boxShadow: "5px 5px 5px 5px lightgrey",
          }}
        >
          <br></br>
          <InputFields
            sendFirstName={getfirstName}
            sendMiddleName={getMiddleName}
            sendLastName={getLastName}
            sendPhone={getPhone}
            sendCountry={getCountry}
            sendLoan={getLoan}
          />

          <Row>
            <Col md="6">
              <DropdownSelectGender optionHandler={dropDownHandler} />
            </Col>
            <Col md="6">
              <DropdownSelectLoan optionHandler = {getLoanType} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEmplyoment  optionHandler ={getEmployment}/>
            </Col>
            <Col md="6">
              <DropdownSelectMartial optionHandler= {getMaritalStatus} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEducation optionHandler={getEducation} />
            </Col>
          </Row>

          <FormButtons buttonClick={submitData} />
        </Card>
      </Container>
    </main>
  );
};

export default FormPage;
