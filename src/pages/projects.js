import React from 'react';

import ProjectsHeader from '../components/projects_header/projects-header';
import AmazonFresh from '../components/amazon_fresh/amazon_fresh';
import AmazonLocker from '../components/amazon-locker/amazon-locker';
import Restaurant from '../components/restaurant/restaurant';
import EDisc from '../components/e-disc/e-disc';
import Hotel from '../components/hotel/hotel';


class Projects extends React.Component {
    render() {
        return (
            <div>
                <ProjectsHeader />
                <AmazonFresh />
                <AmazonLocker />
                <Restaurant />
                <EDisc />
                <Hotel />
            </div>
        )
    }
}

export default Projects;