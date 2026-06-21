import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap"; //

export default function NavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "#0369a1" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand>📚 Book Explorer</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>  
        </Nav>
      </Container>
    </Navbar>
  );
}