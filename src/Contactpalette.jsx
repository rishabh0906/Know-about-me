let Contact_Palette = () => {
  return (
    <div className="Contact-Pallete">
      <a
        href="https://www.linkedin.com/in/rishabh-jain-69a1181a8/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="linkedin-dark.png"
          alt="linkedin"
          onMouseEnter={(e) => {
            e.currentTarget.src = "linkedin.png";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = "linkedin-dark.png";
          }}
        />
      </a>
      <a href="mailto:rishabhj945@gmail.com" target="_blank" rel="noreferrer">
        <img
          alt="google"
          src="google.png"
          onMouseEnter={(e) => {
            e.currentTarget.src = "search.png";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = "google.png";
          }}
        />
      </a>
      <a href="https://github.com/rishabh0906" target="_blank" rel="noreferrer">
        <img
          alt="github"
          src="github-dark.png"
          onMouseEnter={(e) => {
            e.currentTarget.src = "github.png";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = "github-dark.png";
          }}
        />
      </a>
    </div>
  );
};

export default Contact_Palette;
