import React from 'react';
import './amazon_fresh.css';

class AmazonFresh extends React.Component {
    render() {
        const amzFreshImg = {
            amzFresh: require('./AmFreshApp.png'),
            amzFreshM: require('./MBAmFreshApp.png')
        };
        return (
            <div id="amazon-fresh-bg">
                <h2 id="amz-fresh-title">Amazon Fresh Delivery App</h2>
                <div className="row m-0 d-none d-md-flex">
                    <div className="col-6 amz-fresh-columns-left">
                        <h3 className="fresh-column-title">Goals:</h3>
                            <p className="amz-fresh-para amz-fresh-top-para">To design a delivery app that would aid the driver to be efficient in their delivery process.</p>

                            <p className="amz-fresh-para">App was to provide clear information for each customer and package(s) along with route information and location information that was specific to the address.</p>

                            <p className="amz-fresh-para amz-fresh-bottom-para">This app replaced an app that drivers were not utilizing and were instead relying on printed directions per route.</p>
                    </div>
                    <div className="col-6 amz-fresh-columns-right">
                        <h3 className="fresh-column-title">Results:</h3>
                            <p className="amz-fresh-para amz-fresh-top-para">The app was successfully adopted by drivers and increased delivery status accuracy by 70%.</p>

                            <p className="amz-fresh-para">It was also later used by courier and last mile delivery drivers as well.</p>
                    </div>
                </div>
                <div className="d-md-none">
                    <h3 className="fresh-column-title">Goals:</h3>

                        <p className="amz-fresh-para amz-fresh-top-para">To design a delivery app that would aid the driver to be efficient in their delivery process.</p>

                        <p className="amz-fresh-para">App was to provide clear information for each customer and package(s) along with route information and location information that was specific to the address.</p>

                        <p className="amz-fresh-para amz-fresh-bottom-para">This app replaced an app that drivers were not utilizing and were instead relying on printed directions per route.</p>

                    <h3 className="fresh-column-title">Results:</h3>

                        <p className="amz-fresh-para amz-fresh-top-para">The app was successfully adopted by drivers and increased delivery status accuracy by 70%.</p>

                        <p className="amz-fresh-para">It was also later used by courier and last mile delivery drivers as well.</p>
                </div>
                <div className="row justify-content-center align-items-end p-0 m-0">
                    <img className="amz-fresh-img d-none d-md-block" src={amzFreshImg.amzFresh} alt="" />

                    <img className="amz-fresh-img d-md-none" src={amzFreshImg.amzFreshM} alt="" />
                </div>
            </div>
        )
    }
}

export default AmazonFresh;