import React from "react";
import BannerSec from '../components/banner/Banner';
import CompanySec from '../components/Companies/CompanySec';
import FeatureSec from '../components/Featuresec/FeatureSec';

const homePage = () => {
  return (
    <>
      <BannerSec />
      <CompanySec />
      <FeatureSec />
    </>
  );
};

export default homePage;
