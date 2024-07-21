import { ApachesparkOriginal, D3jsOriginal, GithubOriginal, HadoopOriginal, Html5Original, JavaOriginal, JavascriptOriginal, KerasOriginal, MatplotlibOriginal, MysqlOriginal, NumpyOriginal, OpencvOriginalWordmark, PythonOriginal, ReactbootstrapOriginal, ReactOriginal, SpringOriginal, TensorflowOriginal } from "devicons-react";
import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoOpenOutline } from "react-icons/io5";
import { SiApachehive } from "react-icons/si";

class Projects extends Component{
    render() {
        const iconSize="1.5rem";
        const projects = [
            {
                title: "Image Caption Generation",
                subtitle: <div className="subtitleDiv"><PythonOriginal size={iconSize}/>
                                <KerasOriginal size={iconSize}/>
                                <TensorflowOriginal size={iconSize}/>
                                <NumpyOriginal size={iconSize}/>
                            </div>,
                description: "In this project, I developed a neural network model inspired by Marc Tanti's merge model, designed to generate descriptive captions for any input image. This system integrates two distinct models: a word embedding model for text processing and a CNN for image analysis. These components converge in a LSTM network to produce image captions.",
                link: "https://github.com/Yogesh-sarma/ImageCaptionGenerator"
            },
            {
                title: "PPM Tool",
                subtitle: <div className="subtitleDiv">
                                <JavaOriginal size={iconSize}/>
                                <SpringOriginal size={iconSize}/>
                                <ReactOriginal size={iconSize}/>
                                <MysqlOriginal size={iconSize}/>
                                <ReactbootstrapOriginal size={iconSize}/>
                            </div>,
                description: "A project management tool inspired by the Kanban methodology, designed to track and manage project tasks. This tool features unique project identifiers, enabling precise task organization. Users can assign priorities and statuses to tasks, as well as add or delete them. It also includes authentication functionalities, ensuring secure access and personalized user experiences.",
                link: "https://github.com/Yogesh-sarma/Project-Management-Tool"
            },
            {
                title: "Facial Expression Recognition",
                subtitle: <div className="subtitleDiv">
                                <PythonOriginal size={iconSize}/>
                                <KerasOriginal size={iconSize}/>
                                <TensorflowOriginal size={iconSize}/>
                                <OpencvOriginalWordmark size={iconSize}/>
                                <MatplotlibOriginal size={iconSize} title="Matplotlib"/>
                            </div>,
                description: "Developed a facial expression recognition model capable of detecting six distinct emotions. Leveraging HAAR Cascade filters for precise face detection and training the model with the Cohn-Kanade dataset, I achieved robust performance. The model utilizes the FisherFace classifier for facial expression classification. It also features real-time emotion detection capabilities through a webcam interface.",
                link: "https://github.com/Yogesh-sarma/Facial-Expression-recognition"
            },
            {
                title: "My Portfolio Website",
                subtitle: <div className="subtitleDiv">
                                <ReactOriginal size={iconSize}/>
                                <ReactbootstrapOriginal size={iconSize}/>
                                <JavascriptOriginal size={iconSize}/>
                            </div>,
                description: "Yes, You are currently in it!",
                link: "https://github.com/Yogesh-sarma/portfolio"
            },
            {
                title: "Weather Data Analysis using Hadoop and Hive",
                subtitle: <div className="subtitleDiv">
                                <JavaOriginal size={iconSize}/>
                                <HadoopOriginal size={iconSize}/>
                                <SiApachehive size={iconSize}/>
                            </div>,
                description: "I developed a climate data analysis system to process weather data of the past 25 years from the GHCNd. The system ensures data quality through consistency checks and outlier detection. It includes MapReduce jobs for temperature and precipitation analysis, providing average temperatures and total precipitation over specified periods. HiveQL queries identify extreme weather events and analyze long-term climate trends, offering insights into regional variations and supporting informed decision-making on climate change.",
                link: "https://github.com/Yogesh-sarma/WeatherAnalysis"
            },
            {
                title: "Fraud Detection using Spark",
                subtitle: <div className="subtitleDiv">
                                <PythonOriginal size={iconSize}/>
                                <ApachesparkOriginal size={iconSize}/>
                            </div>,
                description: "Developed a fraud detection system for analyzing large datasets in real time to detect potential fraud. It includes data preprocessing, EDA, and feature engineering with Spark MLlib. I implemented ML models for fraud detection, evaluating performance with different metrics like F-measure. The scalable pipeline supports real-time processing via Structured Streaming. Standalone Spark applications provide user behavior analysis, transaction frequency analysis, merchant analysis, and geospatial analysis, offering comprehensive insights into fraud patterns.",
                link: "https://github.com/Yogesh-sarma/Fraud-detection-spark"

            },
            {
                title: "Scatterplot Visualization",
                subtitle: <div className="subtitleDiv">
                                <JavascriptOriginal size={iconSize}/>
                                <D3jsOriginal size={iconSize}/>
                                <Html5Original size={iconSize}/>
                            </div>,
                description: "Designed and implemented an interactive scatterplot visualization using D3.js, capable of handling and displaying temporal CSV data. This dynamic tool features a time selection slider for intuitive data exploration and offers informative tooltips for each data point, revealing additional attributes from the dataset. To enhance visual distinction, I applied a diverging colormap, ensuring clear and insightful data representation.",
                link: "https://github.com/Yogesh-sarma/ConnectedScatterplotVisualisation"
            }            
        ]

        return(
            <div id="projects" className="pt-3 scroll-offset">
                <h2 className="main-text text-center mb-4">Projects</h2>
                <Container className="d-flex flex-column">
                    <Row className="flex-wrap" md={3} sm={2} xs={1}>
                        {projects.map((project, index) => (
                            <Col key={index} className="mb-3">
                                <Card className="project-card">
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Subtitle className="my-2">{project.subtitle}</Card.Subtitle>
                                        <Card.Text>{project.description}</Card.Text>
                                        <div className="card-bottom text-end"><Card.Link href={project.link} target="_blank"><GithubOriginal size={iconSize}/><IoOpenOutline/></Card.Link></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects;