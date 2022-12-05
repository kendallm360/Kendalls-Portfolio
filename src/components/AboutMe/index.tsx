import ScrollAnimation from "react-animate-on-scroll";
import "../AboutMe/styles.scss";
const AboutMe = () => {
  return (
    <section className="AboutMe">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">01.</span> About Me
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInLeft">
        <ul className="Qualities">
          {" "}
          Notable Qualities:
          <li className="Quality">Self-Starter with a strong work ethic</li>
          <li className="Quality">
            Ability to boost morale and confidence in large and small group
            settings
          </li>
          <li className="Quality">
            Appreciation for consistent feedback that helps support my growth
            mindset
          </li>
          <li className="Quality">
            Proven ability to develop and maintain professional relationships
          </li>
        </ul>
        <h3 className="Overview">
          I never aim to be the smartest person in a room but I always want to
          be among the hardest workers. I am a great team player but culturally
          I fit best in fast pace environments. Although I am transitioning into
          this industry I believe I am already equipped with a lot of qualities
          to be successful. My experience at the NSA helped me become extremely
          organized, collaborative, and a natural problem solver.
        </h3>
      </ScrollAnimation>
    </section>
  );
};
export default AboutMe;
