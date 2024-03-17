import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">La Reina Dorada</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Alimentos</Nav.Link>
            <Nav.Link href="#features">Cosmetica</Nav.Link> 
            <Nav.Link href="#pricing">Indumentaria</Nav.Link>
          </Nav> 
          <CartWidget />
        </Container>
      </Navbar>
    );
};