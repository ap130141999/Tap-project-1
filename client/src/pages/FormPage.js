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
} from "../components/DropDownItems";

import InputFields from "../components/InputFields.js";
import FormButtons from "../components/FormButtons.js";
import Header from "../components/Header.js";

const FormPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [loan, setLoan] = useState("");
  const [gender, setGender] = useState("");
  const [account, setAccount] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [employment, setEmployment] = useState("");
  const [education, setEducation] = useState("");
  const [marital, setMarital] = useState("");
  const [loanType, setLoanType] = useState("");

  const submitData = async () => {
    let bodyPayload = {
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      phone: phone,
      country: country,
      loan: loan,
      gender: gender,
      employment: employment,
      education: education,
      marital: marital,
      loanType: loanType,
      employment: employment,
      aadhar: aadhar,
      account: account,
    };
    console.log(bodyPayload, "hi");
    const response = await axios.post(
      `http://localhost:3001/enum/add`,
      bodyPayload
    );
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

  const getEmployment = (label) => {
    setEmployment(label);
  };

  const getEducation = (label) => {
    setEducation(label);
  };

  const getMarital = (label) => {
    setMarital(label);
  };

  const getLoanType = (label) => {
    setLoanType(label);
  };

  const getAccount = (label) => {
    setAccount(label);
  };

  const getAadhar = (label) => {
    setAadhar(label);
  };
  return (
    <main>
      <Header />
      <Container className="mb-4">
        <Card style={{ boxShadow: "5px 5px 5px grey", borderRadius: "20px" }}>
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
            sendAadhar={getAadhar}
            sendAccount={getAccount}
          />

          <Row>
            <Col md="6">
              <DropdownSelectGender optionHandler={dropDownHandler} />
            </Col>
            <Col md="6">
              <DropdownSelectLoan optionHandler={getLoanType} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEmplyoment optionHandler={getEmployment} />
            </Col>
            <Col md="6">
              <DropdownSelectMartial optionHandler={getMarital} />
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
