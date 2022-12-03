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
          If you have made it this far I would like to think you are impressed.
          If thats not the case hopefully you at least see my potential..... if
          all else fails maybe you just have a big heart and want to give me a
          chance. Either way I am available for employment so feel free to reach
          out to me here.
        </p>
        <div className="ButtonWrapper">
          <a href="mailto:mcgreekendall@gmail.com">
            <button className="EmailMe">Say Hello</button>
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
};
export default Contact;
