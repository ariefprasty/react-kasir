import { Col, Container, Row } from "react-bootstrap";
import {
  Hasil,
  ListCatagories,
  Menus,
  NavbarComponents,
} from "./Components/Index";
import React, { Component } from "react";
import { API_URL } from "./Utils/Constans";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { menus } = this.state;
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
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
