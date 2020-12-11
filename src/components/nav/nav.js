import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const email = require(`./email.svg`);

const hamburger = require(`./Hamburger.svg`);

class NavBar extends React.Component {
    render() {
        const navItem = {
            color: "#FFFFFF",
            fontWeight: "300",
            marginRight: "7rem"
        };
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top scrolling-navbar" id="nav-bar">

                    <NavLink className="navbar-brand" to="/">
                        <h1>
                            <span className="orange">Dilectio</span>
                            <span className="white">Design</span>
                        </h1>
                    </NavLink>

                    <button id="hamburger-btn" 
                            className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <img className="img-fluid" src={hamburger} alt=" " />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" id="right-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navItem} to="/about" activeStyle={{ color: "#F08F06" }}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={navItem} to="/projects" activeStyle={{ color: "#F08F06" }}>Our Projects</NavLink>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link" href="#contact"><img src={email} alt="email" id="emailImage" /></a>
                            </li>
                            <li className="nav-item d-md-none">
                                <a className="nav-link" style={navItem} href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default NavBar;