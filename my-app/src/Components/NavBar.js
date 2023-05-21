import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          ShowRoom
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/category/bebidas'>Sillas</Nav.Link>
          <Nav.Link as={Link} to='/category/alimentos'>Respaldos</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;
