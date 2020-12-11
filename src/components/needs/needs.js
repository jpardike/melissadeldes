import React from 'react';
import './needs.css';

class Needs extends React.Component {
    render() {
        const needsImg = {
            customer: require('./customer.svg')
        };
        return (
            <div>
                <div className="row m-0 d-none d-md-flex">
                    <div className="col-6 text-center align-self-center">
                        <img id="needs-image" src={needsImg.customer} alt="" />
                    </div>
                    <div className="col-6">
                        <h2 id="needs-title">Meet your customer’s needs</h2>

                        <p id="needs-para-one">Let’s work together to find out who your customers are and what they need. As well as connect with new ones to grow your business.</p>

                        <p id="needs-para-two">Define who your audience is, not just who you think they are.</p>

                        <p id="needs-para-three">Complete market analysis of competitors and area trends.</p>

                        <p id="needs-para-four">Help to redefine your message and brand to target new customer base.</p>
                    </div>
                </div>
                <div className="d-md-none">
                    <h2 id="needs-title">Meet your customer’s needs</h2>

                        <p id="needs-para-one">Let’s work together to find out who your customers are and what they need. As well as connect with new ones to grow your business.</p>

                        <p id="needs-para-two">Define who your audience is, not just who you think they are.</p>

                        <p id="needs-para-three">Complete market analysis of competitors and area trends.</p>

                        <p id="needs-para-four">Help to redefine your message and brand to target new customer base.</p>

                        <div className="row m-0 justify-content-center">
                            <img className="img-fluid" id="mobile-needs-image" src={needsImg.customer} alt="" />
                        </div>
                </div>
            </div>
        )
    }
}

export default Needs;