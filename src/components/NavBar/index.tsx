import logo from "../../images/letter-k.png";
import cv from "../../images/cv.png";
import "./styles.scss";

interface IProps {
  handleNav: () => void;
  handleAboutMe: () => void;
  handleSkills: () => void;
  handleProject: () => void;
  //handleContact: () => void;
  handleExperiences: () => void;
}

const NavBar = ({
  handleNav,
  handleAboutMe,
  handleSkills,
  handleProject,
  // handleContact,
  handleExperiences,
}: IProps) => {
  return (
    <div className="NavBar">
      <a>
        <img
          className="Logo"
          src={logo}
          alt="Kendall's custom logo"
          onClick={handleNav}
        />
      </a>
      <button className="Navigation" onClick={handleAboutMe}>
        About
      </button>
      <button className="Navigation" onClick={handleExperiences}>
        Experiences
      </button>
      <button className="Navigation" onClick={handleProject}>
        Projects
      </button>
      <button className="Navigation" onClick={handleSkills}>
        Skills
      </button>
      <a
        href="https://docs.google.com/document/d/1c8lBtkg1IFbXX0_SOSWfMeyi4hEb2m8h5YR2WtNHm8Y/edit?usp=sharing"
        target="_blank"
      >
        <img className="Resume Logo" src={cv} alt="Resume Icon" />
      </a>
    </div>
  );
};

export default NavBar;
