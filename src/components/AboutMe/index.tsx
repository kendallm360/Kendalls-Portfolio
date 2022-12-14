import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../AboutMe/styles.scss";
import Personality from "../Personality";
const AboutMe = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <section className="AboutMe">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">01.</span> About Me
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
        <div className="ViewSwitch">
          <h2 className="Professional">Professional</h2>
          <label htmlFor="Switch About" className="Switch">
            <input id="Switch About" type="Checkbox" onChange={handleChange} />
            <span className="Slider Round"></span>
          </label>
          <h2 className="Personality">Personality</h2>
        </div>
      </ScrollAnimation>
      {checked ? (
        <Personality />
      ) : (
        <div>
          <ul className="Qualities" style={{ listStyleType: "square" }}>
            {" "}
            <span className="SubHeader">Notable Qualities:</span>
            <li className="Quality">
              <span className="Keyword">Self-Starter</span> with a strong work
              ethic
            </li>
            <li className="Quality">
              Ability to <span className="Keyword">boost morale</span> and
              confidence in large and small group settings
            </li>
            <li className="Quality">
              Appreciation for consistent feedback that helps support my{" "}
              <span className="Keyword">growth mindset</span>
            </li>
            <li className="Quality">
              Proven ability to develop and maintain{" "}
              <span className="Keyword">professional</span> relationships
            </li>
          </ul>
          <details>
            <summary className="Overview">
              Although, I am transitioning into software engineering I come with
              a{" "}
              <span className="Keyword">multitude of transferable skills</span>{" "}
              from previous industries.
            </summary>
            <p className="Overview">
              During my career at the NSA being extremely{" "}
              <span className="Keyword">organized and meticulous </span>
              was imperative in order to be successful. All of my achievements
              as an Intelligence Analyst stemmed from these qualities and a
              genuine <span className="Keyword">love for learning</span>.
            </p>
            <p className="Overview">
              My time in the Navy as an Arabic Linguist highlighted the
              importance of being a{" "}
              <span className="Keyword">team player </span>and having strong
              social skills. Consistently being{" "}
              <span className="Keyword">flexible, positive</span>, and willing
              to adapt to changes made coworkers/superiors love working with me.
              I am{" "}
              <span className="Keyword">
                both easy to coach and a natural leader.
              </span>{" "}
            </p>
          </details>
        </div>
      )}
    </section>
  );
};
export default AboutMe;
