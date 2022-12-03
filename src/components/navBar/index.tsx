import logo from "../../images/k.png";
import "./styles.scss";
const NavBar = () => {
  return (
    <div className="NavBar">
      {/* materialUI speed dial */}
      <img className="Logo" src={logo} alt="Kendall's custom logo" />
      <button>Contact me</button>
    </div>
  );
};

export default NavBar;
