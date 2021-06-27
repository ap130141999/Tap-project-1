import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormButtons = () => {
  const Toast = () => {
    toast.success("Your Data Submitted Successfully", {
      position: "top-center",
    });
  };
  return (
    <Form>
      <div className="d-flex justify-content-end">
        <Button
          onClick={Toast}
          type="submit"
          color="primary"
          className="text-center"
          style={{
            width: "15%",
            background: "#4CAF50",
            fontSize: "15px",
            color: "white",
            padding: "14px 8px",
            margin: "15px 0",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </Button>
        <ToastContainer />
      </div>
    </Form>
  );
};

export default FormButtons;
