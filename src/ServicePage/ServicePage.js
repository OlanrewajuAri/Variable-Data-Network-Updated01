import React from "react";
import "./ServicePage.css";
import HomeServices1 from "../Images/HomeServices1.svg";
import { Link } from "react-router-dom";
import LogoTray from "../Component/Home/LogoTray";
import DataStorage from "../Component/Home/DataStorage";

import CubeSvg from "../Images/3dcube1.svg";
import OurServices from "../Component/Home/OurServices";
import WhatWeDo from "../Component/Home/WhatWeDo";
import VDNLady from "../Component/Home/VDNLady";
import VdnServer from "../Component/Home/VdnServer";
import FooterMobil from "../Component/Home/FooterMobil";

function ServicePage() {
  return (
    <div >
      <div className="container-fluid HomeServicesGeneralContainer" >
        <div className="container HomeServicesMainParent">

          <div className="HomeServicesParent" id= "home">

            <div className="HomeServices1ImgMobile img-responsive">
              <img src={HomeServices1} alt="" class="img-responsive" />
            </div>

            <h2>Empowering Africa through technology</h2>

            <p>
            We are a leading integrated data company that constructs, operates and maintains Africa’s largest network of interconnected, carrier and cloud neutral data center facilities.
            </p>

            <Link to="" class="y">
            <button className="HomeServices1button">
                Connect with us
            </button>
            </Link>

        
          </div>

          <div className="HomeServices1Img">
            <img src={HomeServices1} alt="" />
          </div>
        </div>



      </div>

      <div className="LogoTray">
        <LogoTray />
      </div>

      <div>
        <DataStorage />
      </div>
      <div id= 'services'>
        <OurServices />
      </div>

      <div className="container-fluid Services4GeneralContainer">
        <div className="container">
          <div className="Services4MainContainer">
            <h6>Our Services</h6>

            <h3>The Service Pillars Customers all over</h3>
          </div>

          <div className="Services4Container">
            <div className="Services4Parent">
              <img src={CubeSvg} alt="" />
              <h6>SAAS</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tortor, sapien integer mattis. Metus morbi auctor.
              </p>
            </div>

            <div className="Services4Parent">
              <img src={CubeSvg} alt="" />
              <h6>Auto Scalling</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tortor, sapien integer mattis. Metus morbi auctor.
              </p>
            </div>

            <div className="Services4Parent">
              <img src={CubeSvg} alt="" />
              <h6>Multi-Level Monitoring</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tortor, sapien integer mattis. Metus morbi auctor.
              </p>
            </div>

            <div className="Services4Parent">
              <img src={CubeSvg} alt="" />
              <h6>Streamlined</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tortor, sapien integer mattis. Metus morbi auctor.
              </p>
            </div>

            <div className="Services4Parent">
              <img src={CubeSvg} alt="" />
              <h6>Security</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tortor, sapien integer mattis. Metus morbi auctor.
              </p>
            </div>

            <div className="Services4Parent">
              <img src={CubeSvg} alt="" />
              <h6>Stability & Reliability</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                purus tortor, sapien integer mattis. Metus morbi auctor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhatWeDo />
      <VDNLady />
      {/* <LogoTray /> */}
      <VdnServer />
      <FooterMobil />
    </div>
  );
}

export default ServicePage;
