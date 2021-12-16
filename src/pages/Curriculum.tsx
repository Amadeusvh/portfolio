import React from "react";
import { CurriculumWrapper, InformationHeader, HeaderSpan, Link } from "../components/CurriculumComponents";

const Curriculum = () => {
  return (
  <CurriculumWrapper>
    <h1>Gabriel Vilar Martins</h1>
    <h3>FullStack Web Developer</h3>

    <InformationHeader>
      <HeaderSpan>(51) 986100259</HeaderSpan>
      <HeaderSpan>gabrielvilarmartins@gmail.com</HeaderSpan>
      <HeaderSpan>
        <Link href="https://www.linkedin.com/in/gabriel-martins-769ba0217/">LinkedIn</Link>
      </HeaderSpan>
      <HeaderSpan>
        <Link href="https://github.com/Amadeusvh">GitHub</Link>
      </HeaderSpan>
    </InformationHeader>
    
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo vero temporibus obcaecati dolorum eligendi perferendis nostrum debitis neque ad, voluptates sunt voluptatibus veritatis, ex tempore? Minus vitae tempore adipisci debitis?</p>
  </CurriculumWrapper>

  );
};

export default Curriculum;
