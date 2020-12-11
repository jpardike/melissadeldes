import React from 'react';

import Goals from '../components/goals/goals';
import Presence from '../components/presence/presence';
import Needs from '../components/needs/needs';
import Efficiently from '../components/efficiently/efficiently';

class About extends React.Component {
    render() {
        return (
            <div>
                <Goals />
                <Presence />
                <Needs />
                <Efficiently />
            </div>
        )
    }
}

export default About;