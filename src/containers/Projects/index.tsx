import Project from "../../components/Project";
import { latestProjects } from "../../utils/MockData";
const Projects = () => {
  const latestProjectsMapped = latestProjects.map((project) => {
    return (
      <Project
        key={project.id}
        name={project.name}
        logo={project.logo}
        description={project.description}
        topTechnologies={project.topTechnologies}
        deployedLink={project.deployedLink}
        repoLink={project.repoLink}
      />
    );
  });

  return (
    <>
      <h2 className="SectionHeader" style={{ marginBottom: "3%" }}>
        <span className="SectionNumbers">03.</span> Latest Projects
      </h2>
      {latestProjectsMapped}
      <a
        className="KeyWord"
        href="https://github.com/kendallm360?tab=repositories"
        style={{ color: "black" }}
      >
        All Projects
      </a>
    </>
  );
};
export default Projects;
