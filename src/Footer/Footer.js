import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FaceBook from "../Images/Facebook.svg";
import Instagram from "../Images/Instagram.svg";
import LinkedIn from "../Images/LinkedIn.svg";
import Mail from "../Images/Mail.svg";
import Twitter from "../Images/Twitter.svg";
import Youtube from "../Images/Youtube.svg";
import mySvg from "../Images/LogoSvg.svg";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    if (email.trim().length === 0){
      return;
    }

    console.log(`This works fine, ${email}`);
  };


  return (
    <div className="container-fluid FooterContainer" id= 'footer'>
      <div className="container ">
        <div className="FooterMainParent">
          <div className="FooterParent">
            <img src={mySvg} alt="" />
            <p>
              High-quality interface assets for designers and startup creatives
            </p>
            <h6>Get to know our products & services</h6>
            <p className="footerParentPad">Be informed, learn more about Offers and Services.</p>
    
    
            <form onSubmit={handleSubmit}>
              <div class="row stre">
                <div class="col">
                  <label className="formInput">
                    <input
                    className="seeifitworks"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                    />
                  </label>
                </div>

                <div class="col ok">
                  <input type="Submit" value="Submit" className="submitHere" />
                </div>
              </div>
            </form>
          </div>

          <div className="FooterChildren">
            <div className="FooterChild">
              <h2>Home</h2>
              <Link to="">
                <span>Explore</span>
              </Link>
              <Link to="">
                <span>About us</span>
              </Link>
              <Link to="">
                <span>Support</span>
              </Link>
            </div>

            <div className="FooterChild">
              <h2>Services</h2>
              <Link to="">
                <span>Data center</span>
              </Link>
              <Link to="">
                <span>Services</span>
              </Link>
              <Link to="">
                <span>Support</span>
              </Link>
            </div>

            <div className="FooterChild">
              <h2>About us</h2>
              <Link to="">
                <span>Services</span>
              </Link>
              <Link to="">
                <span>About us</span>
              </Link>
              <Link to="">
                <span>Support</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="FooterGrandPa">
          <Link to="">
            <div className="socilaMediaHandles2">
              <img src={Instagram} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram" />
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles2">
              <img src={LinkedIn} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"/>
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles2">
              <img src={Mail} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail" />
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles2">
              <img src={Youtube} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube" />
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles2">
              <img src={FaceBook} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="FaceBook"/>
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles2">
              <img src={Twitter} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"/>
            </div>
          </Link>
        </div>

        <div className="FooterCopyright">
          <p>Copyright ©2022 Variable Data Network. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
