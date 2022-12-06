import { mySkills } from "../../utils/MockData";
import "../Skills/styles.scss";
import ScrollAnimation from "react-animate-on-scroll";

type TSkill = {
  id: number;
  name: string;
  logo: string;
  alt: string;
};

const Skills = () => {
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
          <span className="SectionNumbers">02.</span> What Does He Know?
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1.5}>
        <div className="MySkills">{skills}</div>
      </ScrollAnimation>
    </section>
  );
};
export default Skills;
