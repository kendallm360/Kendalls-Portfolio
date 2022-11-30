import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import MyInfo from "../../components/MyInfo";
import NavBar from "../../components/NavBar";
import Skills from "../../components/Skills";
import Projects from "../Projects";
import "./_base.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MyInfo />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
