import ScrollAnimation from "react-animate-on-scroll";
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
    <section
      // className="Projects"
      style={{ marginBottom: "10vh" }}
    >
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">03.</span> What Has He built?
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        {latestProjectsMapped}
      </ScrollAnimation>
      <a
        className="KeyWord"
        href="https://github.com/kendallm360?tab=repositories"
        style={{ color: "white", marginLeft: "3.5vw" }}
      >
        All Projects
      </a>
    </section>
  );
};
export default Projects;
