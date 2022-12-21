import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

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

  const sectionHeader = {
    title: "Rules and Regulations",
    paragraph:
      "Here are the rules and regulations you guys need to follow while participating in these events",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event number 1 !
                </div>
                <h3 className="mt-0 mb-12">Adorn the Candle.</h3>
                <p className="m-0">
                  Customization is really everybody’s choice these days. We can
                  get plenty of candles in the market but they are not as per
                  our choices. Through this event, you get to design the candles
                  to your liking. You can portray your creativity and
                  inventiveness. Plain white candles will be provided to the
                  participants. You need to bring all the other decorative
                  materials that you need on your own
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Candle.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event number 2!
                </div>
                <h3 className="mt-0 mb-12">DIY Greets </h3>
                <p className="m-0">
                  Handmade greeting cards are indeed unique and loved by all. As
                  the name suggests you need to make greeting cards that can be
                  specific to any occasion or event of your choice. Christmas
                  and New Year cards are highly anticipated. For this event, you
                  will be provided with sheets. You need to bring all the
                  decoration stuff (Colours, stars, beats etc.,) by yourself.
                  Dimension Of Card : 17cm length and 10cm width
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/DIY.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event number 3 !
                </div>
                <h3 className="mt-0 mb-12">Mark the Flips</h3>
                <p className="m-0">
                  Pretty bookmarks attract everyone. In this event, you need to
                  splash your creativity on the bookmarks. Be it with some
                  quotes, designs, or howsoever you like it. Kindly refer to the
                  screenshots attached This event is totally up to you, how you
                  want to create and design. You need to get all the required
                  material on your own. Use only handmade sheets or thick colour
                  sheets, no other kind of sheets will be used.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Flip.png")}
                  alt="Features split 03"
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
