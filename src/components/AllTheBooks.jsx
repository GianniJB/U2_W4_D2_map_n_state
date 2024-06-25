import { Component } from "react";
import { CardText, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantastyB from "../data/fantasy.json";
import historyB from "../data/history.json";
import horrorB from "../data/horror.json";
import romanceB from "../data/romance.json";
import scifiB from "../data/scifi.json";

class AllTheBooks extends Component {
  state = {
    fantasy: fantastyB,
    history: historyB,
    horror: horrorB,
    romance: romanceB,
    scifi: scifiB,
  };

  render() {
    return (
      <>
        <Row xs={1} sm={2} md={3} lg={4} className="mt-4">
          {horrorB.map((book) => (
            <Col>
              <Card className="border border-0">
                <Card.Img variant="top" src={book.img} />
                <Card.Body className="bg-light">
                  <Card.Title className="text-truncate">
                    {book.title}
                  </Card.Title>
                  <CardText>{book.category}</CardText>
                  <div className="d-flex justify-content-around align-items-center">
                    <Button variant="primary">Buy</Button>
                    <Card.Text>{book.price} $</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default AllTheBooks;
