import React from "react";
import { Title, Spacer, ProjectsList } from "../components/Components";
import Project from "./Project";
import projects from "../mocks/projectsMock";

const Projects = () => {
  return (
    <div>
      
      <div>
        <Title string="50px">Projects</Title>
        <Spacer string="100px" />
      </div>

      <ProjectsList>
        {Object.entries(projects()).map(([key, project]) =>
          <Project project={project} key={key} />
        )}
      </ProjectsList>

    </div>
  );
};

export default Projects;
