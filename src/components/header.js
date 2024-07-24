import { Component } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class Header extends Component {
    state = {  } 

    render() { 
        const homepage = "/";

        return (
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to={homepage} className="logo py-1 px-2 me-3">YS</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link href={homepage+"#home"}>Home</Nav.Link>
                        <Nav.Link href={homepage+"#skills"}>Skills</Nav.Link>
                        <Nav.Link href={homepage+"#timeline"}>Work & Education</Nav.Link>
                        <Nav.Link href={homepage+"#projects"}>Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="headerButtons normal-main-button hide-button me-2 mb-2" href="mailTo:yogeshsarmaw@gmail.com">Contact Me</Button>
                        <Button className="headerButtons normal-main-button hide-button mb-2" href="/src/download/Yogesh-Resume.pdf" download>Download Resume</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
export default Header;