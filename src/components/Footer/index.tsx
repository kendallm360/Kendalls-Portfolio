import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedin.png";
import youtubeIcon from "../../images/youtube.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="SocialLinks">
        <img className="FooterIcons" src={githubIcon} alt="Github Icon" />
        <img className="FooterIcons" src={linkedinIcon} alt="Linkedin Icon" />
        <img className="FooterIcons" src={youtubeIcon} alt="Youtube Icon" />
      </div>
      <h4>Designed & Built by Kendall McGree(He/Him)</h4>
    </footer>
  );
};
export default Footer;
