import React from 'react';
import './contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: "form-submit",
            toast: "no-toast-container"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState = ({
            button: "no-form-submit"
            
        });
        this.setState = ({
            toast: "toast-container"
        });
    }
    
    render() {
        return (
            <div id="contact">

                <div className="row m-0 purple-header">
                    <header>
                        <h2 className="purple-section-title">Let’s talk</h2>
                    </header>
                </div>

                <div className="row m-0 d-none d-md-flex" id="contact-section">
                    <div className="col-6 contact-columns" id="contact-col-left">
                        <p className="contact-para">Our greatest success is ensuring yours. We exist to help companies navigate the challenges that they face every day. Send us line and we will do our best to help.</p>
                        <p className="contact-para">That is our promise.</p>
                    </div>
                    <div className="col-6 contact-columns p-0">
                        <form>
                            <input id="name-input" type="text" name="name" placeholder="Name" required />
                            <input id="email-input" type="email" name="email" placeholder="Email" required />
                            <input id="phone-input" type="tel" name="phone" placeholder="Phone" required />
                            <textarea id="text-input" name="text-content" placeholder="How can we help?"></textarea>
                            <input onClick={this.handleClick} className="float-right" id={this.state.button} type="submit" value="Submit" />
                        </form>
                        <div className="text-center" id={this.state.toast}>
                            <p id="top-toast">Your request has been sent.</p>
                            <p id="bottom-toast">One of us will call you soon!</p>
                        </div>
                    </div>
                </div>

                <div className=" d-md-none">
                    <div className="row m-0">
                        <p className="contact-para top-para">Our greatest success is ensuring yours. We exist to help companies navigate the challenges that they face every day. Send us line and we will do our best to help.</p>
                        <p className="contact-para bottom-para">That is our promise.</p>
                    </div>
                        
                    <div className="row m-0">
                        <form className="text-center">
                            <input id="name-input" type="text" name="name" placeholder="Name" required />
                            <input id="email-input" type="email" name="email" placeholder="Email" required />
                            <input id="phone-input" type="tel" name="phone" placeholder="Phone" required />
                            <textarea id="text-input" name="text-content" placeholder="How can we help?"></textarea>
                            <input onClick={this.handleClick} id={this.state.button} type="submit" value="Submit" />
                        </form>
                        <div className="text-center" id={this.state.toast}>
                            <p id="top-toast">Your request has been sent.</p>
                            <p id="bottom-toast">One of us will call you soon!</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;