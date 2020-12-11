import React from 'react';
import './amazon-locker.css';

class AmazonLocker extends React.Component {
    render() {
        const amzLockImg = {
            amzLocker: require('./Locker.png')
        };
        return (
            <div>
                <h2 id="amz-locker-title">Locker International checkout</h2>

                <div className="row m-0 d-none d-md-flex" id="locker-content">

                    <div className="col-6" id="locker-column-left">

                        <h3 id="locker-column-titles-one">Goals:</h3>

                            <p className="locker-column-para">Update the mobile version for foreign site use.</p>

                            <p className="locker-column-para">Also, to improve the search capabilities per region.</p>

                        <h3 id="locker-column-titles-two">Results:</h3>

                            <p className="locker-column-para">Added Locker option to Amazon sites outside of US. Improved searchability and navigation on checkout.</p>

                    </div>

                    <div className="col-6 text-center" id="locker-column-right">

                        <img className="img-fluid" src={amzLockImg.amzLocker} alt="Amazon Locker" />

                    </div>
                </div>

                <div className="d-md-none">
                    <h3 className="mobile-locker-column-titles">Goals:</h3>

                        <p className="locker-column-para-one">Update the mobile version for foreign site use.</p>

                        <p className="locker-column-para-two">Also, to improve the search capabilities per region.</p>

                    <h3 className="mobile-locker-column-titles">Results:</h3>

                        <p className="locker-column-para-three">Added Locker option to Amazon sites outside of US. Improved searchability and navigation on checkout.</p>

                    <img id="mobile-locker-image" className="img-fluid" src={amzLockImg.amzLocker} alt="Amazon Locker" />
                </div>
            </div>
        )
    }
}

export default AmazonLocker;