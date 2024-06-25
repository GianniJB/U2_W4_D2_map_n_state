import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const MyFooter = () => (
  <footer className="mt-5">
    <Row xs={1} sm={1} md={2}>
      <Col>
        <ListGroup>
          <ListGroup.Item>Spese di consegna</ListGroup.Item>
          <ListGroup.Item>Pagamenti</ListGroup.Item>
          <ListGroup.Item>Help</ListGroup.Item>
          <ListGroup.Item>Privacy</ListGroup.Item>
          <ListGroup.Item>Cookie Policy</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <ListGroup>
          <ListGroup.Item>Biblioteche</ListGroup.Item>
          <ListGroup.Item>Assistenza clienti</ListGroup.Item>
          <ListGroup.Item>Affiliazione</ListGroup.Item>
          <ListGroup.Item>Condizioni generali di vendita</ListGroup.Item>
          <ListGroup.Item>Condizioni d'uso del sito</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </footer>
);

export default MyFooter;
