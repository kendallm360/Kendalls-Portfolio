import logo from "../../images/letter-k.png";
import cv from "../../images/cv.png";
import "./styles.scss";

interface IProps {
  handleNav: () => void;
  handleAboutMe: () => void;
  handleSkills: () => void;
  handleProject: () => void;
  handleContact: () => void;
}

const NavBar = ({
  handleNav,
  handleAboutMe,
  handleSkills,
  handleProject,
  handleContact,
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
      <button className="Navigation" onClick={handleSkills}>
        Skills
      </button>
      <button className="Navigation" onClick={handleProject}>
        Projects
      </button>
      <button className="Navigation" onClick={handleContact}>
        Contact
      </button>
      <a href="https://docs.google.com/document/d/10p8vbhVEhb1rwRIqL2OnzSgUt4gnPb0M0MXDGgRPf2M/edit?usp=sharing">
        <img className="Resume Logo" src={cv} alt="Resume Icon" />
      </a>
    </div>
  );
};

export default NavBar;
