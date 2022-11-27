type TSkill = {
  name: string;
  logo: string;
  alt: string;
};

const MySkills = ({ name, logo, alt }: TSkill): JSX.Element => {
  return (
    <>
      <img className="SkillLogo" src={logo} alt={`${name}'s ${alt}`} />
    </>
  );
};
export default MySkills;
