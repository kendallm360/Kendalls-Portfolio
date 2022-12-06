import ScrollAnimation from "react-animate-on-scroll";
import "../Contact/styles.scss";

const Contact = () => {
  return (
    <section className="Contact">
      <h2 className="SectionHeader">
        <span className="TextWrapper">
          <span className="SectionNumbers">04.</span> What's Next?
        </span>
      </h2>
      <ScrollAnimation animateOnce animateIn="zoomIn">
        <h3 className="Beg">Get In Touch</h3>
        <p className="ActionItem">
          Are you looking to hire new talent? Well lucky for you I am still
          available for employment. Feel free to contact me below about
          opportunities.
        </p>

        <p className="ActionItem">
          I am actively honing my skills in the meantime so I am also available
          for collaboration. Let's build together, first coffee is on me.
        </p>
        <div className="ButtonWrapper">
          <a href="mailto:mcgreekendall@gmail.com">
            <button className="EmailMe">Contact Me</button>
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
};
export default Contact;
