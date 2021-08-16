import Logo from "./Logo";

let Projects = () => {
  return (
    <>
      <Logo />
      <div className="Main-Content project slide-left">
        <h1 className="heading">Let me show you my work</h1>
        <div>
          <a href="https://github.com/rishabh0906/Reel-or-Real.git" target="_blank" rel="noopener noreferrer">
            <h3>Real-or-Reel</h3>
          </a>
          <p>
            This project is based on React and firebase in which i try to make
            instagram reels clone in which person can watch reels of different
            users and also able to upload reels as well.A user can give like or
            comment to another users.Firebase is used to store all posts and
            comments of the users and also provide authentication functionality.
          </p>
          <a
            href="https://rishabh0906.github.io/excel-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Excel Clone</h3>
          </a>
          <p>
            This project is based on html , css , Javascript , indexdb . I
            implemented functions of ms excel or google sheets . Logic behind
            the sheets are implemented using graph theory like indegree and
            outdegree and algorithms like cycle detection to remove circular
            references.Indexdb is used to store the data .
          </p>
          <a href=" https://rishabh0906.github.io/Camera-App/" target="_blank" rel="noopener noreferrer">
            <h3>Camera App</h3>
          </a>
          <p>
            This project is based on html , css , Javascript , indexdb. In this
            app i implemented camera and video recorder using access of media
            devices and also implement filters. Indexdb is used to store photos.
          </p>

          <a href="https://rishabh0906.github.io/Jira--ticket-Clone/" target="_blank" rel="noopener noreferrer">
            <h3>Jira--ticket-clone</h3>
          </a>
          <p>
            This project is based on html , css , Javascript , localstorage.
            This is a todo app whixh keep the track of tasks in the form of
            tickets and colors code assigned to them . You can prioritze the
            task on basis of color (black- lowest, pink- second lowest , blue-
            highest ,green- second highest).
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
