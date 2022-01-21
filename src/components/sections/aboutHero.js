import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import Button from "../elements/Button";
import Image from "../elements/Image";

// const buttonStyle = {
//     backgroundImage: "linear-gradient( to right,#f1711d 0%,#e23b0a 100% )",
//     border: "none",
// };

const propTypes = {
    ...SectionProps.types,
};

const defaultProps = {
    ...SectionProps.defaults,
};

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const outerClasses = classNames(
        "hero section center-content",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "hero-inner about-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content-about">
                        <h1
                            className="reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            About Us
                        </h1>
                    </div>
                    <div
                        className="hero-figure-about reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <Image
                            src={require("./../../assets/images/about-top.png")}
                            alt="building"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
