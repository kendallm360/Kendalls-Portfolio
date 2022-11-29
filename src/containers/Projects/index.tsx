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
      <h2 className="Title" style={{ marginBottom: "3%" }}>
        Latest Projects
      </h2>
      {latestProjectsMapped}
      <a href="https://github.com/kendallm360?tab=repositories">All Projects</a>
    </>
  );
};
export default Projects;
