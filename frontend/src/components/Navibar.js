import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ShieldShaded } from "@styled-icons/bootstrap/ShieldShaded";

function Navibar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <ShieldShaded size="1em" />
          GUARDED
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/workouts">
              Workouts
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/signup">
              Sign up
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navibar;
