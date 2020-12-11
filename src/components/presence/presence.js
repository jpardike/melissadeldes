import React from 'react';
import './presence.css';

class Presence extends React.Component {
    render() {
        const presenceImg = {
            improve: require('./improve.svg')
        };
        return (
            <div>
                <div className="row m-0 d-none d-md-flex">
                    <div className="col-6">
                        <h2 id="presence-title">Improve your internet presence</h2>

                            <p id="presence-para-one">Whether it’s a new site, modernized site, brand refresh or improved SEO, we’ll help you connect better with new and existing customers. Some of our services are:</p>

                            <p id="presence-para-two">Design a new responsive website/app.</p>

                            <p id="presence-para-three">Update an existing site and brand to more modern standards.</p>

                            <p id="presence-para-four">Evaluate your site to beef up your SEO.</p>

                            <p id="presence-para-five">Set you up to capture consumer data that will allow you to better market yourself to your customers.</p>
                    </div>

                    <div className="col-6 text-center align-self-center">
                        <img className="img-fluid" id="presence-image" src={presenceImg.improve} alt="" />
                    </div>
                </div>
                <div className="d-md-none">
                    <h2 id="presence-title">Improve your internet presence</h2>

                        <p id="presence-para-one">Whether it’s a new site, modernized site, brand refresh or improved SEO, we’ll help you connect better with new and existing customers. Some of our services are:</p>

                        <p id="presence-para-two">Design a new responsive website/app.</p>

                        <p id="presence-para-three">Update an existing site and brand to more modern standards.</p>

                        <p id="presence-para-four">Evaluate your site to beef up your SEO.</p>

                        <p id="presence-para-five">Set you up to capture consumer data that will allow you to better market yourself to your customers.</p>

                        <div className="row m-0 justify-content-center">
                            <img id="mobile-presence-image" className="img-fluid" src={presenceImg.improve} alt="" />
                        </div>
                </div>
            </div>
        )
    }
}

export default Presence;