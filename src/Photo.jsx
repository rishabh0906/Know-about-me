let Photo = (props) => {
  return (
    <figure
      onClick={(e) => {
        props.setZoom(props.content.Url);
      }}
      onMouseEnter={(e) => {
        e.currentTarget.children[1].style.display = "flex";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.children[1].style.display = "none";
      }}
    >
      <div className="image">
        <img src={props.content.Url} alt="logo" />
      </div>
      <div className="caption">
        <figcaption> {props.content.Caption} </figcaption>
      </div>
    </figure>
  );
};

export default Photo;
