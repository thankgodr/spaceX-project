import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavRoutePaths from '../navigation/navroutes';
import Logo from '../images/logo.png';

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">
                <img src={Logo} className="logo" /> Space Travels&apos; Hub
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>

                    <NavLink role="button" className="nav-link" to={NavRoutePaths.HOME}>Rockets </NavLink>

                    <NavLink role="button" className="nav-link" to={NavRoutePaths.MISSION}>Missions </NavLink>

                    <NavLink role="button" className="nav-link" to={NavRoutePaths.PROFILE}>My Profile </NavLink>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;