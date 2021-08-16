import Logo from "./Logo";
import { useState } from "react";

let UpgradeMe = () => {
  let [name, setName] = useState("");
  let [email, setemail] = useState("");
  let [text, setText] = useState("");

  let serverRequest = async () => {
    let info = { name, email, text };
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message Sent.");
    } else if (resData.status === "fail") {
      alert("Message failed to send.");
    }
  };

  return (
    <>
      <Logo />
      <div className="Main-Content slide-left">
        <h1 className="heading">Let me Know You</h1>

        <input
          className="upgrade-inp1"
          value={name}
          type="text"
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setName(e.currentTarget.value);
          }}
          placeholder="Name..."
        />
        <input
          className="upgrade-inp2"
          type="email"
          value={email}
          placeholder="Email..."
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setemail(e.currentTarget.value);
          }}
        />
        <textarea
          placeholder="I Love Suggestions !!"
          value={text}
          className="upgrade-txt"
          cols="28"
          rows="10"
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setText(e.currentTarget.value);
          }}
        ></textarea>
        <button
          className="upgrade-btn"
          onClick={(e) => {
            if (name == "" || email == "" || text == "") return;

            serverRequest().then(()=>{
              setName("");
              setText("");
              setemail("");
            });
          }}
        >
          Thank You
        </button>
      </div>
    </>
  );
};

export default UpgradeMe;
