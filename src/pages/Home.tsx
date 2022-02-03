import React from "react";
import { 
  Title, 
  Button, 
  Link,
  Spacer, 
  HomeWrapper, 
  LinkRow, 
  Icon,
  IconRow, 
  ButtonRow,
} from "../components/Components";
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

      <ButtonRow>
        <a href="/curriculum"><Button>Curriculum</Button></a>
        <a href="/projects"><Button>Projects</Button></a>
      </ButtonRow>

      <Spacer string="200px"></Spacer>

      <LinkRow>
        <Link target="_blank" href="https://www.linkedin.com/in/gabriel-martins-769ba0217/" >
          <Linkedin size="32px" /> LinkedIn 
        </Link>
        <Link target="_blank" href="https://github.com/Amadeusvh">
          <Github size="32px" /> Github 
        </Link>
      </LinkRow>

      <IconRow>
        <Icon>
          <ReactLogo size="24px" />React.JS
        </Icon>
        <Icon>
          <Styledcomponents size="40px" />Styled Componets
        </Icon>
      </IconRow>
    
    </HomeWrapper>
  ); 
};

export default Home;
