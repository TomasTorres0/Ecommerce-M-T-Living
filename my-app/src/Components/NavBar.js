import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <NavBar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">
            Tienda de Productos
          </Navbar.Brand>
          <Nav ClassName="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Bebidas</Nav.Link>
            <Nav.Link href="#pricing">Alimentos</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    )
}

export default NavBar; 