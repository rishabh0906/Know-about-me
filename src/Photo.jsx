
let Photo= ()=>{

    return ( <figure onMouseEnter={(e) => {
        e.currentTarget.children[1].style.display="flex";

    }} onMouseLeave={(e)=>{
        e.currentTarget.children[1].style.display="none";
    }}>
  <img src="logo192.png" alt="logo" />
  <div>
    <figcaption> React Logo </figcaption>
  </div>
</figure>);
}

export default Photo;
