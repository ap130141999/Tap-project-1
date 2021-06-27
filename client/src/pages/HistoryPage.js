import React, { useEffect, useState } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';
import axios from 'axios';

const HistoryPage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const response = await axios.get(`http://localhost:3001/enum/getD`);
    setCardData(response.data);

  }
  console.log(cardData);
  return (
    <>

      <Container>
        <Row>
          {
            cardData.map((data) => {
              return (

                <Col md="4">
                  <Card>

                    <CardBody>
                      <CardTitle tag="h2" >{data.firstname}</CardTitle>

                      <CardText> Middlename : {data.middlename} </CardText>
                      <CardText> LastName   : {data.lastname} </CardText>
                      <CardText> Phone      : {data.phone} </CardText>
                      <CardText>Country     : {data.country} </CardText>
                      <CardText> Loan       : {data.loan} </CardText>



                    </CardBody>

                  </Card>
                </Col>

              )

            }
            )
          }
        </Row>
      </Container>




    </>
  )
}

export default HistoryPage;