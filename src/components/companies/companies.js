import React from 'react';
import { NavLink } from 'react-router-dom';
import './companies.css';

class Companies extends React.Component {
    render() {
        const companyImgs = {
            amazon: require('./amzlogo.png'),
            light: require('./lighthouselogo.png'),
            glogo: require('./glogo.png'),
            nabisco: require('./nablogo.png'),
            sony: require('./snylogo.png'),
            micro: require('./mslogo.png')
        };
        return (
            <div>
            
                <div className="row m-0 orange-header">
                    <header>
                        <h2 className="section-title">Some companies we’ve worked with</h2>
                    </header>
                </div>

                <div className="company-images row justify-content-center m-0 d-none d-md-flex">
                    <div id="text-container">
                        <div className="row justify-content-center button-row" id="project-button">
                            <NavLink className="align-bottom" to="/projects">
                                <button className="buttons">See projects</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="d-md-none">
                    <div className="row m-0 justify-content-center">
                        <img className="img-fluid comp-img-top" src={companyImgs.amazon} alt="" />
                    </div>
                    <div className="row m-0 justify-content-center">
                        <img className="img-fluid comp-img-mid" src={companyImgs.light} alt="" />
                    </div>
                    <div className="row m-0 two-img-row justify-content-center">
                        <div className="col-6 m-0 p-0 text-center">
                            <img className="two-column-imgs" src={companyImgs.glogo} alt="" />
                        </div>
                        <div className="col-6 m-0 p-0 text-center">
                            <img className="two-column-imgs" src={companyImgs.nabisco} alt="" />
                        </div>
                    </div>
                    <div className="row m-0 justify-content-center">
                        <img className="img-fluid comp-img-mid" src={companyImgs.sony} alt="" />
                    </div>
                    <div className="row m-0 justify-content-center">
                        <img className="img-fluid comp-img-bottom" src={companyImgs.micro} alt="" />
                    </div>
                    <div className="row justify-content-center button-row m-0" id="project-button">
                        <NavLink className="align-bottom" to="/projects">
                            <button className="buttons">See projects</button>
                        </NavLink>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Companies;