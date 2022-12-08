import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Project from "../../components/Project";
import { latestProjects } from "../../utils/MockData";
import "../Projects/styles.scss";
const Projects = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

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
    <section className="ProjectWrapper">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">03.</span> What Has He built?
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={800}>
        <div className="ViewSwitch">
          <h2 className="Professional">Professional</h2>
          <label className="Switch">
            <input type="Checkbox" onChange={handleChange} />
            <span className="Slider Round"></span>
          </label>
          <h2 className="Personality">Personality</h2>
        </div>
      </ScrollAnimation>
      {checked ? (
        <h1>test</h1>
      ) : (
        <div className="Projects">{latestProjectsMapped}</div>
      )}
      <a
        className="AppsLink"
        href="https://github.com/kendallm360?tab=repositories"
        // style={{ color: "white", marginLeft: "3.5vw" }}
      >
        All Projects
      </a>
    </section>
  );
};
export default Projects;
