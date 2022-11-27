import "../AboutMe/styles.scss";
import fairPicture from "../../images/orangefair.png";
const AboutMe = () => {
  return (
    <section className="AboutMe">
      <div className="graphic">
        <img
          className="KendallImage"
          src={fairPicture}
          alt="Kendall McGree (creator)"
        />
      </div>
      <h2 className="Title">
        My name is <span className="name">Kendall</span>
      </h2>
      <h3>
        I am a Navy veteran turned front end software engineer. I have 10 years
        of experience working with diverse teams on time-sensitive projects.
      </h3>
    </section>
  );
};

export default AboutMe;
