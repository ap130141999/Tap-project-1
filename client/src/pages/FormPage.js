import React from "react";
import "../App.css";
import axios from "axios";



import { Container, Col,Row  ,Card,CardBody} from "reactstrap";
import {
  DropdownSelectGender,
  DropdownSelectLoan,
  DropdownSelectMartial,
  DropdownSelectEducation,
  DropdownSelectEmplyoment,
} from "../components/dropDownItems";
import InputFields from "../components/inputFields";
import FormButtons from "../components/formButtons";
// import HomePage from "./HomePage";
import Header from "../components/Header";



function FormPage() {
  const toggle = (firstname,lastname,middlename,phone,country,loan) => {
    // console.log("ID", Id, "Value", val);
    const edit = async () =>
      await axios.put(`http://localhost:3001/enum/update`, {
        firstname:firstname,lastname:lastname,middlename:middlename,phone:phone,country:country,loan:loan 
      });

    edit();
  };
  
  return (
    <main>
      <Header />
      <Container>
        <Card
          style={{
            backgroundColor: "#ECECEC",
            padding: "40px",
            boxShadow: "5px 5px 5px 5px lightgrey",
          }}
        >
          <Card style={{ boxShadow: "5px 5px 5px grey" }}>
            <CardBody
              className="text-center fontstyle"
              style={{ backgroundColor: "#ECDBBA" }}
            >
              <h3> LOAN APPLICATION FORM </h3>
            </CardBody>
          </Card>
          <br></br>
          <InputFields />
          <Row>
            <Col md="6">
              <DropdownSelectGender />
            </Col>
            <Col md="6">
              <DropdownSelectLoan />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEmplyoment />
            </Col>
            <Col md="6">
              <DropdownSelectMartial />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DropdownSelectEducation />
            </Col>
          </Row>

          <FormButtons />
        </Card>
      </Container>
    </main>
  );
}

export default FormPage;
