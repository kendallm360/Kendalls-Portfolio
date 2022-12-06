import "./styles.scss";
import fairPicture from "../../images/kendall_fair.png";
import ScrollAnimation from "react-animate-on-scroll";

const MyInfo = () => {
  return (
    <ScrollAnimation
      initiallyVisible={true}
      animateOnce
      animateIn="fadeInUp"
      duration={1.5}
    >
      <section className="MyInfo">
        <h2 className="Intro">
          Hi, my name is <span className="Name">Kendall</span>
        </h2>
        <h3 className="Summary">
          I am a Navy veteran turned front end software engineer with 10 years
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
    </ScrollAnimation>
  );
};

export default MyInfo;
