import React from 'react';
import './efficiently.css';

class Efficiently extends React.Component {
    render() {
        const efficientImg = {
            efficient: require('./efficiency.svg')
        };
        return (
            <div>
                <div className="row m-0 d-none d-md-flex">
                    <div className="col-6">
                        <h2 id="efficient-title">Function more efficiently</h2>

                        <p id="efficient-para-one">Inventory processes, checkout pipelines, we can help you  improve your day to day tasks and provide more time for life.</p>

                        <p id="efficient-para-two">Create customer journey maps to help you visualize their painpoints and gaps in pipelines.</p>

                        <p id="efficient-para-three">Improve common workflows to allow for easy checkouts.</p>

                        <p id="efficient-para-four">Provide improvements to site and marketing copy so that you can connect better with your customers.</p>

                        <p id="efficient-para-five">Help setup a simpler and more lucrative marketing campaigns so that you can spend more time living life outside of your business.</p>
                    </div>
                    <div className="col-6 text-center align-self-center">
                        <img id="efficient-image" src={efficientImg.efficient} alt="" />
                    </div>
                </div>
                <div className="d-md-none">
                    <h2 id="efficient-title">Function more efficiently</h2>

                        <p id="efficient-para-one">Inventory processes, checkout pipelines, we can help you  improve your day to day tasks and provide more time for life.</p>

                        <p id="efficient-para-two">Create customer journey maps to help you visualize their painpoints and gaps in pipelines.</p>

                        <p id="efficient-para-three">Improve common workflows to allow for easy checkouts.</p>

                        <p id="efficient-para-four">Provide improvements to site and marketing copy so that you can connect better with your customers.</p>

                        <p id="efficient-para-five">Help setup a simpler and more lucrative marketing campaigns so that you can spend more time living life outside of your business.</p>

                        <div className="row m-0 justify-content-center">
                            <img id="mobile-efficient-image" className="img-fluid" src={efficientImg.efficient} alt="" />
                        </div>
                </div>
            </div>
        )
    }
}

export default Efficiently;