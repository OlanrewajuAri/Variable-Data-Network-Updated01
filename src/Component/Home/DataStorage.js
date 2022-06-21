import React from "react";
import "./DataStorage.css";
import {Link} from 'react-router-dom'

import Cloud from "../../Images/Cloud.svg";
import Consultation from "../../Images/Consultation.svg";
import Hosting from "../../Images/Hosting.svg";
import Shared from "../../Images/Shared.svg";
import Virtual from "../../Images/Virtual.svg";
import Arrow from "../../Images/arrow-right.svg";

function DataStorage() {
  return (
    <div>
      <div className="container-fluid DataStorageMainBody">
        <div className="container DataStorageBody">
          <div className="DataStorageText">
            <h6>Our Services</h6>
            <h4>Let technology accelerate your digital business</h4>
            <p>
            We are dedicated to being the heart that beats your business. The Data Center is designed to meet Telecommunications Industry Association 942 Standards with its Operations and processes certified as PCI DSS and ISO27001 compliant.
            </p>
          </div>

          <div className="DataStorageFlex">
            <Link to="" class="">
              <div className="DataGrandchild">
                {" "}
                <img src={Cloud} alt="" className= "DataGrandChildIcon"  />
                Hosting Services
                <img src={Arrow} className="DataStorageArrow" />
              </div>
            </Link>

            <Link to="">
              <div className="DataGrandchild">
                <img src={Consultation} alt="" className= "DataGrandChildIcon" />
                Virtual Private Storage
                <img src={Arrow} className="DataStorageArrow" />
              </div>
            </Link>

            <Link to="">
              <div className="DataGrandchild">
                <img src={Virtual} alt="" className= "DataGrandChildIcon" />
                Shared Data Storage
                <img src={Arrow} className="DataStorageArrow" />
              </div>
            </Link>

            <Link to="">
              <div className="DataGrandchild">
                <img src={Hosting} alt="" className= "DataGrandChildIcon" />
                Cloud Service
                <img src={Arrow} className="DataStorageArrow" />
              </div>
            </Link>

            <Link to="">
              <div className="DataGrandchild">
                <img src={Shared} alt="" className= "DataGrandChildIcon" />
                Consultation Services
                <img src={Arrow} className="DataStorageArrow" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataStorage;
