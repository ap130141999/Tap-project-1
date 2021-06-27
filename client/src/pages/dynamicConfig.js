import axios from "axios";
import { Table, Button, Container, Card } from "reactstrap";
import { useEffect, useState } from "react";
import React from "react";
import EnumModal from "../components/modals";
import Header from "../components/Header";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const DynamicTable = (props) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [tableId, setTabelId] = useState("");
  const [value, setValue] = useState([]);
  const [closeModal, setCloseModal] = useState();
  const AddModal = (enumId, value) => {
    setTabelId(enumId);
    setValue(value);
    console.log("Enum :", enumId);
    setShowModal(true);
  };
  const modelHandle = (ans) => {
    setShowModal(ans);
  };
  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    setTableData(response.data);
    console.log(response.data);
  };
  return (
    <>
      <Header />
      <Container className="mb-4">
        <Card
          style={{ boxShadow: "5px 5px 5px grey", backgroundColor: "#c77dff" }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "lightgrey",
            }}
          >
            ENUM TABLE
          </h1>
        </Card>
      </Container>
      <Container
        style={{ padding: "40px", boxShadow: "10px 10px 10px 10px  #e0aaff" }}
      >
        <Card>
          <br></br>
          <Table
            style={{
              background: "#ffffff",
              borderSpacing: "0",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#5a189a", color: "white" }}>
                <th>S.NO</th>
                <th>ENUM ID</th>
                <th>OPTION VALUES</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, idx) => {
                let { enumId, optionValues } = data;
                //   return (optionValues.map((data, idx) => {
                let values = optionValues.map((ele) => ele.label);
                //   }))
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{enumId}</td>
                    <td>{values.toString()}</td>
                    <td>
                      <Button
                        style={{ border: "none", background: "none" }}
                        onClick={() => AddModal(enumId, optionValues)}
                      >
                        <FontAwesomeIcon icon={faEdit} color="#5a189a" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </Container>
      <EnumModal
        showModal={showModal}
        enumId={tableId}
        oV={value}
        modelHandle={modelHandle}
      />
    </>
  );
};
export default DynamicTable;
