import "../AboutMe/styles.scss";
import { mySkills } from "../../utils/MockData";
import fairPicture from "../../images/orangefair.png";
import MySkills from "../MySkills";
const AboutMe = () => {

  const skills = mySkills.map((skill) => {
    return <MySkills key={skill.id} name={skill.name} logo={skill.logo} alt={skill.alt}/>
  })

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
      {skills}
    </section>
  );
};

export default AboutMe;
