import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader1';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title1: 'Custom ',
    title2: 'advisors services ',
    title3: 'for your business ',
    paragraph: 'we are creating products that combine cutting-edge technologies for a better now!'
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

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content1">
                  <div className = "x-font-h6"  style = {{marginBottom: "20px"}}>
                    Blockchain Products
                  </div>
                  <p className = "x-font-p">
                   We are creating products that combine cutting- edge technologies for a better now
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <button className = "x-button1 x-font-p"><ArrowForwardIcon/><span className = "x-testimonial-footer">LEARN MORE</span></button>
                </div>
                </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content2">
                  <div className = "x-font-h6"  style = {{marginBottom: "20px"}}>
                    Blockchain Products
                  </div>
                  <p className = "x-font-p">
                   We are creating products that combine cutting- edge technologies for a better now
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <button className = "x-button1 x-font-p"><ArrowForwardIcon/><span className = "x-testimonial-footer">LEARN MORE</span></button>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content3">
                  <div className = "x-font-h6"  style = {{marginBottom: "20px"}}>
                    Blockchain Products
                  </div>
                  <p className = "x-font-p">
                   We are creating products that combine cutting- edge technologies for a better now
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <button className = "x-button1 x-font-p"><ArrowForwardIcon/><span className = "x-testimonial-footer">LEARN MORE</span></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;