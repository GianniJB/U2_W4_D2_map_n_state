import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import scifiBks from "../data/scifi.json";
import fantasyBks from "../data/fantasy.json";

const AllTheBooks = () =>
  scifiBks.map((sf_book) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={sf_book.img} />
        <Card.Body className="bg-light">
          <Card.Title className="text-truncate">{sf_book.title}</Card.Title>
          <Card.Text className="m-0">{sf_book.category}</Card.Text>
          <Card.Text className="m-0">{sf_book.price} $</Card.Text>
          <Button variant="primary">Aggiungi al Carrello</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

export default AllTheBooks;
