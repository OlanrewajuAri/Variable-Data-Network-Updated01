import React from "react";
import "./HomePage.css";
import BackgroundImg from "../Images/Home1Background.svg";
import Card from "../Images/Home2Card.png";
import VDN from "../Images/Home3Vdn.svg";
import { Link } from "react-router-dom";

import Cloud from "../Images/Cloud.svg";
import Consultation from "../Images/Consultation.svg";
import Hosting from "../Images/Hosting.svg";
import Shared from "../Images/Shared.svg";
import Virtual from "../Images/Virtual.svg";
import Arrow from "../Images/arrow-right.svg";
import Background from "../Images/Frame.png";
import Group from "../Images/Home9Group.svg";
import Koko from "../Images/Koko.svg";
import Mahogany from "../Images/Mahogany.svg";
import Microsoft from "../Images/Microsoft.svg";
import Platform from "../Images/Platform Logo.svg";
import Techcabal from "../Images/Techcabal.svg";
import Unicorn from "../Images/Unicorn.svg";
import VDNN from "../Images/BlackLogo.svg";
import LogoTray from "../Component/Home/LogoTray";
import DataStorage from "../Component/Home/DataStorage";
import OurServices from "../Component/Home/OurServices";
import WhatWeDo from "../Component/Home/WhatWeDo";
import VDNLady from "../Component/Home/VDNLady";
import VdnServer from "../Component/Home/VdnServer";

function HomePage() {
  return (
    <div>
      <div className="Home1Container">
        <div className="Home1Parent">
          <h1>
            Store data safely for <span>your </span> business
          </h1>

          <Link to="">
            <div className="Home1Child">
              <p>BUSINESS FOR YOU</p>
            </div>
          </Link>
        </div>

        <div className="Home1Image">
          <img src={Background} alt="" />
        </div>
      </div>

      <OurServices />

      <div className="HomePage3Body container-fluid">
        <div className="container HomePage3Flex">
          <div className="HomePage3Image">
            <img src={VDN} alt="" />
          </div>

          <div className="HomePage3Body1">
            <h3>Store data safely for your business</h3>
            <p>
              Our aim is to unveil various business opportunities and to develop
              a strategic network of partnerships. This will further strengthen
              Africa Data Centers' superiority in providing its customers with
              the highest standard of interconnected, carrier and cloud neutral
              data center facilities throughout Africa.
            </p>

            <div className="HomePage3ButtonFlex">
              <div className="HomePage3kid">
                <Link to="" class="">
                  {" "}
                  Contact us
                </Link>
              </div>

              <div className="HomePage3kid2">
                <Link to="" class="">
                  {" "}
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="HomePage4Body container-fluid">
        <div className="container">
          <div className="HomePage4Parent">
            <h3>Store data safely for your business</h3>
            <p>
              Store data safely for your business store data safely for your
              business store data safely for your business.
            </p>

            <div className="HomePage4kid">
              <Link to="" class="">
                {" "}
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="HomePage5Body container-fluid">
        <div class="scrolling">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
      </div>

      <div className="container-fluid HomePage6MainBody">
        <div className="container">
          <div className="HomePage6Body">
            <div className="HomePage6Text">
              <h4>We Have Customers all over the world</h4>
              <p>
                We are a Tier IV certified carrier neutral facility that
                provides all the necessary power distribution, cooling, cabling,
                fire suppression and physical security systems. VDN IS your
                trusted partner for rapid and secure data center services and
                interconnections across the African.
              </p>
            </div>

            <div className="HomePage6Children">
              <div className="HomePage6GrandChild">
                <h4>
                  {" "}
                  <span>200K</span>{" "}
                </h4>
                <p>Customers around the globe</p>
              </div>

              <div className="HomePage6GrandChild">
                <h4>24+</h4>
                <p>Support staff to be deployed</p>
              </div>

              <div className="HomePage6GrandChild">
                <h4>400+</h4>
                <p>Community support</p>
              </div>

              <div className="HomePage6GrandChild">
                <h4>100K</h4>
                <p>Technology in use</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <WhatWeDo />
      </div>

      <div>
        <DataStorage />
      </div>

      <VDNLady />

      <div>
        {" "}
        <LogoTray />
      </div>
<VdnServer/>
    </div>
  );
}

export default HomePage;
