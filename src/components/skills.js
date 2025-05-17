import { Component } from "react";
import { ApachesparkOriginal, BashOriginal, BootstrapOriginal, CplusplusOriginal, D3jsOriginal, ExpressOriginal, GitOriginal, HadoopOriginal, IntellijOriginal, JavaOriginal, JavascriptOriginal, KerasOriginal, MongodbOriginal, MysqlOriginal, NodejsOriginal, NumpyOriginal, OpencvOriginal, PostmanOriginal, PythonOriginal, ReactbootstrapOriginal, ReactOriginal, ScikitlearnOriginal, SpringOriginal, TensorflowOriginal, VscodeOriginal } from 'devicons-react';


class Skills extends Component{
    render(){
        const iconSize='4rem'
        const PLSkills = [
            {
                name: 'Java',
                icon: <JavaOriginal size={iconSize}/>
            },
            {
                name: 'Python',
                icon: <PythonOriginal size={iconSize}/>
            },
            {
                name: 'C++',
                icon: <CplusplusOriginal size={iconSize}/>
            },
            {
                name: 'JavaScript',
                icon: <JavascriptOriginal size={iconSize}/>
            }
        ]

        const webSkills = [
            {
                name: 'ReactJS',
                icon: <ReactOriginal size={iconSize}/>
            },
            {
                name: 'Java Spring',
                icon: <SpringOriginal size={iconSize}/>
            },
            {
                name: 'Node.js',
                icon: <NodejsOriginal size={iconSize}/>
            },
            {
                name: 'Express.js',
                icon: <ExpressOriginal size={{iconSize}}/>
            },
            {
                name: 'MySQL',
                icon: <MysqlOriginal size={iconSize}/>
            },
            {
                name: 'MongoDB',
                icon: <MongodbOriginal size={iconSize}/>
            },
            {
                name: 'Bootstrap',
                icon: <BootstrapOriginal size={iconSize}/>
            },
            {
                name: 'React Bootstrap',
                icon: <ReactbootstrapOriginal size={iconSize}/>
            }
        ]

        const aiMlSkills = [
            {
                name: 'Keras',
                icon: <KerasOriginal size={iconSize}/>
            },
            {
                name: 'Tensorflow',
                icon: <TensorflowOriginal size={iconSize}/>
            },
            {
                name: 'Scikit-learn',
                icon: <ScikitlearnOriginal size={iconSize}/>
            },
            {
                name: 'NumPy',
                icon: <NumpyOriginal size={iconSize}/>
            },
            {
                name: 'Hadoop',
                icon: <HadoopOriginal size={iconSize}/>
            },
            {
                name: 'Apache Spark',
                icon: <ApachesparkOriginal size={iconSize}/>
            },
            {
                name: 'D3.js',
                icon: <D3jsOriginal size={iconSize}/>
            },
            {
                name: 'OpenCV',
                icon: <OpencvOriginal size={iconSize}/>
            }
        ]

        const otherSkills=[
            {
                name: 'Git',
                icon: <GitOriginal size={iconSize}/>
            },
            {
                name: 'Bash',
                icon: <BashOriginal size={iconSize}/>
            },
            {
                name: 'Postman',
                icon: <PostmanOriginal size={iconSize}/>
            },
            {
                name: 'VSCode',
                icon: <VscodeOriginal size={iconSize}/>
            },
            {
                name: 'IntelliJ',
                icon: <IntellijOriginal size={iconSize}/>
            }
        ]

        const styles={
            skillCard: {
                border: '1px solid gray',
                borderRadius: '10px',
                boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                padding: '10px',
                textAlign: 'center'
            }
        }

        return(
            <div>
                <h2 className='text-center main-text'>My Skills</h2>

                <h4 className='text-center underlineText'>Programming Languages</h4>
                <div className='d-flex justify-content-center flex-wrap mb-4'>
                    {PLSkills.map((skill, index) => (
                    <div key={index} className='m-3' style={styles.skillCard}>
                        {skill.icon}
                        <div>{skill.name}</div>
                    </div>
                    ))}
                </div>

                <h4 className='text-center underlineText'>WebDev Frameworks</h4>
                <div className="d-flex justify-content-center flex-wrap mb-4">
                    {webSkills.map((skill, index) => (
                    <div key={index} className='m-3' style={styles.skillCard}>
                        {skill.icon}
                        <div>{skill.name}</div>
                    </div>
                    ))}
                </div>

                <h4 className='text-center underlineText'>AI/ML & Data Science Skills</h4>
                <div className="d-flex justify-content-center flex-wrap mb-4">
                    {aiMlSkills.map((skill, index) => (
                    <div key={index} className='m-3' style={styles.skillCard}>
                        {skill.icon}
                        <div>{skill.name}</div>
                    </div>
                    ))}
                </div>

                <h4 className='text-center underlineText'>Other Skills/Tools</h4>
                <div className="d-flex justify-content-center flex-wrap mb-4">
                    {otherSkills.map((skill, index) => (
                    <div key={index} className='m-3' style={styles.skillCard}>
                        {skill.icon}
                        <div>{skill.name}</div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Skills;