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

  return (
    <text
      className={check()}
      fill="#333"
      font-size="64"
      x={40 + props.obj.index * (props.obj.item === "i" ? 31 : 30)}
      y="86"
    >
      {props.obj.item}
    </text>
  );
};

export default Animation;
