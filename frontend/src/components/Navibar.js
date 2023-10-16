import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navibar() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <img
          src="/img/logo.png"
          width="35"
          height="35"
          className="navbar-logo"
          alt="GUARDED"
        />
        <Navbar.Brand as={Link} to="/">
          GUARDED
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/workouts">
              Workouts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navibar;
