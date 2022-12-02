import { Route, Routes } from "react-router-dom";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import MyInfo from "../../components/MyInfo";
import NavBar from "../../components/NavBar";
import Skills from "../../components/Skills";
import Projects from "../Projects";
import "./_base.scss";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Routes>
        <Route
          path="/"
          element={
            <> */}
      <MyInfo />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      {/* </>
          }
        />

        <Route path="/home" element={<MyInfo />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
