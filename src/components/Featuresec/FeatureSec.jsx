import React from "react";
import FeaturedImg from '../../images/feature-sec-img.png'

const FeatureSec = () => {
    return (
        <>
            <div className="featured-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-center">
                                <img src={FeaturedImg} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <h1 className="fw-bold mb-1 mb-md-0">Best app for your modern lifestyle</h1>
                            <p className="my-0 my-md-4">
                                Increase productivity with a simple to-do app. app for
                                managing your personal budgets.
                            </p>
                            <ul>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureSec;
