import React from "react";
import "./FooterMobil.css";
import { Link } from "react-router-dom";
import mySvg from "../../Images/LogoSvg.svg";

import FaceBook from "../../Images/Facebook.svg";
import Instagram from "../../Images/Instagram.svg";
import LinkedIn from "../../Images/LinkedIn.svg";
import Mail from "../../Images/Mail.svg";
import Twitter from "../../Images/Twitter.svg";
import Youtube from "../../Images/Youtube.svg";

function FooterMobil() {
  return (
    <div className="FooterMobilGrandParent">
      <div class="accordion accordion-flush  FooterMobilSubGrandParent" id="accordionExample">

        <div  className="FooterMobilImg">
          <img src={mySvg} alt="" />
          <p>
            Variable Data Networks is an integrated data company that network of
            interconnected carrier.
          </p>
        </div>

        <div class="accordion-item FooterMobilParent">
          <h2 class="accordion-header " id="headingOne">
            <button
              class="accordion-button FooterMobilParent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Home
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul>
                <li>
                  <Link to="">Explore</Link>
                </li>

                <li>
                  <Link to="">About us </Link>
                </li>

                <li>
                  {" "}
                  <Link to="">Support </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item FooterMobilParent">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed FooterMobilParent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Services
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul>
                <li>
                  <Link to="">Data center</Link>
                </li>

                <li>
                  <Link to="">Services </Link>
                </li>

                <li>
                  {" "}
                  <Link to="">Support </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item FooterMobilParent">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed FooterMobilParent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              About us
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul>
                <li>
                  <Link to="">Explore</Link>
                </li>

                <li>
                  <Link to="">About us </Link>
                </li>

                <li>
                  {" "}
                  <Link to="">Support </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="FooterGrandPaa">
          <Link to="">
            <div className="socilaMediaHandles22">
              <img src={Instagram} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram" />
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles22">
              <img src={LinkedIn} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"/>
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles22">
              <img src={Mail} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail" />
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles22">
              <img src={Youtube} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube" />
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles22">
              <img src={FaceBook} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="FaceBook"/>
            </div>
          </Link>

          <Link to="">
            <div className="socilaMediaHandles22">
              <img src={Twitter} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"/>
            </div>
          </Link>
        </div>

        <div className="FooterCopyrightt">
          <p>Copyright ©2022 Variable Data Network. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}

export default FooterMobil;
