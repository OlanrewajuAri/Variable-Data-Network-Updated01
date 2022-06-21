import React from "react";
import "./OurServices.css";
import { Link } from "react-router-dom";
import Data from "../../Images/DataCenterr.svg";
import Cloud from "../../Images/CloudServicee.svg";
import Satelite from "../../Images/Satelitee.svg";

function OurServices() {
  return (
    <div className="container-fluid HomePage2MainBody">
      <div className="container">
        <div className="HomePage2Body">
          <h6>Our services</h6>
          <h3>
            Get amazing services for your <span>business</span>{" "}
          </h3>
        </div>

        <div className="HomePage2Flex">
          <div className="HomePage2Cards">
            <div class="card">
              <img src={Data} class="card-img-top" alt="Card image" />

              <div class="card-body">
                <h4 class="card-title">Data Center</h4>

                <p class="card-text">
                  Our integrated systems provides colocation services and cloud
                  services with its growing cloud partners to commercial, public
                  sector and private sector customers.
                </p>

                <Link to="" class="x">
                  <button className="HomePage2Button">Learn more</button>
                </Link>


              </div>
            </div>
          </div>

          <div className="HomePage2Cards">
            <div class="card">
              <img src={Cloud} class="card-img-top" alt="Card image" />

              <div class="card-body">
                <h4 class="card-title">Cloud Service</h4>

                <p class="card-text">
                We provide the most comprehensive heterogeneous marketplace for cloud services hosted and delivered within VDN cloud neutral data centre.
                </p>

                <Link to="" class="x">
                  <button className="HomePage2Button">Learn more</button>
                </Link>

              </div>
            </div>
          </div>

          <div className="HomePage2Cards">
            <div class="card">
              <img src={Satelite} class="card-img-top" alt="Card image" />

              <div class="card-body">
                <h4 class="card-title">Satelite</h4>

                <p class="card-text">
                We provide a low latency, broadband internet system to meet the needs of consumers across Africa, connectivity in remote, high altitude and no infrastructure areas.
                </p>

                <Link to="" class="x">
                  <button className="HomePage2Button">Learn more</button>
                </Link>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
