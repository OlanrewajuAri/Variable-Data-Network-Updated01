import React from "react";
import "./LogoTray.css";
import Koko from "../../Images/Koko.svg";
import Mahogany from "../../Images/Mahogany.svg";
import Microsoft from "../../Images/Microsoft.svg";
import Platform from "../../Images/Platform Logo.svg";
import Techcabal from "../../Images/Techcabal.svg";
import Unicorn from "../../Images/Unicorn.svg";

function LogoTray() {
  return (
    <div className="container-fluid">
      <div className="container mobilecenter">
        <div className="LogoTrayParent">
          <h6>Our Partners</h6>
        </div>

        <div className="LogoTrayChildren">
          <img src={Koko} alt="" />
          <img src={Mahogany} alt="" />
          <img src={Microsoft} alt="" />
          <img src={Platform} alt="" />
          <img src={Techcabal} alt="" />
          <img src={Unicorn} alt="" />
        </div>

        <div className="LogoTrayChildrenMobile">
       
          <img src={Mahogany} alt="" />
    
          <img src={Platform} alt="" />

          <img src={Unicorn} alt="" />
        </div>

      </div>
    </div>
  );
}

export default LogoTray;
