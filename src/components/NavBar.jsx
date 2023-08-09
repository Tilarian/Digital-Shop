import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (

  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Digital Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#bebidas">Bebidas</Nav.Link>
        <Nav.Link href="#comestibles">Comestibles</Nav.Link>
        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <CartWidget />
    </Container>
  </Navbar>
);