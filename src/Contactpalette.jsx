let Contact_Palette = () => {
  return (
    <div className="Contact-Pallete">
      <a
        href="https://www.linkedin.com/in/rishabh-jain-69a1181a8/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="linkedin (1).png"
          alt="linkedin"
          onMouseEnter={(e) => {
            e.currentTarget.src = "linkedin.png";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = "linkedin (1).png";
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
          src="github (1).png"
          onMouseEnter={(e) => {
            e.currentTarget.src = "github.png";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = "github (1).png";
          }}
        />
      </a>
    </div>
  );
};

export default Contact_Palette;
