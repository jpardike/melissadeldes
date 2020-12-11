import React from 'react';
import './hotel.css';

class Hotel extends React.Component {
    render() {
        const hotelImg = {
            audit: require('./Audit.png'),
            mobileAudit: require('./MBAudit.png')
        };
        return (
            <div>
                <div className="row m-0 d-none d-md-flex">
                    <div id="hotel-column-bg" className="col-6">
                        <h2 id="hotel-title">Hotel Operations App Audit</h2>
                        <h3 id="hotel-para-title-top">Goals:</h3>
                        <p id="hotel-para-top">To review current app that runs the daily hotel management for usability issues and provide improvement feedback.</p>
                        <h3 id="hotel-para-title-bottom">Results:</h3>
                        <p id="hotel-para-bottom">We found gaps in workflows that resulted in loss of efficiency and in turn affected customer satisfaction ratings. With the information from the audit the company was able to prioritize their efforts to improve these workflows so that they could quickly address the problems.</p>
                    </div>
                    <div className="col-6 p-0 text-center align-items-center">
                        <img id="hotel-app-image" src={hotelImg.audit} alt="" />
                    </div>
                </div>
                <div id="mobile-hotel-bg" className="d-md-none">
                    <h2 id="hotel-title">Hotel Operations App Audit</h2>

                        <h3 id="hotel-para-title-top">Goals:</h3>

                            <p id="hotel-para-top">To review current app that runs the daily hotel management for usability issues and provide improvement feedback.</p>
                        <h3 id="hotel-para-title-bottom">Results:</h3>

                            <p id="hotel-para-bottom">We found gaps in workflows that resulted in loss of efficiency and in turn affected customer satisfaction ratings. With the information from the audit the company was able to prioritize their efforts to improve these workflows so that they could quickly address the problems.</p>

                        <img id="mobile-hotel-app-image" className="img-fluid" src={hotelImg.mobileAudit} alt="" />
                </div>
            </div>
        )
    }
}

export default Hotel;