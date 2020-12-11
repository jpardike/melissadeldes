import React from 'react';
import './goals.css';

class Goals extends React.Component {
    render() {
        return (
            <div>
                <h2 id="goals-title">Our goals and how we can help</h2>

                <p className="goals-paras">Our goals are to help lift up companies and individuals that are typically not supported by large agencies or general financial outlets. Whether that be minorities, POC, LGTB, women, physically challenged, or senior ran companies, we want to help you connect to your audience/customers and to realize your best potential.</p>

                <p className="goals-paras">Why do we want to do this? We believe that diversity energizes cities and towns stagnant of culture in positive ways. It fosters new ideas and growth at a much faster pace and in turn creates more opportunities for everyone by demonstrating the potential of your dreams and hard work and how this outcome can be had by everyone.</p>

                <p id="goals-para-bottom">How can we help you? Below are the some of the services we offer. And if you’re not sure what type of help you need, connect with us, it is often hard to put a finger on what isn’t quite working. That’s what we’re here for. We are more than a design company. We are here to help you navigate the challenges of running a company and in turn make your business dreams come true.</p>
            </div>
        )
    }
}

export default Goals;