import "./styles.scss";
// import { mySkills } from "../../utils/MockData";
import fairPicture from "../../images/orangefair.png";

// type TSkill = {
//   id: number;
//   name: string;
//   logo: string;
//   alt: string;
// };

const MyInfo = () => {
  // const skills = mySkills.map((skill: TSkill) => {
  //   return (
  //     <div key={skill.id} className="Skill">
  //       <img
  //         key={skill.id}
  //         className="SkillLogo"
  //         src={skill.logo}
  //         alt={`${skill.name}'s ${skill.alt}`}
  //       />
  //       <h3 className="SkillTitle"> {skill.name}</h3>
  //     </div>
  //   );
  // });

  return (
    <section className="MyInfo">
      <h2 className="Title">
        Hi, my name is <span className="Name">Kendall</span>
      </h2>
      <h3 className="Summary">
        I am a Navy veteran turned front end software engineer. I have 10 years
        of experience working with diverse teams on time-sensitive projects.
      </h3>
      <div className="Graphic">
        <img
          className="KendallImage"
          src={fairPicture}
          alt="Kendall McGree (creator)"
        />
      </div>
      {/* <div className="MySkills">{skills}</div> */}
    </section>
  );
};

export default MyInfo;
