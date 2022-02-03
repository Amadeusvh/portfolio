import {
  About,
  Link,
  Spacer,
  Information,
  Image,
  ImageDiv,
  Technologies,
  Tech,
  Icon,
  ProjectName,
} from "../components/Components";
import { Github } from "styled-icons/bootstrap";
import { Project } from "../types/types";

const ProjectComponent = ({project}: { project: Project }) => {
  return (
    <div>

      <Link target="_blank" href={project.url}>
        <ProjectName>
          <span>{project.name}</span><Icon><Github size="30px" /></Icon>
        </ProjectName>
      </Link>

      <Information>
        <ImageDiv>
          <Image src={project.img} alt="projectImage" />
        </ImageDiv>

        <About string="22px">
          {project.about}
        </About>
      </Information>

      <Technologies>
        {project.techs.map((tech) =>
          <Tech>{tech}</Tech>
        )}
      </Technologies>

      <Spacer string="50px" />

      <hr></hr>
    </div>
  );
};

export default ProjectComponent;