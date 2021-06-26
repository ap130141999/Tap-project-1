import Select from "react-select";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import InputFields from "./inputFields";
export const DropdownSelectGender = ({ genderDetector }) => {
  const [currentOption, setCurrentOption] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentOption(response.data);

    response.data.map((option) => {
      if (option.enumId === "gender") {
        console.log(option);
        setOptions(option.optionValues);
      }
    });
  };

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <Col md={4}>
        <h5>Gender</h5>
      </Col>
      <Col md={8}>
        <Select
          onChange={(event) => changeOption()}
          value={currentOption}
          options={options}
          
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};

// DropDown for loanType

export const DropdownSelectLoan = ({ loanDetector }) => {
  const [currentOption, setCurrentOption] = useState(loanDetector);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentOption(response.data);

    response.data.map((el) => {
      if (el.enumId === "loan_type") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <Col md={4}>
        <h5>Loan type</h5>
      </Col>
      <Col md={8}>
        <Select
          onChange={(event) => changeOption()}
          value={currentOption}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};

//DropDown for martial status

export const DropdownSelectMartial = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(martialDetector);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentOption(response.data);

    response.data.map((el) => {
      if (el.enumId === "marital_status") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <Col md={4}>
        <h5>Martial Status</h5>
      </Col>
      <Col md={8}>
        <Select
          onChange={(event) => changeOption()}
          value={currentOption}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};

//Dropdown  Education

export const DropdownSelectEducation = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(martialDetector);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentOption(response.data);

    response.data.map((el) => {
      if (el.enumId === "education") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };

  const changeOption = (newOption) => {
    setCurrentOption(newOption);
  };

  return (
    <Row>
      <Col md={4}>
        <h5>Education</h5>
      </Col>
      <Col md={8}>
        <Select
          onChange={(event) => changeOption()}
          value={currentOption}
          options={options}
          
        ></Select>
      </Col>
      <br></br>
      <br></br>
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
      <Col md={4}>
        <h5>Employment</h5>
      </Col>
      <Col md={8}>
        <Select
          onChange={(event) => changeOption()}
          value={currentOption}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
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