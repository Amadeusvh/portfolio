import React from "react";
import { Title, Button } from "../components/HomeComponents";

const Home = () => {
  return (
    <div>
      <Title >Welcome to my web page \0/</Title>
      <a href="/curriculum"><Button>Curriculum</Button></a>
      <a href="#"><Button>Projects</Button></a>
    </div>
  ); 
};

export default Home;
