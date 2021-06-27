import Select from "react-select";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import InputFields from "./inputFields";
export const DropdownSelectGender = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(["married"]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentOption(response.data);

    response.data.map((el) => {
      if (el.enumId === "gender") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentOption(event.value);
    setCurrentOption(event.label);
    console.log(event);
  };
  console.log(currentOption);

  return (
    <Row>
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

export const DropdownSelectLoan = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(["married"]);
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
  console.log(options);

  const changeOption = (event) => {
    setCurrentOption(event.value);
    setCurrentOption(event.label);
    console.log(event);
  };
  console.log(currentOption);

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
export const DropdownSelectEducation = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(["married"]);
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
  console.log(options);

  const changeOption = (event) => {
    setCurrentOption(event.value);
    setCurrentOption(event.label);
    console.log(event);
  };
  console.log(currentOption);

  return (
    <Row>
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

export const DropdownSelectMartial = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(["married"]);
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
  console.log(options);

  const changeOption = (event) => {
    setCurrentOption(event.value);
    setCurrentOption(event.label);
    console.log(event);
  };
  console.log(currentOption);

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

export const DropdownSelectEmplyoment = ({ martialDetector }) => {
  const [currentOption, setCurrentOption] = useState(["married"]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);

  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setCurrentOption(response.data);

    response.data.map((el) => {
      if (el.enumId === "employment") {
        console.log(el);
        setOptions(el.optionValues);
      }
    });
  };
  console.log(options);

  const changeOption = (event) => {
    setCurrentOption(event.value);
    setCurrentOption(event.label);
    console.log(event);
  };
  console.log(currentOption);

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
