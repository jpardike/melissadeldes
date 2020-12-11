import React from 'react';
import { NavLink } from 'react-router-dom';
import './benefits.css';

class Benefits extends React.Component {
    render() {
        const benefitImgs = {
            image1: require('./improve.svg'),
            image2: require('./customer.svg'),
            image3: require('./efficiency.svg')
        };
        return (
            <div>

                <div className="row m-0">
                    <header>
                        <h2 className="section-title">How can we help?</h2>
                    </header>
                </div>

                <div className="d-none d-md-block">

                    <div className="row align-items-center justify-content-around" id="image-row">
                        <div className="col-3 text-center">
                            <img src={benefitImgs.image1} alt=""/>
                        </div>
                        <div className="space"></div>
                        <div className="col-3 text-center">
                            <img src={benefitImgs.image2} alt=""/>
                        </div>
                        <div className="space"></div>
                        <div className="col-3 text-center">
                            <img src={benefitImgs.image3} alt=""/> 
                        </div>
                    </div>

                    <div className="row justify-content-around" id="benefits-info-row">
                        <div className="col-3 align-items-start text-center benefits-info-columns">
                            <h3 className="benefits-info-title">Improve your internet presence</h3>
                            <p>Whether it’s a new site, modernized site, brand refresh or improved SEO, we’ll help you connect better with new and existing customers.</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="col-3 align-items-start text-center benefits-info-columns center-info">
                            <h3 className="benefits-info-title">Meet your customer’s needs</h3>
                            <p>Let’s work together to find out who your customers are and what they need. As well as connect with new ones to grow your business.</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="col-3 align-items-start text-center benefits-info-columns">
                            <h3 className="benefits-info-title">Function more efficiently</h3>
                            <p>Inventory processes, checkout pipelines, we can help you  improve your day to day tasks and provide more time for life.</p>
                        </div>
                    </div>

                </div>

                <div className="d-block d-md-none">

                    <div className="row justify-content-center m-0">
                        <img  className="img-fluid ben-m-img" src={benefitImgs.image1} alt=""/>
                    </div>

                    <div className="row justify-content-center text-center m-0">
                        <h3 className="benefits-info-title ben-m-title">Improve your internet presence</h3>
                        <p className="ben-m-para">Whether it’s a new site, modernized site, brand refresh or improved SEO, we’ll help you connect better with new and existing customers.</p>
                    </div>

                    <hr className="mobile-line"></hr>

                    <div className="row justify-content-center m-0">
                        <img className="img-fluid ben-m-img" src={benefitImgs.image2} alt=""/>
                    </div>

                    <div className="row justify-content-center text-center m-0">
                        <h3 className="benefits-info-title ben-m-title">Meet your customer’s needs</h3>
                        <p className="ben-m-para">Let’s work together to find out who your customers are and what they need. As well as connect with new ones to grow your business.</p>
                    </div>

                    <hr className="mobile-line"></hr>

                    <div className="row justify-content-center m-0">
                        <img className="img-fluid ben-m-img" src={benefitImgs.image3} alt=""/>
                    </div>

                    <div className="row justify-content-center text-center m-0">
                        <h3 className="benefits-info-title ben-m-title">Function more efficiently</h3>
                        <p className="ben-m-para">Inventory processes, checkout pipelines, we can help you  improve your day to day tasks and provide more time for life.</p>
                    </div>

                </div>

                <div className="row justify-content-center button-row m-0">
                    <NavLink to="/about">
                        <button className="buttons">Learn more</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Benefits;