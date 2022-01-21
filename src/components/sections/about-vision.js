import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import visionImg from '../../assets/images/vision.png';
import visionImg1 from '../../assets/images/vision1.png';


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
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title1: 'Our',
    title2: 'Vision',
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
          <div className = "x-about-vision-container">
            <div className = "reveal-from-bottom">
                <div className = "x-vision-content1"><img src = {visionImg} alt = "vision"/></div>
                <div className = "x-vision-content2">
                    <div><img src = {visionImg1} alt = "vision-tip"/></div>
                    <div className = "x-font-orange-h5 mt-1">Built on proven security and technological record.</div>
                    <div className = "x-font-h5 mt-1">A high level of digital asset protection and safe record of transaction.</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;