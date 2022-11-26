import mePatio from "../../images/kendall_patio.png";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="graphic">
        <img
          className="KendallImage"
          src={mePatio}
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
    </div>
  );
};

export default AboutMe;
