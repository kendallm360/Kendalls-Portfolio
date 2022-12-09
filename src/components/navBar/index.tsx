import logo from "../../images/letter-k.png";
import "./styles.scss";
const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="Logo" src={logo} alt="Kendall's custom logo" />
      <h2 className="Navigation">About</h2>
      <h2 className="Navigation">Skills</h2>
      <h2 className="Navigation">Projects</h2>
      <h2 className="Navigation">Contact</h2>
    </div>
  );
};

export default NavBar;
