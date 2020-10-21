import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

import logo from "../images/lcn-logo--on-dark.svg";
import { $CombinedState } from "redux";

import $ from 'jquery';


function handleAnchorLink(e) {
  console.log(e)
  e.preventDefault();
  console.log(e.target.hash)
  const { hash } = e.target;
  const top = $(hash).offset().top - 100;

  window.scroll({
    top: top,
    left: 0,
    behavior: 'smooth'
  })
  // $('html').animate({
  //   scrollTop: ($(hash).offset().top - 100)
  // }, 800, () => {
  //   window.location.hash = hash;
  // })
}

const Header = ({ siteTitle }) => (
  <div className="bg-dark">
    
      <nav className="navbar fixed-top shadow-lg navbar-expand-md navbar-dark bg-dark">
        <div className="container">
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
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleAnchorLink}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how" onClick={handleAnchorLink}>How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why" onClick={handleAnchorLink}>Why LCN?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleAnchorLink}>Contact</a>
            </li>
            
          </ul>
        </div>
        </div>
      </nav>
    
    
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
