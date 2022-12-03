import "../Project/styles.scss";
import repo from "../../images/githubIcon.png";
import website from "../../images/websiteIcon.png";
import ScrollAnimation from "react-animate-on-scroll";

type TProject = {
  name: string;
  logo: string;
  description: string;
  topTechnologies: string[];
  repoLink: string;
  deployedLink: string;
};

const Project = ({
  name,
  logo,
  description,
  topTechnologies,
  repoLink,
  deployedLink,
}: TProject) => {
  return (
    <ScrollAnimation animateOnce animateIn="fadeInLeft">
      <section className="Projects">
        <img className="ProjectLogo" src={logo} alt="broken" />
        <div className="ProjectInfo">
          <h3 className="ProjectTitle">{name}</h3>
          <p className="ProjectDescription">{description} Website</p>
          <p className="TopTechnologies">
            {topTechnologies[0]}
            <span className="Divider"> | </span>
            {topTechnologies[1]}
          </p>
          <div className="ProjectLinks">
            <a className="ProjectLink" href={repoLink}>
              <img className="ProjectLinkIcon" src={repo} alt="Github logo" />
            </a>
            <a className="ProjectLink" href={deployedLink}>
              <img
                className="ProjectLinkIcon"
                src={website}
                alt="Website logo"
              />
            </a>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};
export default Project;
