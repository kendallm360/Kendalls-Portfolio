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
              <span className="Keyword">Self-starter</span> with a strong work
              ethic
            </li>
            <li className="Quality">
              Effective at inspiring confidence and{" "}
              <span className="Keyword">boosting morale</span> in both large and
              small group settings.{" "}
            </li>
            <li className="Quality">
              Appreciation for constructive feedback to nurture my{" "}
              <span className="Keyword">growth mindset</span>
            </li>
            <li className="Quality">
              Proven ability to develop and maintain{" "}
              <span className="Keyword">professional</span> relationships
            </li>
          </ul>
          <details>
            <summary className="Overview">
              While transitioning into software engineering, I bring a{" "}
              <span className="Keyword">wealth of transferable skills</span>{" "}
              from my previous roles.
            </summary>
            <p className="Overview">
              My tenure at the National Security Agency (NSA) demanded{" "}
              <span className="Keyword">
                exceptional organization and meticulous attention to detail{" "}
              </span>
              qualities that underpinned my achievements as an Intelligence
              Analyst.
            </p>
            <p className="Overview">
              Additionally, my experience as an Arabic Linguist in the Navy
              emphasized the significance of{" "}
              <span className="Keyword">teamwork</span> and{" "}
              <span className="Keyword">strong interpersonal skills.</span> I
              consistently exhibited{" "}
              <span className="Keyword">
                flexibility, positivity, and adaptability
              </span>{" "}
              fostering positive relationships with colleagues and superiors. I
              am always open to coaching and possess{" "}
              <span className="Keyword">natural leadership qualities. </span>{" "}
            </p>
          </details>
        </div>
      )}
    </section>
  );
};
export default AboutMe;
