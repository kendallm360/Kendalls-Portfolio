import "../Experience/styles.scss";

type TExperience = {
  name: string;
  logo: string;
  header: string;
  subHeader: string;
  resumeBullets: string[];
  certificationsAchieved: string[];
};

const Experience = ({
  name,
  logo,
  header,
  subHeader,
  resumeBullets,
  certificationsAchieved,
}: TExperience) => {
  return (
    <section className="Experience">
      <img className="ExperienceLogo" src={logo} alt="broken" />
      <div className="ExperienceInfo">testing</div>
    </section>
  );
};
export default Experience;
