import React from 'react';
import { useTranslation } from 'react-i18next';
import './key-features-item.styles.scss';

const KeyFeaturesItem = ({ src, alt, last }) => {
  const { t } = useTranslation();

  const images = {
    frame: process.env.PUBLIC_URL + '/images/key-features/frame.png',
  };

  return (
    <img
      className={!last ? 'key-features-icon' : 'key-features-icon-last'}
      alt={alt}
      src={src}
      data-aos='zoom-in-up'
    />
  );
};

export default KeyFeaturesItem;
