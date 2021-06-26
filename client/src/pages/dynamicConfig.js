
  
import axios from "axios";
import { Table, Button } from "reactstrap";
import { useEffect, useState } from "react";
import React from "react";
import EnumModal from "../components/modals";

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
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>EnumID</th>
            <th>optionValues</th>
            <th>Edit</th>
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
                  <Button onClick={() => AddModal(enumId, optionValues)}>
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
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