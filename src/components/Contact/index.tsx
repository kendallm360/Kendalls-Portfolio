import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Buddies from "../Buddies";
import "../Contact/styles.scss";

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
        <div className="ViewSwitch">
          <h2 className="Professional">Employers?</h2>
          <label className="Switch">
            <input type="Checkbox" onChange={handleChange} />
            <span className="Slider Round"></span>
          </label>
          <h2 className="Personality">Buddies?</h2>
        </div>
      </ScrollAnimation>
      {checked ? (
        // <h1>test</h1>
        <Buddies />
      ) : (
        <>
          <h3 className="Beg">
            Hire Me<span className="Knees">...please</span>
          </h3>
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
