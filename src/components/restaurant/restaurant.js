import React from 'react';
import './restaurant.css';

class Restaurant extends React.Component {
    render() {
        const restImg = {
            posApp: require('./POSApp.png'),
            mobilePosApp: require('./MBPOSApp.png')
        };
        return (
            <div id="restaurant-bg">
                <div className="row align-items-center m-0 d-none d-md-flex">
                    <div className="col-6 text-center">
                        <img id="rest-img" src={restImg.posApp} alt="Restaurant POS App" />
                    </div>
                    <div className="col-6" id="rest-text-column">
                        <h2 id="rest-title">Restaurant POS Loyalty App</h2>

                            <h3 id="rest-column-top">Goals:</h3>

                                <p className="rest-para">To design a white label ordering app that supported online and in person ordering system as well as provide data to improve loyalty and marketing needs.</p>

                            <h3 id="rest-column-bottom">Results:</h3>

                                <p className="rest-para">An improved order flow that provided clear direction to the order taker and order transparency to the customer. It also provided order suggestions and personalized deals based on customers past purchases.</p>
                    </div>
                </div>
                <div className="d-md-none">
                    <h2 id="rest-title">Restaurant POS Loyalty App</h2>

                        <h3 className="rest-h3s">Goals:</h3>

                            <p id="mobile-para-top">To design a white label ordering app that supported online and in person ordering system as well as provide data to improve loyalty and marketing needs.</p>

                        <h3 className="rest-h3s">Results:</h3>

                            <p id="mobile-para-bottom">An improved order flow that provided clear direction to the order taker and order transparency to the customer. It also provided order suggestions and personalized deals based on customers past purchases.</p>

                            <img id="mobile-rest-img" src={restImg.mobilePosApp} alt="Restaurant POS App" />
                </div>
            </div>
        )
    }
}

export default Restaurant;