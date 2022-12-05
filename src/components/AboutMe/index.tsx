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
          <span className="Keyword">Notable Qualities:</span>
          <li className="Quality">
            <span className="Keyword">Self-Starter</span> with a strong work
            ethic
          </li>
          <li className="Quality">
            Ability to boost morale and confidence in large and small group
            settings
          </li>
          <li className="Quality">
            Appreciation for consistent feedback that helps support my{" "}
            <span className="Keyword">growth mindset</span>
          </li>
          <li className="Quality">
            Proven ability to develop and maintain professional relationships
          </li>
        </ul>
        <p className="Overview">
          I never aim to be the smartest person in a room but I always want to
          be considered one of the hardest working. Although, I am transitioning
          into this industry I come with a multitude of transferable skills from
          previous industries.
        </p>
        <p className="Overview">
          During my career at the NSA being extremely organized and meticulous
          was imperative in order to be successful. All of my achievements as an
          Intelligence Analyst stemmed from these qualities and a genuine love
          for learning.{" "}
        </p>
        <p className="Overview">
          My time in the Navy as an Arabic Linguist highlighted the importance
          of being a good team player and having strong social skills.
          Consistently being flexible, positive, and willing to adapt to changes
          made coworkers/superiors love working with me. I am both easy to coach
          and a natural leader so I feel like I am a good culture fit for many
          companies.
        </p>
      </ScrollAnimation>
    </section>
  );
};
export default AboutMe;
