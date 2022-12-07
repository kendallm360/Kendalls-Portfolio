import githubIcon from "../../images/githubO.png";
import linkedinIcon from "../../images/linkedinO.png";
import youtubeIcon from "../../images/youtubeO.png";
import "../Footer/styles.scss";
const Footer = () => {
  return (
    <footer className="Footer">
      <h4 className="Credits">Designed & Built by Kendall McGree</h4>
      <div className="SocialLinks">
        <a href="https://github.com/kendallm360">
          <img className="FooterIcons" src={githubIcon} alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/kendall-mcgree/">
          <img className="FooterIcons" src={linkedinIcon} alt="Linkedin Icon" />
        </a>
        <a
          title="I sincerely apologize about this 😂"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          <img className="FooterIcons" src={youtubeIcon} alt="Youtube Icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
