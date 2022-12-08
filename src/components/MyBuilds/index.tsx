import { myBuilds } from "../../utils/MockData";

const MyBuilds = () => {
  return (
    <section className="Build">
      <div className="BuildInfo">
        <img
          className="BuildImage"
          src={myBuilds[0].image}
          alt={myBuilds[0].imageAlt}
        />
        <p className="BuildDescription">{myBuilds[0].description}</p>
      </div>
      <div className="BuildInfo">
        <img
          className="BuildImage"
          src={myBuilds[1].image}
          alt={myBuilds[1].imageAlt}
        />
        <p className="BuildDescription">{myBuilds[1].description}</p>
      </div>
    </section>
  );
};

export default MyBuilds;
