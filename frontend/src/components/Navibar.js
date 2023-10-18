import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import { ShieldShaded } from "@styled-icons/bootstrap/ShieldShaded";

function Navibar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <ShieldShaded size="1em" className="mb-1" />
          <span> </span>
          GUARDED
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/workouts">
              Workouts
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {!user && (
              <Nav.Item>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav.Item>
            )}
            {user && (
              <div>
                <span> {user.email}</span>
                <button onClick={handleClick}>Log Out</button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navibar;
