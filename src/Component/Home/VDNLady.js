import React from 'react'
import './VDNLady.css'
import Group from "../../Images/Home9Group.svg";

function VDNLady() {
  return (
    <div className="container-fluid HomePage9Main">
    <div className="container">
      <div className="HomePage9Parent">
        <h6>Our Services</h6>
        <h3>We Have Customers all over the world</h3>
        <p>
          With its strong operational footprint across West Africa, with the
          view of covering other regions in Africa, VDN is uniquely
          positioned to deliver end to end solutions that help businesses
          reduce capital costs and maximise productivity to achieve
          profitability.
        </p>
        <img src={Group} />
      </div>
    </div>
  </div>
  )
}

export default VDNLady