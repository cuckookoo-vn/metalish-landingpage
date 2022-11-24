import './advertising.scss';
import { useTranslation } from 'react-i18next';

const Advertising = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    bgAdvertising:
      'https://metalish.s3.ap-northeast-2.amazonaws.com/img/lp-explore-tour/advertising/billboard-advertising-web.png',
    bgAdvertisingMobile:
    'https://metalish.s3.ap-northeast-2.amazonaws.com/img/lp-explore-tour/advertising/billboard-advertising-mobile.png',
  };

  return (
    <div className='advertising'>
      <span className='title-main' data-aos='fade-up'>
        {t('advertising.titleMain')}
      </span>

      <div
        className='advertising-image'
        style={{
          backgroundImage: `url(${
            windowDimensions.width > 767.5
              ? images.bgAdvertising
              : images.bgAdvertisingMobile
          })`,
        }}
      >
        <span
          className='title title-1'
          data-aos-anchor-placement='bottom-bottom'
          data-aos='zoom-in'
        >
          {t('advertising.title1')}
        </span>

        <span
          className='title title-2'
          data-aos-anchor-placement='bottom-bottom'
          data-aos='zoom-in'
        >
          {t('advertising.title2')}
        </span>
      </div>
    </div>
  );
};

export default Advertising;
