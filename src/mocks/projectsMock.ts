
import { Project } from "../types/types";

const projects = (): Record<string, Project> => {

  return {
    "project1": {
      "name": "Gabriel Portifolio",
      "url": "https://github.com/Amadeusvh/portfolio",
      "img": "img/portifolio.png",
      "about": "(Recursive don't you think?) This a personal project for bether overview of my work, saving time in general.",
      "techs": ["ReactJS", "Styled Components", "TypeScript"],
    },
    "project2": {
      "name": "WiredTodo FRONT",
      "url": "https://github.com/Amadeusvh/WiredTodo-BackEnd-CRUD",
      "img": "img/todo.png",
      "about": "The FrontEnd of a CRUD TodoList",
      "techs": ["ReactJS", "ReactBootstrap", "typeScript"],
    },
    "project3": {
      "name": "WiredTodo BACK",
      "url": "https://github.com/Amadeusvh/WiredTodo-FrontEnd-CRUD",
      "img": "img/todo.png",
      "about": "The BackEnd of a CRUD TodoList",
      "techs": ["NodeJS", "Express", "TypeORM", "TypeScript"],
    }
  }
}

export default projects; 
