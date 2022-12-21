import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

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
    title: 'Register Here !',
    paragraph: 'Scroll down and fill the google form for the event you want to participate'
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
                <div className="testimonial-item-content">
                <h3>Adorn the Candels</h3>
                <p className="text-sm mb-0">
                    Date : 22nd December 2022. 
                      </p>
                      <p className="text-sm mb-0">
                         Decorate the candels as per your creativity and make someone smile. Fill the form below !
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="https://forms.gle/PH7kzReEBTbwXKza7">Register Now!</a>
                  </span>
                </div> 
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <h3>DIY Greets</h3>
                <p className="text-sm mb-0">
                    Date : 23rd December 2022. 
                      </p>
                      <p className="text-sm mb-0">
                        Spread your love and affection through your greetings. Fill the form below !
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="https://forms.gle/ZS7MD4VPboxhgvg77">Register Now!</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <h3>Mark the flips</h3>
                <p className="text-sm mb-0">
                    Date : 24th December 2022. 
                      </p>
                      <p className="text-sm mb-0">
                         Mark someone's book with your artistry. Fill the form below !
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="https://forms.gle/pVoKwSGSPH1zMWxn8">Register Now!</a>
                  </span>
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