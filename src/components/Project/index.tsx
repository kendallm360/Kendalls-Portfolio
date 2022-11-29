import "../Project/styles.scss";

type TProject = {
  name: string;
  logo: string;
  type: string;
  key: number;
  topTechnologies: string;
};

const Project = ({ name, logo, type, topTechnologies, key }: TProject) => {
  const showInfo = () => {
    console.log("working");
    return (
      <>
        <h1>"Working"</h1>
      </>
    );
  };
  return (
    <section className="Projects">
      <img
        className="ProjectLogo"
        src={logo}
        alt="broken"
        onMouseOver={showInfo}
      />
      <div className="ProjectInfo">
        <h3>{name}</h3>
        <p className="ProjectType">{type} Website</p>
        <p className="TopTechnologies">{topTechnologies}</p>
        <button className="MoreInfoButton">More Info</button>
      </div>
    </section>
  );
};
export default Project;
