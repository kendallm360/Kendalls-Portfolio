import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// Replace with my personal/professional experiences that are not software
//import MyBuilds from "../../components/MyBuilds";
import Experience from "../../components/Experience";
import { latestExperiences } from "../../utils/MockData";

const Experiences = () => {
  /*
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
*/

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
    </section>
  );
};
export default Experiences;
