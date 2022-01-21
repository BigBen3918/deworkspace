import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
// import SectionHeader from './partials/SectionHeader';
import Image from "../elements/Image";
import Button from "../elements/Button";

const buttonStyle = {
    backgroundImage: "linear-gradient( to right,#f1711d 0%,#e23b0a 100% )",
    border: "none",
    marginTop: "40px",
    marginLeft: "20px",
};

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-split-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
        "split-wrap",
        invertMobile && "invert-mobile",
        invertDesktop && "invert-desktop",
        alignTop && "align-top"
    );

    // const sectionHeader = {
    //     title: "Workflow that just works",
    //     paragraph:
    //         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
    // };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <h3 className="mt-0 mb-12">
                                    <span
                                        style={{ color: "rgb(241, 110, 28)" }}
                                    >
                                        Efficient Computing{" "}
                                    </span>
                                    Services and blockchain feagures
                                </h3>
                                <p className="m-0">
                                    Institutional ICO & token listing. An ICO
                                    service going from planning and execution of
                                    ICO campaign to providing ICO token
                                    liquidity via listing on CryptiBIT at the
                                    outset of the ICO. Listing of currencies
                                    following a technical selection process.
                                </p>
                                <Button wideMobile style={buttonStyle}>
                                    About us
                                </Button>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/about.png")}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
