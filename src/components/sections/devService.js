import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader1";
import Image from "../elements/Image";
// import visionImg1 from "../../assets/images/vision1.png";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

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
        "features-tiles section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-tiles-inner section-inner pt-0",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames(
        "tiles-wrap center-content",
        pushLeft && "push-left"
    );

    const sectionHeader = {
        title1: "Our ",
        title2: "NFT ",
        title3: "development services",
        paragraph:
            "we are creating products that combine cutting-edge technologies for a better now.",
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content"
                    />
                    <div className="x-about-vision-container">
                        <div className={tilesClasses}>
                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="mb-16">
                                            <Image
                                                src={require("./../../assets/images/devService1.png")}
                                                alt="Features tile icon 01"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="x-font-orange-h6 mt-0 mb-8">
                                            NFT Marketplace Design and
                                            Development
                                        </h4>
                                        <p className="m-0 text-sm">
                                            NFT Marketplace Design and
                                            Development with in-depth knowledge
                                            of ERC-721 and ERC-1155 standards,
                                            smart contracts and IPFS.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="tiles-item reveal-from-bottom"
                                data-reveal-delay="200"
                            >
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="mb-16">
                                            <Image
                                                src={require("./../../assets/images/devService2.png")}
                                                alt="Features tile icon 02"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="x-font-orange-h6 mt-0 mb-8">
                                            NFT Smart Contracts Audit
                                        </h4>
                                        <p className="m-0 text-sm">
                                            By providing NFT Smart Contracts
                                            Audit Services. We carefully test
                                            smart contracts on your NFT platform
                                            and ensure that contracts are free
                                            from breaches and bugs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="tiles-item reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="mb-16">
                                            <Image
                                                src={require("./../../assets/images/devService3.png")}
                                                alt="Features tile icon 03"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="x-font-orange-h6 mt-0 mb-8">
                                            NFT Marketplace Design and
                                            Development
                                        </h4>
                                        <p className="m-0 text-sm">
                                            NFT Marketplace Design and
                                            Development with in-depth knowledge
                                            of ERC-721 and ERC-1155 standards,
                                            smart contracts and IPFS.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="mb-16">
                                            <Image
                                                src={require("./../../assets/images/devService4.png")}
                                                alt="Features tile icon 04"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="x-font-orange-h6 mt-0 mb-8">
                                            NFT Smart Contracts Audit
                                        </h4>
                                        <p className="m-0 text-sm">
                                            By providing NFT Smart Contracts
                                            Audit Services. We carefully test
                                            smart contracts on your NFT platform
                                            and ensure that contracts are free
                                            from breaches and bugs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
