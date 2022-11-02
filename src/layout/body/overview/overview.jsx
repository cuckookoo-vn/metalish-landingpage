import './overview.styles.scss';
import { useTranslation } from 'react-i18next';

const Overview = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    viewButton: process.env.PUBLIC_URL + '/images/overview/fish-eye-button.png',
  };

  return (
    <>
      <div
        className='overview'
        style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
      >
        <span className='title-main' data-aos='fade-up'>
          METALISH
        </span>
        <>
          {windowDimensions.width > 767.5 ? (
            <div className='content-wrapper' data-aos='fade-up'>
              {/* Image */}
              <div className='image-wrapper'>
                <img
                  alt='overview'
                  src={`${process.env.PUBLIC_URL}/images/explore/tour/1.png`}
                />
                <div
                  className='btn'
                  style={{ backgroundImage: `url(${images.viewButton}` }}
                ></div>
              </div>
              {/* Image */}

              {/* Content */}
              <div className='content'>
                <p>{t('overview.content_1.txt')}</p>
                <p>{t('overview.content_2.txt')}</p>
                <p>{t('overview.content_3.txt')}</p>
                <p>{t('overview.content_4.txt')}</p>
                <p>{t('overview.content_5.txt')}</p>
              </div>
              {/* Content */}
            </div>
          ) : (
            <div className='content-wrapper' data-aos='fade-up'>
              {/* Content */}
              <div className='content'>
                <p>{t('overview.content_1.txt')}</p>
                <p>{t('overview.content_2.txt')}</p>
                <p>{t('overview.content_3.txt')}</p>
                <p>{t('overview.content_4.txt')}</p>
                <p>{t('overview.content_5.txt')}</p>
              </div>
              {/* Content */}
              {/* Image */}
              <div className='image-wrapper'>
                <img
                  alt='overview'
                  src={`${process.env.PUBLIC_URL}/images/explore/tour/1.png`}
                />
                <div
                  className='btn'
                  style={{ backgroundImage: `url(${images.viewButton}` }}
                ></div>
              </div>
              {/* Image */}
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Overview;
