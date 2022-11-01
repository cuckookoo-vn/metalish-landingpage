import React from 'react';
import { useTranslation } from 'react-i18next';
import './key-features-item.styles.scss';

const KeyFeaturesItem = ({ src, alt, last, title, content }) => {
  const { t } = useTranslation();

  const images = {
    frame: process.env.PUBLIC_URL + '/images/key-features/frame.png',
  };

  return (
    <>
      <div className={!last ? 'key-features-item' : 'key-features-item-last'}>
        <img className='icon' alt={alt} src={src} />
        <span>{title}</span>
        <div
          className='overlay'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <div class='content'>{content}</div>
        </div>
      </div>

      {/* <span>j</span> */}
    </>
  );
};

export default KeyFeaturesItem;
