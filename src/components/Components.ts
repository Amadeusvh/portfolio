import styled from "styled-components";

type Props = {
  string?: string;
};

export const About = styled.p<Props>`
  font-size: ${props => props.string};
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Abilities = styled.div`
  color: #d79921;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  flex-flow: row wrap; 
`;

export const Ability = styled.span`
  justify-content: center;
  margin: 15px;
  flex: 1;
`;

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

export const Bg = styled.div<Props>`
  background: ${props => props.string};
`;

export const Button = styled.button`
  box-shadow: 10px 10px #1e1f21;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  background: none;
  width: 200px;
  padding: 0.3em;
  margin: 0.5em;

  &:hover {
    background: #454b57;
  }
`;

export const CLink = styled.a<Props>`
  color: #83a598;
`;

export const CTitle = styled.h2`
  color: #fb4934;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const CurriculumList = styled.ul`
  margin-top: -10px;
`; 

export const CurriculumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  font-family: "Source Code Pro", monospace;
  font-size: 25px;
  background-color: #3c3836;
`;

export const Technologies = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-start;
`;

export const Tech = styled.span`
  border-width: 2px;
  box-shadow: 8px 8px #1e1f21;
  border-style: solid;
  border-color: white;
  padding: 5px;
  margin: 5px;
`;

export const HomeWrapper = styled.div`
  padding: 50px;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 17px 17px #1e1f21;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  box-shadow: 15px 15px #1e1f21;
  text-align: start;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 500px;
`;

export const Icon = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

export const Information = styled.div`
  display: flex;
`;

export const Icons = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  margin-bottom: -45px;
`;

export const Link = styled.a`
  width: auto;
  color: white;
  margin: 20px;
  text-decoration: none;

  &:hover {
    color: #5ca4b8;
  }
`;

export const LinksDiv = styled.div`
  justify-content: center;
  align-items: center;
  margin: 15px;
  flex: 1;
`;

export const Spacer = styled.div<Props>`
  margin-top: ${props => props.string};
`;

export const Title = styled.h1<Props>`
  font-size: ${props => props.string};
`;


export const Section = styled.div`
  display: flex;
  flex-direction: column ;
`;

export const HeaderSpan = styled.span`
  margin-top: 10px;
`;

export const ProjectName = styled.span`
  font-weight: bold;
  font-size: 40px;
`

export const ProjectsList = styled.div`
  box-shadow: 17px 17px #1e1f21;
  text-align: start;
  border-color: white;
  border-style: solid;
  border-radius: 5px;
  margin: 5px 250px 250px;
  padding: 30px;
`;
