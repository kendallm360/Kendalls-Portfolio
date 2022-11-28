import smartTechLogo from "../../images/smartTechLogo.jpg";

const Project = () => {
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
        src={smartTechLogo}
        alt="broken"
        onMouseOver={showInfo}
      />
      <div className="ProjectInfo">
        <h3>Smart Tech</h3>
        <h4>React | TypeScript</h4>
        <button>More Info</button>
      </div>
    </section>
  );
};
export default Project;
