import React from "react";
import AboutUsImg from "../images/aboutus.png"
import "./AboutPage.css"
import gitHubLogo from "../images/githublogo.png"
import linkedInLogo from "../images/linkedinimg.png"

const AboutPage = () => {
  return <div>
      <h3>About Us</h3>
      <div className="aboutUsContainer">
        <img src= {AboutUsImg} alt = "about us image" className="aboutUsImg" />
        <section>
        <p>Hi there! <br></br>
        We're Rojda and Sosha – two passionate web developers currently taking part in a full-time Web Development Bootcamp.<br></br>
        What brought us together? Our shared love for animals ❤️<br></br>
        As part of our learning journey, we decided to build something that reflects both our creativity and our hearts – and that's how Pawradise was born.<br></br>
        We created this pet shop project not just to practice coding, but to imagine a platform that offers comfort, care, and joy to pet lovers everywhere.<br></br> 
        Whether you're here to browse, get inspired, or just admire cute products – welcome! 🐾</p>
        <div className="contactDetailsContainer">
          <div>
            <p>Rojda:</p>
            <img src={gitHubLogo} alt="Github Logo" />
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </div>
          <div>
            <p>Sosha:</p>
            <img src={gitHubLogo} alt="Github Logo" />
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </div>
        </div>
        </section>
      </div>
    
    
    </div>;
};

export default AboutPage;
