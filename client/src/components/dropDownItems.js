import Select from "react";
import React, { useState } from "react";
import { Row, Col } from "reactstrap";

export const DropdownSelectGender = ({ genderDetector }) => {
  const [currentOption, setCurrentOption] = useState(genderDetector);
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <Col md={4}>
        <p>Gender</p>
      </Col>
      <Col md={6}>
        <Select
          onChange={(event) => changeOption()}
          value={currentOption}
          options={options}
        ></Select>
      </Col>
    </Row>
  );
};

// DropDown for loanType

export const DropdownSelectLoan = ({ loanDetector }) => {
  const [currentOption, setCurrentOption] = useState(loanDetector);
  const options = [
    { value: "home", label: "Home loan" },
    { value: "car", label: "Car loan" },
    { value: "education", label: "Education" },
  ];

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <p>Loan type</p>
      <Select
        onChange={(event) => changeOption()}
        value={currentOption}
        options={options}
      ></Select>
    </Row>
  );
};

//DropDown for martial status

export const DropdownSelectMartial = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(martialDetector);
  const options = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorce", label: "Divorced" },
  ];

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <p>Martial Status</p>
      <Select
        onChange={(event) => changeOption()}
        value={currentOption}
        options={options}
      ></Select>
    </Row>
  );
};

//Dropdown  Education

export const DropdownSelectEducation = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(martialDetector);
  const options = [
    { value: "10th", label: "10th" },
    { value: "12th", label: "12th" },
    { value: "ug", label: "Under Graduate" },
    { value: "pg", label: "Post Graduate" },
    { value: "illterate", label: "Illterate" },
    { value: "doctrate", label: "Doctrate" },
  ];

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <p>Education</p>
      <Select
        onChange={(event) => changeOption()}
        value={currentOption}
        options={options}
      ></Select>
    </Row>
  );
};

//Dropdown Employment

export const DropdownSelectEmplyoment = ({ employeDetector }) => {
  const [currentOption, setCurrentOption] = useState(employeDetector);
  const options = [
    { value: "employed", label: "Employed" },
    { value: "unemployed", label: "Unemployed" },
  ];

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <p>Employment</p>
      <Select
        onChange={(event) => changeOption()}
        value={currentOption}
        options={options}
      ></Select>
    </Row>
  );
};

export default {
  DropdownSelectGender,
  DropdownSelectLoan,
  DropdownSelectMartial,
  DropdownSelectEducation,
  DropdownSelectEmplyoment,
};
