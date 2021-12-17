import React from 'react';
import parser from 'bbcode-to-react';
import about from '../mocks/about';
import habilities from '../mocks/habilitiesMock';
import { CurriculumWrapper, Section, HeaderSpan, Link, Title, About, Bg, Habilities } from '../components/CurriculumComponents';

const Curriculum = () => {
  return (
  <Bg>
  <CurriculumWrapper>
    <h1>Gabriel Vilar Martins</h1>
    <h3>FullStack Web Developer</h3>

    <Section>
      <HeaderSpan>(51) 986100259</HeaderSpan>
      <HeaderSpan>gabrielvilarmartins@gmail.com</HeaderSpan>
      <HeaderSpan>
        <Link href="https://www.linkedin.com/in/gabriel-martins-769ba0217/">LinkedIn</Link>
      </HeaderSpan>
      <HeaderSpan>
        <Link href="https://github.com/Amadeusvh">GitHub</Link>
      </HeaderSpan>
      <h4>20 anos, Porto Alegre - RS</h4>
    </Section>

    <Section>
      <Title>Sobre</Title>
      <About>{parser.toReact(about())}</About>
    </Section>

    <Section>
      <Title>Habilidades</Title>
      <Habilities>
        {habilities().map((String) => <div>{ String }</div>)}
      </Habilities>
    </Section>

    <Section>
      <Title>Formação</Title>
    </Section>

    <Section>
      <Title>Experiência</Title>
    </Section>

    <Section>
      <Title>Projetos</Title>
    </Section>
    
  </CurriculumWrapper>
  </Bg>

  );
};

export default Curriculum;
