import React, { useEffect, useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import axios from "axios";
import Header from "../components/Header";
import "../index.css";

const HistoryPage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const response = await axios.get(`http://localhost:3001/enum/getDetails`);
    setCardData(response.data);
  };
  console.log(cardData);
  return (
    <>
      <Header />
      <Container>
        <Row>
          {cardData.map((data) => {
            return (
              <Col md="4">
                <Card
                  className="historyCard"
                  style={{
                    margin: "20px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">{data.firstname}</CardTitle>
                    <CardText> Middlename : {data.middlename} </CardText>
                    <CardText> LastName : {data.lastname} </CardText>
                    <CardText> Phone : {data.phone} </CardText>
                    <CardText>Country : {data.country} </CardText>
                    <CardText> Loan : {data.loan} </CardText>
                    <CardText>Gender : {data.gender}</CardText>
                    <CardText> Loan Type : {data.loanType} </CardText>
                    <CardText> Employment : {data.employment} </CardText>
                    <CardText> Marital Status: {data.marital}</CardText>
                    <CardText> Aadhar : {data.aadhar}</CardText>
                    <CardText> Account : {data.account}</CardText>
                    <CardText> Education : {data.education}</CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HistoryPage;
