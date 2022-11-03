import React from 'react';
import { useTranslation } from 'react-i18next';
import './key-features-item.styles.scss';

const KeyFeaturesItem = ({ src, alt, last }) => {
  const { t } = useTranslation();

  const images = {
    frame: process.env.PUBLIC_URL + '/images/key-features/frame.png',
  };

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            className={!last ? 'key-features-icon' : 'key-features-icon-last'}
            alt={alt}
            src={src}
            data-aos='zoom-in-up'
          />
        </div>
        <div
          className='flip-card-back'
          style={{ backgroundImage: `url(${images.frame}` }}
        >
          <p>{t(`key-features_${alt}.txt`)}</p>
        </div>
      </div>
    </div>
    // <div className={!last ? 'key-features-icon' : 'key-features-icon-last'}>
    //   {/* <div class='flip-card'> */}
    //     <div class='flip-card-inner'>
    //       <div class='flip-card-front'>
    //         <img
    //           className={!last ? 'key-features-icon' : 'key-features-icon-last'}
    //           alt={alt}
    //           src={src}
    //           data-aos='zoom-in-up'
    //         />{' '}
    //       </div>
    //       <div class='flip-card-back'>
    //         {/* <h1>John Doe</h1>
    //         <p>Architect & Engineer</p>
    //         <p>We love that guy</p> */}
    //       </div>
    //     </div>
    //   {/* </div> */}
    // </div>
  );
};

export default KeyFeaturesItem;
