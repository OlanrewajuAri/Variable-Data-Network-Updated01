import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Black from "../Images/VDN Logo + Text.svg";
import { NavHashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark ">
      <div class="container-md">
        <Link to="/" class="navbar-brand logo ">
          <img src={Black} />
        </Link>

       

        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-center justify-content-center " id="collapsibleNavbar">
          <ul class="navbar-nav">
           

            <li class="nav-item">
              <NavHashLink
                to="#home"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Home
              </NavHashLink>

            
            </li>

            <li class="nav-item">
              <NavHashLink
                to="#services"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Services
              </NavHashLink>
           
            </li>

            <li class="nav-item">
              <NavHashLink
                to="#footer"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Support
              </NavHashLink>
          
            </li>

       
          </ul>
        </div>

        <div className="Navbutton">
          <button type="button" class="  NavText d-none d-lg-block">
            Contact
          </button>
        </div>
      
      </div>
    </nav>
  );
}

export default Navbar;
