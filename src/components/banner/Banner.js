import React from "react";
import Button from '../button/Button';
import './banner.css'
import mobileImg from '../../images/banner-mobile.png';

const BannerSec = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-circle"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center ps-0 ps-md-3 ps-lg-5">
              <span>#1 Editiors Choice App of 2020</span>
              <h1 className="fw-bold mb-1 mb-md-0">Best app for your modern lifestyle</h1>
              <p className="my-0 my-md-4">
                Increase productivity with a simple to-do app. app for managing
                your personal budgets.
              </p>
              <Button title="Try for free"/>
              <button className="btn">Watch Demo Video</button>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <img src={mobileImg} className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSec;
