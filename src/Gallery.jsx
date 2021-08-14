import Photo from "./Photo"
import Logo from "./Logo";

let Gallery = () => {
  return (
    <>
    <Logo/>
    <div className="Main-Content Gallery">
        <h1 className="heading" >I am not a Geek !!</h1>
        <h1 className="heading">Proof : </h1>
       <Photo></Photo>     
    </div>
    </>
  );
};
export default Gallery;
