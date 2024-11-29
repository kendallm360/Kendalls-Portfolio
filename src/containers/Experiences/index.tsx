import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// Replace with my personal/professional experiences that are not software
//import MyBuilds from "../../components/MyBuilds";
import Experience from "../../components/Experience";
import { latestExperiences } from "../../utils/MockData";
import PersonalExperience from "../../components/PersonalExperience";

const Experiences = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const latestExperiencesMapped = latestExperiences.map((experience) => {
    return (
      <Experience
        key={experience.id}
        name={experience.name}
        logo={experience.logo}
        header={experience.header}
        subHeader={experience.subHeader}
        resumeBullets={experience.resumeBullets}
        certificationsAchieved={experience.certificationsAchieved}
      />
    );
  });

  return (
    <section className="ExperienceWrapper">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">02.</span> Where I've Worked?
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
        <div className="ViewSwitch">
          <h2 className="Professional">Professional</h2>
          <label htmlFor="Switch Project" className="Switch">
            <input
              id="Switch Project"
              type="Checkbox"
              onChange={handleChange}
            />
            <span className="Slider Round"></span>
          </label>
          <h2 className="Personality">Personality</h2>
        </div>
      </ScrollAnimation>
      {checked ? (
        <PersonalExperience />
      ) : (
        <>
          <div className="Experiences">{latestExperiencesMapped}</div>
          <a className="ResumeLink" href="??????">
            Full Resume
          </a>
        </>
      )}
    </section>
  );
};
export default Experiences;
