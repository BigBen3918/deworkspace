import React from 'react';
// import sections
import AboutHero from '../components/sections/aboutHero';
import Vision from '../components/sections/about-vision';
import CrowdSale from '../components/sections/crowdSale';
import Cta from '../components/sections/Cta';

const AboutUs = () => {

  return (
    <>
      <AboutHero className="illustration-section-01" />
      <Vision />
      <CrowdSale />
      <Cta split />
    </>
  );
}

export default AboutUs;