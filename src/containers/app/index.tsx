import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="LoadingWrapper">
          <Load />
        </div>
      ) : (
        <div className="App">
          <NavBar />
          <MyInfo />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
