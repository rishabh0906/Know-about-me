import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import "./App.css";
import ContactPalette from "./Contactpalette.jsx";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Resume from "./Resume";
import Home from "./Home";

function App() {

  console.log("hi !!");
  return (
    <>
      <Router>
        <NavBar />
        <ContactPalette />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
