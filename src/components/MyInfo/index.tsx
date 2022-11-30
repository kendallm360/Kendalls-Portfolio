import "./styles.scss";
import fairPicture from "../../images/kendall_fair.png";

const MyInfo = () => {
  return (
    <section className="MyInfo">
      <h2 className="Intro">
        Hi, my name is <span className="Name">Kendall</span>
      </h2>
      <h3 className="Summary">
        I am a Navy veteran turned front end software engineer. I have 10 years
        of experience working with diverse teams on{" "}
        <span className="KeyWord">time-sensitive projects</span>.
      </h3>
      <div className="Graphic">
        <img
          className="KendallImage"
          src={fairPicture}
          alt="Kendall McGree (creator)"
        />
      </div>
    </section>
  );
};

export default MyInfo;
