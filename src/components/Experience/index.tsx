import "../Experience/styles.scss";

type TExperience = {
  name: string;
  companySite: string;
  logo: string;
  header: string;
  subHeader: string;
  resumeBullets: string[];
  certificationsAchieved: string[];
};

const Experience = ({
  name,
  companySite,
  logo,
  header,
  subHeader,
  resumeBullets,
  certificationsAchieved,
}: TExperience) => {
  const resume = resumeBullets.map((bullet) => {
    return (
      <ul>
        <li className="ResumeBullets">{bullet}</li>
      </ul>
    );
  });

  const goToSite = () => {
    window.open(`${companySite}`, "_blank");
  };

  return (
    <section className="Experience">
      <img className="ExperienceLogo" src={logo} alt="broken" />
      <section className="ExperienceInfo">
        <div className="IntroRow">
          <p className="IntroHeader">
            <span className="CompanyLink" onClick={goToSite}>
              {name}
            </span>
            , {header}
          </p>
          <p className="IntroSubHeader">{subHeader}</p>
        </div>
        <div className="BodyRow">{resume}</div>
      </section>
    </section>
  );
};
export default Experience;
