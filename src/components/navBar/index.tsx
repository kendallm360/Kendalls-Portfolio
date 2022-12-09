import logo from "../../images/letter-k.png";
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
      <img
        className="Logo"
        src={logo}
        alt="Kendall's custom logo"
        onClick={handleNav}
      />
      <h2 className="Navigation" onClick={handleAboutMe}>
        About
      </h2>
      <h2 className="Navigation" onClick={handleSkills}>
        Skills
      </h2>
      <h2 className="Navigation" onClick={handleProject}>
        Projects
      </h2>
      <h2 className="Navigation" onClick={handleContact}>
        Contact
      </h2>
    </div>
  );
};

export default NavBar;
