import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {

    return (
        <>
            <Navbar className="header-bg " collapseOnSelect expand="lg">
                <Container className="mt-5">
                    <Navbar.Toggle />
                    <Navbar.Brand href="#home">
                        <h1 className="nav-text-2 text-white">DotOnline</h1>
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="nav-text text-white" as={HashLink} to="/home#home">About the firm</Nav.Link>
                        <Nav.Link className="nav-text text-white" as={HashLink} to="#">Services</Nav.Link>
                        <Nav.Link className="nav-text text-white" as={HashLink} to="#">Career</Nav.Link>
                        <Nav.Link className="nav-text text-white" as={HashLink} to="#">Contact us</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;