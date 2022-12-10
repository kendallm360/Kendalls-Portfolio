import { useEffect, useState, useRef } from "react";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Load from "../../components/Load";
import MyInfo from "../../components/MyInfo";
import NavBar from "../../components/NavBar";
import Skills from "../../components/Skills";
import Projects from "../Projects";
import "./_base.scss";

function App() {
  const navRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const projectRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //DRY up all the code below because this is super ugly
  const handleNav = () => {
    navRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutMe = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <div className="LoadingWrapper">
          <Load />
        </div>
      ) : (
        <section className="App">
          <div className="NavBarWrapper" ref={navRef}>
            <NavBar
              handleNav={handleNav}
              handleAboutMe={handleAboutMe}
              handleSkills={handleSkills}
              handleProject={handleProject}
              handleContact={handleContact}
            />
          </div>

          <div className="MyInfoWrapper">
            <MyInfo />
          </div>

          <div className="AboutMeWrapper" ref={aboutRef}>
            <AboutMe />
          </div>

          <div className="SkillsWrapper" ref={skillsRef}>
            <Skills />
          </div>

          <div className="ProjectsWrapper" ref={projectRef}>
            <Projects />
          </div>

          <div className="ContactWrapper" ref={contactRef}>
            <Contact />
          </div>

          <div className="FooterWrapper">
            <Footer handleNav={handleNav} />
          </div>
        </section>
      )}
    </>
  );
}

export default App;
