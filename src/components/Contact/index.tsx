import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Buddies from "../Buddies";
import "../Contact/styles.scss";
// const goldenGirls = require("../../sounds/goldenGirls.mp3");

const Contact = () => {
  const [checked, setChecked] = useState(false);

  // const handleClick = () => {
  //   const friends = new Audio(goldenGirls);
  //   !checked && friends.play();
  // };

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
          <h2 className="Professional">Employers?</h2>
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
            Are you looking to hire new talent? Well lucky for you I am still
            available for employment. If you ARE NOT hiring visit my Youtube
            below.
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
