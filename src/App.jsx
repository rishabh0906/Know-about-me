import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact_Palette from "./Contactpalette.jsx";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import Projects from "./Projects";
import UpgradeMe from "./UpgradeMe";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Contact_Palette />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/upgradeMe">
            <UpgradeMe />
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
