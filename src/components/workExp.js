import { Component } from "react";

class WorkExp extends Component{
    render(){
        return(
            <section id="timeline" className='py-3 scroll-offset off-bg'>
                <h2 className='text-center pt-2 mb-4 main-text'>Work & Education</h2>
                <ul>
                    <li className="show">
                        <div>
                            <h4>Jan 2024 - present : Teaching Assistant at University of North Carolina at Charlotte</h4>
                            <p>Performed TA duties for courses "Intelligent Robotics" and "Algorithms & Data Structures" under Prof. Srinivas Akella</p>
                        </div>
                    </li>
                    <li className="show">
                        <div>
                            <h4>2023 - 2024 : Master's in CS at University of North Carolina at Charlotte</h4>
                            <p>CGPA - 4.0. Coursework includes Algo & DS, Machine Learning, Cloud Computing, Visual Analytics</p>
                        </div>
                    </li>
                    <li className="show">
                        <div>
                            <h4>2020 - 2023 : Full Stack Developer</h4>
                            <p>Worked as a full stack developer utilizing Java Spring and ReactJS for building robust web applications for <span style={{fontWeight:"bold"}}>Apple Inc.</span></p>
                        </div>
                    </li>
                    <li className="show">
                        <div>
                            <h4>2015 - 2020 : Bachelor's in Computer Science at JNTUH College of Engineering</h4>
                            <p>Studied and obtained a dual degree that includes Bachelor's and Master's in Computer Science</p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default WorkExp;
