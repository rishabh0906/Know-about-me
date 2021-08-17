import Photo from "./Photo";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { firestore } from "./firebase";

let Gallery = () => {
  let [AllPhotoURL, setURL] = useState(null);
  let [ZoomedPhoto, setPhoto] = useState(null);

  useEffect(() => {
    let f = () => {
      firestore.collection("images").onSnapshot((querySnapShot) => {
        let AllPhotosData = [];
        querySnapShot.forEach((doc) => {
          AllPhotosData.push(doc.data());
        });

        setURL(AllPhotosData);
      });
    };
    f();
  }, []);

  return (
    <>
      <Logo />
      <div
        className="Main-Content Gallery slide-left"
        onScroll={(e) => {
          let top = e.currentTarget.scrollTop;
          e.currentTarget.firstChild.style.top = `${top + 80}px`;
        }}
      >
        <div
          style={{ display: ZoomedPhoto == null ? "none" : "block" }}
          onClick={() => {
            setPhoto(null);
          }}
          className="Zoomed-pic"
        >
          <img src={ZoomedPhoto == null ? "" : ZoomedPhoto} alt="Zoomed" />
        </div>
        <h1 className="heading">Although, I am not a Dweeb !!</h1>
        <div className="AllPhotos-div">
          {AllPhotoURL == null
            ? "Loading..."
            : AllPhotoURL.map((ele) => {
                return <Photo content={ele} setZoom={setPhoto} />;
              })}
        </div>
      </div>
    </>
  );
};
export default Gallery;
