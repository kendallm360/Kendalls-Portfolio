import "../AboutMe/styles.scss";
import fairPicture from "../../images/orangefair.png";
const AboutMe = () => {
  return (
    <section className="AboutMe">
      <div className="Graphic">
        <img
          className="KendallImage"
          src={fairPicture}
          alt="Kendall McGree (creator)"
        />
      </div>
      <h2 className="Title">
        My name is <span className="Name">Kendall</span>
      </h2>
      <h3 className="Summary">
        I am a Navy veteran turned front end software engineer. I have 10 years
        of experience working with diverse teams on time-sensitive projects.
      </h3>
    </section>
  );
};

export default AboutMe;
