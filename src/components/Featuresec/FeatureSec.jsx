import React from "react";
import './feature.css';
import FeaturedImg from '../../images/feature-sec-img.png';
import PerformanceIcon from '../../images/speed-testing-icon.png';
import prototyping from '../../images/prototyping-icon.png';
import vector from '../../images/vector-icon.png';
const FeatureSec = () => {
    return (
        <>
            <div className="featured-sec s-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-center">
                                <img src={FeaturedImg} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h2 className="fw-bold mb-1 mb-md-0">Awesome apps features</h2>
                            <p className="mb-3 mb-md-5">
                                Increase productivity with a simple to-do app. app for
                                managing your personal budgets.
                            </p>
                            <ul>
                                <li>
                                    <img src={PerformanceIcon} alt="fast performance icon" />
                                    <div>
                                        <h3 className="h5">Fast Performance</h3>
                                        <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={prototyping} alt="fast performance icon" />
                                    <div>
                                        <h3 className="h5">Prototyping</h3>
                                        <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={vector} alt="fast performance icon" />
                                    <div>
                                        <h3 className="h5">Vector Editing</h3>
                                        <p>Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="jackpot">
                                <h3 className="h1">Smart jackpots that you may love this anytime & anywhere</h3>
                                <p>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureSec;
