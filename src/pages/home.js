import React from 'react';

import Hero from '../components/hero/hero';
import Benefits from '../components/benefits/benefits';
import Companies from '../components/companies/companies';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Benefits />
                <Companies />
            </div>
        )
    }
}

export default Home;