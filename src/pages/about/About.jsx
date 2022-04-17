import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <br /><span>Yunus Çelik </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Yunus</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          
          I've already known Pyhton, JS, ReactJS, NodeJS, HTML5, CSS3, Bootstrap.
        </h4>
        <h2>
          <a href="mailto:Yns.Clk2038@gmail.com">Send email</a> :
          Yns.Clk2038@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;