import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader1';
import {Grid, TextField} from '@material-ui/core';
import {
    withStyles
  } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        '& label': {
            color: '#9a969c',
            },
        '& input': {
            color: "white"
            },
      '& label.Mui-focused': {
        color: '9a967f',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#444444',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#444444',
        },
        '&:hover fieldset': {
          borderColor: '#222222',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#777777',
        },
      },
    },
  })(TextField);

const buttonStyle = {backgroundImage: "linear-gradient( to right,#f1711d 0%,#e23b0a 100% )", border:"none" }

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
    'features-tiles-inner section-inner x-contact-bg',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title1: ' ',
    title2: 'Discuss Your  ',
    title3: 'Project with our Specialists!',
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
            <div className="reveal-from-bottom" data-reveal-delay="200">
                <div className = "x-font-h6 mb-16">Tell us about you</div>
                <Grid container spacing = {3} className = "x-contact-container">
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <CssTextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <CssTextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <CssTextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <CssTextField
                            label="Contact Number"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <div className = "x-font-h6 mt-16 mb-16">Tell us about your project</div>
                <div>
                    <CssTextField
                            label="How can we help you?"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows = {4}
                        />
                </div>
                <div className = "x-contact-submit-button">
                    <button className="button button-primary button-wide-mobile button-sm" style = {buttonStyle}>Submit</button>
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