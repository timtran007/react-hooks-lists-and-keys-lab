import React from "react";
import { nanoid } from 'nanoid'

function ProjectItem({ name, about, technologies }) {
  let techStacks = technologies.map(techStack =>{
    return(
      <span key={nanoid()} >{techStack}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techStacks}
      </div>
    </div>
  );
}

export default ProjectItem;
