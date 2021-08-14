
import Logo from "./Logo";

let Projects = () => {
  return (
    <>
    <Logo/>
    <div className="Main-Content project">
      <h1 className="heading">Let me show you my work</h1>
      <div>
        <a
          href="https://github.com/rishabh0906/excel-clone.git"
          target="_blank"
          rel="noopener noreferrer"
          >
          <h3>Excel Clone</h3>
        </a>
        <p>
          This project is based on html , css , Javascript , indexdb . I
          implemented functions of ms excel or google sheets . Logic behind the
          sheets are implemented using graph theory like indegree and outdegree
          and algorithms like cycle detection to remove circular references.Indexdb is used to store the data .
        </p>
      </div>
      
    </div>
          </>
  );
};

export default Projects;
