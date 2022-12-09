import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
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
      <ScrollAnimation animateOnce animateIn="fadeInUp" delay={800}>
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
        <h1>test</h1>
      ) : (
        <>
          <h3 className="Beg">Get In Touch</h3>
          <p className="ActionItem">
            Are you looking to hire new talent? Well lucky for you I am still
            available for employment. Feel free to contact me below about
            opportunities. I also welcome anyone who would like to build with me
            to reach out as well 🧡
          </p>
          <div className="ButtonWrapper">
            <a href="mailto:mcgreekendall@gmail.com">
              <button className="EmailMe">Contact Me</button>
            </a>
          </div>
        </>
      )}
    </section>
  );
};
export default Contact;
