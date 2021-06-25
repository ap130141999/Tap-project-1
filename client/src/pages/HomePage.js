import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardImg,
  Container,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import Header from "../components/Header";
import FormPage from "./FormPage";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6">Byjus Nach</CardHeader>
              <CardBody className="">
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="image"
                />
                <div color="white">
                  <Button color="success" className="m-3">
                    <Link to="/Form">Pay</Link>
                  </Button>
                  <Button color="primary">History</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6">Byjus Nache</CardHeader>
              <CardBody>
                <div color="white">
                  <Button color="success" className="m-3">
                    Enum Config Page
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
