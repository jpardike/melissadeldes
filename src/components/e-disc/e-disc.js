import React from 'react';
import './e-disc.css';

class EDisc extends React.Component {
    render() {
        const eDiscImg = {
            spectra: require('./LHSpectra.png'),
            mobileSpectra: require('./MBLHSpectra.png')
        };
        return (
            <div id="e-discovery-bg">
                <div className="row m-0">
                    <h2 id="e-disc-title">DIY eDiscovery Platform</h2>
                </div>
                <div className="row m-0 d-none d-md-flex">
                    <div className="col-6 e-disc-columns">
                        <h3 className="e-disc-column-titles">Goals:</h3>

                            <p className="e-disc-paras">Design a DIY eDiscovery Platform that allowed clients to upload, search, review and produce data for smaller litigations or investigations within their companies..</p>
                    </div>
                    <div className="col-6 e-disc-columns">
                        <h3 className="e-disc-column-titles">Results:</h3>

                            <p className="e-disc-paras">A first of its kind application that was eagerly adopted by existing clients who’s larger cases had been serviced by this company. Many became design partners to help us continue to improve the functionality based off of its easy to use workflows.</p>
                    </div>
                </div>
                <div className="row m-0 justify-content-center d-none d-md-flex">
                    <img className="img-fluid" id="e-disc-image" src={eDiscImg.spectra} alt="" />
                </div>
                <div className="d-md-none">
                    <h3 className="e-disc-column-titles">Goals:</h3>

                        <p className="e-disc-paras">Design a DIY eDiscovery Platform that allowed clients to upload, search, review and produce data for smaller litigations or investigations within their companies..</p>

                    <h3 className="e-disc-column-titles">Results:</h3>

                        <p className="e-disc-paras">A first of its kind application that was eagerly adopted by existing clients who’s larger cases had been serviced by this company. Many became design partners to help us continue to improve the functionality based off of its easy to use workflows.</p>

                    <img id="e-disc-image" className="img-fluid" src={eDiscImg.mobileSpectra} alt="" />
                </div>
            </div>
        )
    }
}

export default EDisc;