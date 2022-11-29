import { mySkills } from "../../utils/MockData";

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
      <h2>
        <span className="SectionHeader">02.</span> Skills & Tools
      </h2>
      <div className="MySkills">{skills}</div>
    </section>
  );
};
export default Skills;
