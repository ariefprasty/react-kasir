import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Hasil, ListCatagories, NavbarComponents } from "./Components/Index";
function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCatagories />
            <Col>
              <h4>Daftar Produk</h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
