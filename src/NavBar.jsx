import { Link } from "react-router-dom";
let NavBar = () => {
  return (
    <div className="NavBar">
      <p>
        <Link  to="/about">About</Link>
      </p>
      <p>
        <Link to="/projects">Projects</Link>
      </p>
      <p>
        <Link to="/gallery">Gallery</Link>
      </p>
      <p>
        <Link to="/upgradeMe">UpgradeMe</Link>
      </p>
    </div>
  );
};

export default NavBar;
