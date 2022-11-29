import AboutMe from "../../components/MyInfo";
import NavBar from "../../components/NavBar";
import Projects from "../Projects";
import "./_base.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
