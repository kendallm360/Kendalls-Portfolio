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
  console.log("resume bullets", resumeBullets);

  const resume = resumeBullets.map((bullet) => {
    return (
      <ul>
        <li>{bullet}</li>
      </ul>
    );
  });
  return (
    <section className="Experience">
      <img className="ExperienceLogo" src={logo} alt="broken" />
      <section className="ExperienceInfo">
        <div className="IntroRow">
          <p className="IntroHeader">{header}</p>
          <p className="IntroSubHeader">{subHeader}</p>
        </div>
        <div className="BodyRow">{resume}</div>
        <div className="FooterRow">
          <p>{certificationsAchieved}</p>
        </div>
      </section>
    </section>
  );
};
export default Experience;
