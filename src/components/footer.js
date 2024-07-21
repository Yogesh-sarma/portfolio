import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

class Footer extends Component{
    render(){
        return (
            <Container fluid className="bg-dark text-light">
                <Row className="flex-column align-items-center">
                    <Col className="footer-col">
                        <a className="footer-logo" href="https://github.com/Yogesh-sarma" target="_blank" rel="noreferrer"><FaGithub size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.linkedin.com/in/yogesh-sarma845/" target="_blank" rel="noreferrer"><FaLinkedin size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.instagram.com/yogesh_sarma_/" target="_blank" rel="noreferrer"><FaInstagram size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.facebook.com/yogesh.sarma.5/" target="_blank" rel="noreferrer"><FaFacebook size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://x.com/yogeshsarma" target="_blank" rel="noreferrer"><FaX size={'1.5rem'} className="m-2"/></a>
                    </Col>
                    <Col className="my-1 footer-col">
                        <a className="footer-logo" href="mailTo:yogeshsarmaw@gmail.com"><FaEnvelope size={'1.5rem'}/> : yogeshsarmaw@gmail.com</a>
                    </Col>
                    <Col className="mb-2 footer-col">
                        <span style={{fontSize: 12}}>Copyright 2024. All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;