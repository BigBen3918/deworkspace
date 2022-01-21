import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader1';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title1: 'The ',
    title2: 'Blockchain pioneer ',
    title3: 'is the Best Crowdsale Service!',
    paragraph: 'we are creating products that combine cutting-edge technologies for a better now.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <Image
                    src={require('./../../assets/images/crowdSale.png')}
                    alt="Features tile icon 01"
                 />
              </div>
            </div>

            <div className="tiles-item-crowdSale reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                </div>
                <div className="features-tiles-item-content">
                    <p className="m-0 text-sm">
                        Built on proven security and technological record. Ahigh level of digital asset protection and safe record of transactions.Built on fair-exchange protocols enabling cryptocurrency atomic swaps to mitigate counter-part risk. Advisory and technology services to execute third-party ICOs.
                        <br/>
                        Proven Security and technological record. A high level of digital asset protection and safe record A high level of digital asset protection and safe record of transactions.
                    </p>
                </div>
              </div>
            </div>
            </div>
            {/* <div style = {{textAlign: "center"}}>
                <Image 
                    src = {require('./../../assets/images/about.png')}
                    alt = "about-back"
                />
            </div> */}
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;