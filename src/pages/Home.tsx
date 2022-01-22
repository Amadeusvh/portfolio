import React from "react";
import { Title, Button, Link ,Spacer, HomeWrapper, LinksDiv, Icon ,Icons } from "../components/Components";
import { Github, Linkedin } from "styled-icons/bootstrap";
import { ReactLogo, Styledcomponents } from "styled-icons/simple-icons";

const Home = () => {
  return (
    <HomeWrapper>
      
      <div>
        <Title string="50px">Gabriel Martins (A.K.A Amadeus)</Title>
        <Title string="30px">Web Fullstack Developer</Title>
      </div>

      <Spacer string="100px"></Spacer>

      <a href="/curriculum"><Button>Curriculum</Button></a>
      <a href="/projects"><Button>Projects</Button></a>

      <Spacer string="200px"></Spacer>

      <LinksDiv>
        <Link target="_blank" href="https://www.linkedin.com/in/gabriel-martins-769ba0217/" >
          <Linkedin size="30px" /> LinkedIn 
        </Link>
        <Link target="_blank" href="https://github.com/Amadeusvh">
          <Github size="30px" /> Github 
        </Link>
      </LinksDiv>

      <Icons>
        <Icon>
          <ReactLogo size="20px" />React.JS
        </Icon>
        <Icon>
          <Styledcomponents size="30px" />Styled Componets
        </Icon>
      </Icons>
    
    </HomeWrapper>
  ); 
};

export default Home;
