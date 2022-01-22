import React from 'react';
import lodash from 'lodash';
import parser from 'bbcode-to-react';
import about from '../mocks/about';
import abilities from '../mocks/abilitiesMock';
import { CurriculumWrapper, Section, HeaderSpan, CLink, CTitle, About, Bg, Abilities, CurriculumList, Ability,} from '../components/Components';
import projects from '../mocks/projectsCurriculumMock';
import formation from '../mocks/formationMock';
import experience from '../mocks/experienceMock';

const Curriculum = () => {
  return (
    <Bg string="#3c3836">
    <CurriculumWrapper>
      
      <h1>Gabriel Vilar Martins</h1>
      <h3>FullStack Web Developer</h3>

      <Section>
        <HeaderSpan>(51)98610-0259</HeaderSpan>
        <HeaderSpan>gabrielvilarmartins@gmail.com</HeaderSpan>
        <HeaderSpan>
          <CLink href="https://www.linkedin.com/in/gabriel-martins-769ba0217/">LinkedIn</CLink>
        </HeaderSpan>
        <HeaderSpan>
          <CLink href="https://github.com/Amadeusvh">GitHub</CLink>
        </HeaderSpan>
        <h4>20 anos, Porto Alegre - RS</h4>
      </Section>

      <Section>
        <CTitle>Sobre</CTitle>
        <About>{parser.toReact(about())}</About>
      </Section>

      <Section>
        <CTitle>Habilidades</CTitle>
        <Abilities>
          {lodash.chunk(abilities(), 2)
          .map(([a, b]) => 
            <div>
              <Ability>{ a }</Ability>
              <Ability>{ b }</Ability>
            </div>
          )}
        </Abilities>
      </Section>

      <Section>
        <CTitle>Formação</CTitle>
        <CurriculumList>
          {formation()
          .map((string, i) =>
            <About key={i}>
              <li>{ parser.toReact(string) }</li>
            </About>
          )}
        </CurriculumList>
      </Section>

      <Section>
        <CTitle>Experiência</CTitle>
        <CurriculumList>
          {experience()
          .map((string, i) => 
            <About key={i}>
              <li>{ parser.toReact(string) }</li>
            </About>
          )}
        </CurriculumList>
      </Section>

      <Section>
        <CTitle>Projetos</CTitle>
        <About>{ parser.toReact(projects()) }</About>
      </Section>
      
    </CurriculumWrapper>
    </Bg>

  );
};

export default Curriculum;
