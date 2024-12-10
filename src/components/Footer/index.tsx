import githubIcon from "../../images/githubO.png";
import linkedinIcon from "../../images/linkedinO.png";
import cv from "../../images/cv.png";
import youtubeIcon from "../../images/youtubeO.png";
import upArrow from "../../images/arrow.png";
import "../Footer/styles.scss";
const Footer = ({ handleNav }: any) => {
  return (
    <footer className="Footer">
      <button className="ScrollToTop">
        <img
          className="UpArrow"
          src={upArrow}
          alt="Up arrow"
          onClick={handleNav}
        />
      </button>
      <h4 className="Credits">Designed & Built by Kendall McGree</h4>
      <div className="SocialLinks">
        <a href="https://github.com/kendallm360" target="_blank">
          <img className="FooterIcons" src={githubIcon} alt="Github Icon" />
        </a>

        <a
          href="https://docs.google.com/document/d/1c8lBtkg1IFbXX0_SOSWfMeyi4hEb2m8h5YR2WtNHm8Y/edit?usp=sharing"
          target="_blank"
        >
          <img className="FooterIcons" src={cv} alt="Resume Icon" />
        </a>
        <a
          title="I sincerely apologize about this 😂"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <img className="FooterIcons" src={youtubeIcon} alt="Youtube Icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
