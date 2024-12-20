import { mySkills } from "../../utils/MockData";
import "../Skills/styles.scss";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import Talents from "../Talents";

type TSkill = {
  id: number;
  name: string;
  logo: string;
  alt: string;
};

const Skills = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const skills = mySkills.map((skill: TSkill) => {
    return (
      <div key={skill.id} className="Skill">
        <img
          key={skill.id}
          className="SkillLogo"
          src={skill.logo}
          alt={`${skill.name}'s ${skill.alt}`}
        />
        <h3 className="SkillTitle"> {skill.name}</h3>
      </div>
    );
  });

  return (
    <section className="Skills">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">04.</span> My Skills
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
        <div className="ViewSwitch">
          <h2 className="Professional">Professional</h2>
          <label htmlFor="Switch Skills" className="Switch">
            <input id="Switch Skills" type="Checkbox" onChange={handleChange} />
            <span className="Slider Round"></span>
          </label>
          <h2 className="Personality">Personality</h2>
        </div>
      </ScrollAnimation>
      {checked ? (
        <Talents />
      ) : (
        <>
          <div className="MySkills">{skills}</div>
          <a
            className="AppsLink"
            href="https://github.com/kendallm360"
            target="_blank"
          >
            Full List
          </a>
        </>
      )}
    </section>
  );
};
export default Skills;
