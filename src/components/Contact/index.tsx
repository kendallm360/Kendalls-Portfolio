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
          <span className="SectionNumbers">05.</span> My Availability
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
          <h3 className="Beg">Looking to Hire?</h3>
          <p className="ActionItem">
            I’m currently thriving in my role at Fiserv and am proud of the
            contributions I’ve made. While I’m grateful for my position, I’m
            open to exploring new opportunities that may better align with my
            long-term growth and career goals. Although I’m no longer on
            LinkedIn, I’m still easily reachable—feel free to get in touch by
            clicking below.
          </p>
          <div className="ButtonWrapper">
            <a href="mailto:mcgreekendall@gmail.com" target="_blank">
              <button className="EmailMe">Hire</button>
            </a>
          </div>
        </>
      )}
    </section>
  );
};
export default Contact;
