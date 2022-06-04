import styles from './styles/style.css'; 
import logo from './images/dev-logo-lighter-bg.png'; 
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; 

function App() {

  return (
    <div className="App">
       <section className="home">
         <div className="nav">
            <a className="logo" href="#home">
              <img id="logo-image" src={logo} alt="" />
            </a>
            <div className="links">
              <a id="about" href="#about">About</a>
              <a id="work" href="#work">Work</a>
              <a id="contact" href="#contact">Contact</a>
            </div>
         </div>

         <div className="info-section">
            <h1 className="blue-font">Hey, I'm Parker.</h1>
            <h1 className="darker-font">I'm a web developer.</h1>
            <p id="info-paragraph">I'm a software engineer passionate about combining the art of design and the skill of programming to make creative user experiences that are enjoyable and easy to use.</p>

            <div className="icons">
              <a id='github-logo' href="https://github.com/parkerrudd" target="_blank"> <FaGithub /> </a>
              <a id='linkedin-logo' href="https://linkedin.com/parkerrudd" target="_blank"> <FaLinkedin /> </a>
              <a id='twitter-logo' href="https://twitter/parkerrudd" target="_blank"> <FaTwitter /> </a>
            </div>

          </div>

       </section>
    </div>
  );
}

export default App;
