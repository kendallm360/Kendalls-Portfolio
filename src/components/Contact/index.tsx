import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Buddies from "../Buddies";
import "../Contact/styles.scss";
import githubIcon from "../../images/githubO.png";

const Contact = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <section className="Contact">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">04.</span> What's Next?
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
        <div
          className="ViewSwitch"
          // onClick={handleClick}
        >
          <h2 className="Professional">Employers</h2>
          <label htmlFor="Switch Contact" className="Switch">
            <input
              id="Switch Contact"
              type="Checkbox"
              onChange={handleChange}
            />
            <span className="Slider Round"></span>
          </label>
          <h2 className="Personality">Buddies?</h2>
        </div>
      </ScrollAnimation>
      {checked ? (
        <Buddies />
      ) : (
        <>
          <h3 className="Beg">Hire Me</h3>
          <p className="ActionItem">
            Are you searching for a dedicated and team-oriented software
            developer who thrives on challenges? Look no further. My passion for
            learning extends beyond the front-end, making me a well-rounded
            addition to the team.
          </p>
          <div className="ButtonWrapper">
            <a href="mailto:mcgreekendall@gmail.com">
              <button className="EmailMe">Hire</button>
            </a>
          </div>
        </>
      )}
    </section>
  );
};
export default Contact;
