import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

import logo from "../images/lcn-logo--on-dark.svg";

const Header = ({ siteTitle }) => (
  <div className="bg-dark">
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{ width: '40px' }} src={logo} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why">Why LCN?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
    
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
