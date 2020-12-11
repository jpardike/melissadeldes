import React from 'react';
import './hero.css';

class Hero extends React.Component {
    render() {
        return (
            <div id="hero-image">
                <div id="logo-image">
                    <div id="top-text">
                        <p className="hero-text">We’re committed to providing a custom affordable</p>
                    </div>
                    <div id="bottom-text">
                        <p className="hero-text">experience that delights you and your customers</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;