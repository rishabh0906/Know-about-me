import { useState, useEffect } from "react";
import Animation from "./Animation";
let Home = () => {
  let [isHidden, setHidden] = useState(true);

  let NameArr = "I'm Rishabh Jain.".split("");

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 2000);
  }, []);

  return (
    <div className="Main-Content-2">
      <div className="Home-Animation">
        <svg height="130" width="500">
          {NameArr.map((item, index) => {
            return <Animation obj={{ item, index }}></Animation>;
          })}
        </svg>
        <p className={isHidden ? "" : "show-p"}>
          You can find me around the web !!
        </p>
      </div>
    </div>
  );
};

export default Home;
