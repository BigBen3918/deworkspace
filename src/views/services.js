import React from 'react';
// import sections
import ServiceHero from '../components/sections/serviceHero';
import DevService from '../components/sections/devService';
import NftService from '../components/sections/nftService';
import Contact from '../components/sections/contact';
import Cta from '../components/sections/Cta';

const Services = () => {

  return (
    <>
      <ServiceHero className="illustration-section-01" />
      <DevService />
      <NftService />
      <Contact />
      <Cta split />
    </>
  );
}

export default Services;