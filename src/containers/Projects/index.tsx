import Project from "../../components/Project";
import { latestProjects } from "../../utils/MockData";
const Projects = () => {
  const latestProjectsMapped = latestProjects.map((project) => {
    return (
      <Project
        key={project.id}
        name={project.name}
        logo={project.logo}
        type={project.type}
        topTechnologies={project.topTechnologies}
      />
    );
  });

  return (
    <>
      <h2 className="Title">Latest Projects</h2>
      {latestProjectsMapped}
      <h4>All projects</h4>
    </>
  );
};
export default Projects;
