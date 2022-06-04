import styles from './styles/style.css'; 
import headshot from './images/headshot2.png'; 

function AboutPage() {

    return (
        <section id='aboutpage'>
            <div className="about-container">
                <div className="about-words">
                    <h3 className='m-plus'>About Me</h3>
                    <hr/>
                    <p className='m-plus'>Hello! My name is Parker and I love creating enjoyable and interesting user experiences. My developer journey began in late 2021, when I wanted to make a website for my music. I started learning  web development, and in doing so, realized how much I enjoyed coding. Before long I decided to work towards becoming a software engineer. 
                    </p>
                    <p className='m-plus'>Since then I've built multiple applications and websites, including a third party Spotify app that randomly generates a song for you based on your current mood. Being a self taught developer, I am highly confident in my problem solving and troubleshooting abilities, and I'm always looking for more technologies to learn in order to create the best user experience possible. </p>
                    <h4 className='m-plus'>Here are some languages I speak:</h4>
                    <div className="languages">
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SASS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <a href="https://docs.google.com/document/d/1bYgoX9_E0shY8UNCMidPCNN24379dtFYJ6oHC696_6Y/edit?usp=sharing" target="_blank"><button className='m-plus' id='resume-btn'>Resume</button></a>
                </div>

                <div className="headshot-container">
                    <img id='headshot' src={headshot} alt="" />
                </div>
            </div>
        </section>

    )
}

export default AboutPage; 