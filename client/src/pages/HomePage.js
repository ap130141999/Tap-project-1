import React from "react";
import { Link } from "react-router-dom";
import image from "../image/byjus-logo.png";
import {
  Card,
  CardBody,
  Container,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="3" style={{ textAlign: "center" }}>
            <Card  style={{boxShadow: "10px 10px 10px #9E9E9E"}}>
              <CardHeader tag="h6"><h6 style={{color:"black"}} ><b>BYJUS NACH</b></h6></CardHeader>
              <CardBody className="">
                <img src={image} style={{width:"80px",height:"80px"}}></img>
                <div color="white">
                  <inline>
                    <Link to="/Form"  className="btn btn-primary"  style={{margin:"20px"}}>Pay  </Link>

                  
                  <Link  to="/Form"  className="btn btn-success">History</Link>
                  </inline>
                </div>
              </CardBody>
            </Card>
          </Col>
 
          {/* <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6"><h1 style={{color:"black"}} ><b>BYJUS NACH</b></h1></CardHeader>
              <CardBody className="">
              <img src={image}></img>
                <div color="white">
                  <Button color="info"  className="m-3">
                    <Link to="/Form">Pay</Link>
                  </Button>
                  <Button color="primary">History</Button>
                </div>
              </CardBody>
            </Card>
          </Col> */}


          {/* <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6"><h1>Byjus Nach</h1></CardHeader>
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
          </Col> */} 

          <Col md="3" style={{ textAlign: "center" }}>
            <Card style={{boxShadow: "10px 10px 10px #9E9E9E"}}>
              <CardHeader ><h6 style={{color:"black"}} ><b>ENUM CONFIG</b></h6></CardHeader>
              <CardBody className="">
              <img src="https://img.icons8.com/material-outlined/96/000000/macbook-settings.png"style={{width:"80px",height:"80px"}} />
                <div color="white">
                <Link to="/table"  className="btn btn-primary"  style={{margin:"20px"}}>Enum Config </Link>
                  {/* <Button color="primary">History</Button> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3"></Col>


          {/* <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6" style={{color: "#731768"}}><h1 style={{color:"black"}} ><b>ENUM CONFIG</b></h1></CardHeader>
              <CardBody className="">
              <img src={image}></img>
                <div color="white">
                <Button color="success" className="m-3"><h1></h1>
                    Enum Config 
                  </Button>
                  {/* <Button color="primary">History</Button> */}
                {/* </div>
              </CardBody>
            </Card>
          </Col>
         
          */}
          
          {/* <Col md="3" style={{ textAlign: "center" }}>
            <Card>
              <CardHeader tag="h6">Byjus Nach</CardHeader>
              <CardBody>
                <div color="white">
                  <Button color="success" className="m-3">
                    Enum Config Page
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col> */}

        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
