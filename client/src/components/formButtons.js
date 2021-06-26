import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormButtons = () => {
  
  const Toast = () => {
    toast.success("Your Data Submitted Successfully", {
      position: "bottom-center",
    });
  };
  return (
    <Form>
      <Button
        onClick={Toast}
        type="submit"
        color="primary"
        className="text-center"
        style={{
          width: "20%",
          background: "#4CAF50",

          color: "white",
          padding: "14px 8px",
          marginleft: "20px",
          margin: "8px 0",

          border: "none",
          border: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </Button>
      <ToastContainer />
    </Form>
  );
};
export default FormButtons;