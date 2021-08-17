import { useState, useEffect } from "react";

let Animation = (props) => {
  let [isHidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 100 + props.obj.index * 100);
  });

  let check = () => {
    if (isHidden === false) {
      return "show";
    }

    return "";
  };
  
  let check2=()=>{
          let max_width=window.outerWidth;
          if(max_width>765){
          return   40 + props.obj.index * (props.obj.item === "i" ? 31 : 30)
          }
          return 15 + props.obj.index * (props.obj.item === "i" ? 16 : 15.5);
          
        }
        
  return (
    <text
      className={check()}
      fill="#333"
      x={check2()}
      y="86"
    >
      {props.obj.item}
    </text>
  );
};

export default Animation;
