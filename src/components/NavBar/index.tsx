/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import React from 'react';
//Importacao de todas as libs disponiveis para controle de navegação da página
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

//Componente do navbar
const NavBar: React.FC = () => {
  const handleSelect = (eventKey: Event) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">NerdPrime</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Filmes</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Suspense</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Suspense</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Anything</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
