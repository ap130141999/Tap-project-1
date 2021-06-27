
import Select from "react-select";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import InputFields from "./inputFields";
export const DropdownSelectGender = ({optionHandler}) => {
  const [currentGender, setCurrentGender] = useState();
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentGender(response.data);

    response.data.map((el) => {
      if (el.enumId === "gender") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentGender(event.value);
    setCurrentGender(event.label);
    optionHandler(event.label);
  };
  

  return (
    <Row className="mb-4">
      <Col md={4}>
        <h5>Gender</h5>
      </Col>
      <Col md={8}>
        <Select
          placeholder="Select gender"
          onChange={changeOption}
          defaultValue={options[0]}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};

export const DropdownSelectLoan = ({optionHandler}) => {
  const [currentloan, setCurrentLoan] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentLoan(response.data);

    response.data.map((el) => {
      if (el.enumId === "loan_type") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentLoan(event.value);
    setCurrentLoan(event.label);
    optionHandler(event.label);
  };
  console.log(currentloan);

  return (
    <Row>
      <Col md={4}>
        <h5>Loan Type</h5>
      </Col>
      <Col md={8}>
        <Select
          placeholder="Select Loan type"
          onChange={changeOption}
          defaultValue={options[0]}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};
export const DropdownSelectEducation = ({optionHandler}) => {
  const [currentEducation, setCurrentEducation] = useState();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentEducation(response.data);

    response.data.map((el) => {
      if (el.enumId === "education") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentEducation(event.value);
    setCurrentEducation(event.label);
    optionHandler(event.label);
  };
  

  return (
    <Row className="mt-4">
      <Col md={4}>
        <h5>Education</h5>
      </Col>
      <Col md={8}>
        <Select
          placeholder="Select education"
          onChange={changeOption}
          defaultValue={options[0]}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};

export const DropdownSelectMartial = ({optionHandler}) => {
   const [currentStatus, setCurrentStatus] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentStatus(response.data);

    response.data.map((el) => {
      if (el.enumId === "marital_status") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentStatus(event.value);
    setCurrentStatus(event.label);
    optionHandler(event.label);
  };
  

  return (
    <Row>
      <Col md={4}>
        <h5>Martial Status</h5>
      </Col>
      <Col md={8}>
        <Select
          placeholder="Select martial status"
          onChange={changeOption}
          defaultValue={options[0]}
          options={options}
        ></Select>
      </Col>
      <br></br>
      <br></br>
    </Row>
  );
};

export const DropdownSelectEmplyoment = ({optionHandler}) => {
  const [currentEmployment, setCurrentEmployment] = useState(["married"]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentEmployment(response.data);

    response.data.map((el) => {
      if (el.enumId === "employment") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentEmployment(event.value);
    setCurrentEmployment(event.label);
    optionHandler(event.label);
  };
  

  return (
    <Row>
      <Col md={4}>
        <h5>Employment</h5>
      </Col>
      <Col md={8}>
        <Select
          placeholder="Select Employment"
          onChange={changeOption}
          defaultValue={options[0]}
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