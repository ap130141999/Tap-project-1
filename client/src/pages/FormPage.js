import React from "react";
import "../App.css";
import axios from "axios";
import { Container, Col,Row  ,Card,CardBody} from "reactstrap";
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
  const [middlename , setMiddlename] = useState('');
  const [phone, setPhone] = useState('');
  const [country,setCountry] = useState('');
  const [loan, setLoan] = useState('');

      const submitData = async() => { 
        console.log(firstname,middlename,lastname,country,loan,phone,"sending through");
      const response = await axios.post(`http://localhost:3001/enum/add`,
       {
        firstname:firstname,lastname:lastname,middlename:middlename,phone:phone,country:country,loan:loan
      }
     );
      }

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

    // const getGender = () => {

    // }

      const [op, setOP] = useState([]);
      const dropDownHandler = (option, label) => {
        console.log("Hi option here", label, option);
        setOP([...op, { label: label, val: option }]);
      };
    
      console.log("All", op.map(el => {
        console.log(el.val)
      }));
    

  
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
          <InputFields sendFirstName={getfirstName} 
       sendMiddleName={getMiddleName} 
       sendLastName={getLastName} 
         sendPhone={getPhone} 
      sendCountry={getCountry}
      sendLoan={getLoan} />
      
          <Row>
            <Col md="6">
              <DropdownSelectGender optionHandler = {dropDownHandler} />
            </Col>
            <Col md="6">
              <DropdownSelectLoan optionHandler = {dropDownHandler}/>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEmplyoment optionHandler = {dropDownHandler} />
            </Col>
            <Col md="6">
              <DropdownSelectMartial optionHandler = {dropDownHandler}/>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEducation optionHandler = {dropDownHandler}/>
            </Col>
          </Row>

          <FormButtons buttonClick={submitData}  />
        </Card>
      </Container>
      {/* <InputFields sendFirstName={getfirstName} 
       sendMiddleName={getMiddleName} 
       sendLastName={getLastName} 
         sendPhone={getPhone} 
      sendCountry={getCountry}
      sendLoan={getLoan} /> */}
     
      
    </main>
  );
}

export default FormPage;
