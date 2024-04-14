import { NavBar } from "../components/navBar";
import { About } from "./About";
//import { Contact } from "./contact";
// import { Experience } from "./experience";
// import { Projects } from "./Projects";

export const Home = () => {
  return (
    <div className="home">
      <p></p>
      <NavBar />
      <About />
      {/* <Contact /> */}
      {/* <Experience />
      <Projects /> */}
    </div>
  );
};
