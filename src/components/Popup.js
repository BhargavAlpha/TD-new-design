import React from "react";
import "./Popup.css";
import diwali from "../Assests/diwali.svg";
import styellow from "../Assests/styellowleft.gif";
import stpink from "../Assests/stpink.gif";
import stblue from "../Assests/stblue.gif";
import cracker from "../Assests/cracker.gif";
import close from "../Assests/popclose.svg";
import Cookies from "js-cookie";
const Popup = ({setPopUp}) => {
  return (
    <div className="popup-wrapper">
      <div className="popup-cont">
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",position:"relative"}}>
          <img src={diwali} className="diwali-img" alt="Diwali" />
          <img src={close} className="popclose-img" alt="popclose" 
          onClick={()=>{
            setPopUp(false)
            Cookies.set('popup', false, { expires: 1/48 })
          }}/>
          <img src={styellow} className="styellow absimg" alt="Diwali" />
          <img src={styellow} className="styellowleft absimg" alt="Diwali" />
          <img src={stpink} className="stpink absimg" alt="stpink" />
          <img src={cracker} className="cracker absimg" alt="cracker" />
          <img src={stblue} className="stblue absimg" alt="stblue" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
