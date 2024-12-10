import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Experience from "../../components/Experience";
import { latestExperiences } from "../../utils/MockData";
import PersonalExperience from "../../components/PersonalExperience";
import "../Experiences/styles.scss";

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
        companySite={experience.companySite}
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
          <span className="SectionNumbers">02.</span> My Experiences
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
        <div className="ViewSwitch">
          <h2 className="Professional">Professional</h2>
          <label htmlFor="Switch Experience" className="Switch">
            <input
              id="Switch Experience"
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
          <a
            className="AppsLink"
            href="https://docs.google.com/document/d/1c8lBtkg1IFbXX0_SOSWfMeyi4hEb2m8h5YR2WtNHm8Y/edit?tab=t.0"
            target="_blank"
          >
            Full Resume
          </a>
        </>
      )}
    </section>
  );
};
export default Experiences;
