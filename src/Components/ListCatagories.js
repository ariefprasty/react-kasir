import { Component } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../Utils/Constans";
import { ListGroup } from "react-bootstrap";
import {
  faUtensils,
  faCoffee,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="icon" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="icon" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faBurger} className="icon" />;

  return <FontAwesomeIcon icon={faUtensils} />;
};

export default class ListCatagories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoryChoosen } = this.props;
    return (
      <Col md="2" mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={
                  categoryChoosen === category.nama && "category-aktif"
                }
              >
                <h5>
                  <Icon nama={category.nama} />
                  {category.nama}
                </h5>
              </ListGroup>
            ))}
        </ListGroup>
        <hr />
      </Col>
    );
  }
}
