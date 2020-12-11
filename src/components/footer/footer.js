import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="p-0">
                <div className="d-none d-md-block">
                    <footer id="footer">
                        <p id="footer-text">Dilectio Design copyright 2020</p>
                    </footer>
                </div>

                <div className="d-md-none">
                    <footer className="text-center" id="footer">
                        <p id="footer-text">Dilectio Design copyright 2020</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer;