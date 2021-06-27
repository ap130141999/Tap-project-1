
  
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
  Col,
  Row,
  Form,
} from "reactstrap";

const EnumModal = (props) => {
  let { showModal, enumId, oV } = props;
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
 
  // const toggle = (Id, val) => {
    // console.log("ID", Id, "Value", val);
    // const edit = async () =>
    //   await axios.put(`http://localhost:3001/enum/update`, {
    //     enumId: Id,
    //     optionValues: [{ value: val, label: val }],
    //   });

    // edit();
  // };
  const updateValues =(Id,val) => {
    console.log("ID", Id, "Value", val);
    const edit = async () =>
      await axios.put(`http://localhost:3001/enum/update`, {
        enumId: Id,
        optionValues: [{ value: val, label: val }],
      });

    edit();
  }
  const toggle = () => showModal = (!showModal);

  const dropChange = (event, label) => {};

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button> */}
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>EnumID</th>
                <th>Available Value</th>
              </tr>
            </thead>
            <tbody>
              <td>{enumId}</td>
              <td>
                {oV.map((ele) => (
                  <Row>
                    <Col>
                      <Input
                        key={ele.label}
                        onclick={(e) => {
                          dropChange(e, ele.label);
                        }}
                        defaultValue={ele.value}
                        disabled
                      />
                    </Col>
                  </Row>
                ))}
              </td>
            </tbody>
          </Table>
          {show ? (
            <Col>
              <h6>Add Dropdown value</h6>
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </Col>
          ) : (
            <Button onclick={setShow(!show)}>+</Button>
          )}
        </ModalBody>
        <ModalFooter>
            <Form>
          <Button type = "submit"
            color="success"
            onClick={() => {
              updateValues(enumId, input);
            }}
          >
            Add
          </Button>
          <Button color="primary" onClick={() => props.modelHandle(!showModal)}>
            GoBack
          </Button>
          </Form>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EnumModal;