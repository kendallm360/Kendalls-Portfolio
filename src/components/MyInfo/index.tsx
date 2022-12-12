import "./styles.scss";
import fairPicture from "../../images/kendall_fair.png";
import ScrollAnimation from "react-animate-on-scroll";
const sitch = require("../../sounds/kimPossible.mp3");

const MyInfo = () => {
  const handleClick = () => {
    const kimRingtone = new Audio(sitch);
    kimRingtone.play();
  };

  return (
    <ScrollAnimation
      initiallyVisible={true}
      animateOnce
      animateIn="fadeInUp"
      duration={1.5}
    >
      <section className="MyInfo">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="Intro">
            Hi, my name is <span className="Name">Kendall</span>
          </h1>
          <h3 className="Summary">
            I am a Navy veteran turned front end software engineer with over a{" "}
            decade of experience working on
            <span className="KeyWord"> time-sensitive projects</span>.
          </h3>
        </div>
        <div className="Graphic" onClick={handleClick}>
          <img
            className="KendallImage"
            src={fairPicture}
            alt="Kendall McGree (creator)"
          />
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default MyInfo;
