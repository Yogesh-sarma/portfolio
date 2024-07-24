import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookOriginal, GithubOriginal, LinkedinOriginal, TwitterOriginal } from "devicons-react";
import { FaEnvelope, FaInstagram } from "react-icons/fa6";
import WorkExp from "./workExp";
import Skills from "./skills";
import Projects from "./projects";

class Landing extends Component{

    constructor(props){
        super(props);
        this.headerButtons=[];
        this.dwndResumeButton="";
    }

    componentDidMount() {
        this.headerButtons = Array.from(document.getElementsByClassName('headerButtons'));
        this.dwndResumeButton = document.getElementById('dwndResumeButton');
        // console.log(this.dwndResumeButton);
        window.addEventListener('scroll', this.run);
        this.run();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.run);
    }

    isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    run = () => {
        // console.log('in run');
        if(this.dwndResumeButton && this.isInViewport(this.dwndResumeButton)){
            this.headerButtons.forEach((item) => {
                item.classList.add('hide-button')
            })
        }
        else {
            this.headerButtons.forEach((item) => {
                item.classList.remove('hide-button')
            })
        }
    };



    render() {
    
        return (
            <Container fluid className="flex-column scroll-offset">
                <Row id="home" className="landing-row primary-text">
                    <Col xs="11" sm="10" md="11" lg="8" xl="9" className="rounded-4 highlight-bg p-3 m-2 m-sm-5">
                        <h1 className="mb-0"><span className="main-text">Software</span> Engineer,</h1>
                        <h1 className="mb-0"><span className="main-text">Full Stack</span> Developer,</h1>
                        <h1 className="mb-5"><span className="main-text">AI/ML</span> Engineer</h1>
                        <h4>I'm <span className="main-text">Yogesh Sarma</span>. Software Engineer and Full Stack Developer with 3 Years of Experience, AI/ML aficianado advancing my skills with a Master's Degree in the US.</h4>
                        <Col className="my-3">
                            <a className="footer-logo ms-2" href="https://github.com/Yogesh-sarma" target="_blank"  rel="noreferrer"><GithubOriginal size={'2rem'}/></a>
                            <a className="footer-logo ms-2" href="https://www.linkedin.com/in/yogesh-sarma845/" target="_blank"  rel="noreferrer"><LinkedinOriginal size={'2rem'}/></a>
                            <a className="footer-logo ms-2" href="https://www.instagram.com/yogesh_sarma_/" target="_blank"  rel="noreferrer"><FaInstagram size={'2rem'} color={'#405DE6'}/></a>
                            <a className="footer-logo ms-2" href="https://www.facebook.com/yogesh.sarma.5/" target="_blank"  rel="noreferrer"><FacebookOriginal size={'2rem'}/></a>
                            <a className="footer-logo ms-2" href="https://x.com/yogeshsarma" target="_blank"  rel="noreferrer"><TwitterOriginal size={'1.5rem'}/></a>
                        </Col>
                        <Col>
                            <a className="primary-text noul-link ms-2" style={{ margin:'5px'}} href="mailTo:yogeshsarmaw@gmail.com"><FaEnvelope size={'2rem'} color="#034fa0"/> : yogeshsarmaw@gmail.com</a>
                        </Col>
                    </Col>
                    <Col className="d-flex flex-column p-3 m-2 m-sm-5 mx-lg-2 justify-content-center align-items-center">
                        <a className="btn btn-primary button m-2 noul-link" href="mailTo:yogeshsarmaw@gmail.com">Contact Me</a>
                        <a id="dwndResumeButton" className="btn btn-primary button m-2" href="/src/download/Yogesh-Resume.pdf" download>Download Resume</a>
                    </Col>
                </Row>

                <Row id="skills" className='mt-3 scroll-offset'>
                    <Skills/>
                    <WorkExp/>
                    <Projects/> 
                </Row>
            </Container>
        )
    }
}

export default Landing;