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
    <section>
      <h1>Experience Section</h1>
      <h3>
        {name}, {logo}, {header}, {subHeader}, {resumeBullets},{" "}
        {certificationsAchieved}
      </h3>
    </section>
  );
};
export default Experience;
