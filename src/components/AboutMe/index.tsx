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
        /* The code below belongs here and was used prior to 29November2024
      (
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
        The code above belongs here and was used prior to 29November2024
        */

        /* Notable Qualities to potentially add
        Motivated problem-solver focused on impact.
        Adaptable and eager to take on new challenges.
        
        */
        <div>
          <ul className="Qualities" style={{ listStyleType: "square" }}>
            {" "}
            <span className="SubHeader">Notable Qualities:</span>
            <li className="Quality">
              Motivated <span className="Keyword">problem-solver</span> focused
              on impact.
            </li>
            <li className="Quality">
              <span className="Keyword">Self-starter</span> with a strong work
              ethic.
            </li>
            <li className="Quality">
              Appreciation for constructive feedback to nurture my{" "}
              <span className="Keyword">growth mindset</span>.
            </li>
            <li className="Quality">
              <span className="Keyword">Adaptable</span> and eager to take on
              new challenges.
            </li>
          </ul>
          <details>
            <summary className="Overview">
              My tenure as an Intelligence Analyst equipped me with a
              <span className="Keyword"> wealth of transferable skills</span>{" "}
              that have translated seamlessly into software engineering.
            </summary>
            <p className="Overview">
              This experience has shaped my ability to approach complex problems
              analytically,{" "}
              <span className="Keyword">work effectively under pressure</span>,
              and collaborate across teams. My{" "}
              <span className="Keyword">
                commitment to continuous learning and improvement
              </span>{" "}
              is reflected in my proactive approach to taking on
              responsibilities beyond my initial role. I am excited to continue
              growing as a software developer, leveraging my technical skills
              and leadership potential to deliver impactful results.
            </p>
          </details>
        </div>
      )}
    </section>
  );
};
export default AboutMe;
