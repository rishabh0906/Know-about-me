import Logo from "./Logo";

let UpgradeMe =()=>{

    return (
  <>
  <Logo/>
        <div   className= "Main-Content">
           
           <h1 className="heading" >Let me Know You</h1>

           <input className="upgrade-inp1" type="text"  placeholder="Name..." />
           <input className="upgrade-inp2" type="email" placeholder="Email..." />
           <textarea placeholder="I Love Suggestions !!" className="upgrade-txt" cols="28" rows="10"></textarea>
           <button  className="upgrade-btn" > Thank You </button>

        </div>
  </>
    );
}

export default UpgradeMe;