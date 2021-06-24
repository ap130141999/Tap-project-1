import React from "react";
import { Container, Col } from "reactstrap";
import {
  DropdownSelectGender,
  DropdownSelectLoan,
  DropdownSelectMartial,
  DropdownSelectEducation,
  DropdownSelectEmplyoment,
} from "../components/dropDownItems";
import InputFields from "../components/inputFields";
import FormButtons from "../components/formButtons";
import HomePage from "./HomePage";
import Header from "../components/Header";

function FormPage() {
  return (
    <main>
      <Header />
      <InputFields />

      <Col sm={6}>
        <DropdownSelectGender />
      </Col>

      <DropdownSelectLoan />

      <DropdownSelectEmplyoment />

      <DropdownSelectMartial />
      <DropdownSelectEducation />

      <FormButtons />
    </main>
  );
}

export default FormPage;
