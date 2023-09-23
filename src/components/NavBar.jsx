import { Container, Nav, Navbar } from "react-bootstrap"
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import data from "../data/products.json"

const categories = data.map((product) => product.category);
const uniqueCategories = new Set(categories);

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Digital Shop</Navbar.Brand>
      <Nav className="me-auto">
        {[...uniqueCategories].map(category => (
          <Nav.Link
            as={NavLink}
            key={category}
            to={`/category/${category}`}
          >
            {category}
          </Nav.Link>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);