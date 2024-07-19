import { Component } from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class Header extends Component {
    state = {  } 
    
    componentDidMount(){
        console.log("header mounted");
    }

    render() { 

        return (
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/" className="logo py-1 px-2 me-3">YS</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link href="/#home">Home</Nav.Link>
                        <Nav.Link href="/#skills">Skills</Nav.Link>
                        <Nav.Link href="/#timeline">Work & Education</Nav.Link>
                        <Nav.Link href="/#projects">Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="headerButtons normal-main-button hide-button me-2 mb-2" href="mailTo:addankiyogesh@gmail.com">Contact Me</Button>
                        <Button className="headerButtons normal-main-button hide-button mb-2">Download Resume</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
export default Header;