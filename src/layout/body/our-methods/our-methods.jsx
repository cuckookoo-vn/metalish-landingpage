import './our-methods.styles.scss';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

const OurMethods = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    classType: process.env.PUBLIC_URL + '/images/our-methods/2-class-type.png',
    cooperation: process.env.PUBLIC_URL + '/images/our-methods/cooperation.png',
    curriculum: process.env.PUBLIC_URL + '/images/our-methods/curriculum.png',
    button:
      process.env.PUBLIC_URL + '/images/our-methods/left-right-button.png',
  };

  const methods = [
    {
      title: 'class-type',
      frame: images.classType,
    },
    {
      title: 'cooperation',
      frame: images.cooperation,
    },
    {
      title: 'curriculum',
      frame: images.curriculum,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className='our-methods'>
        <span className='title-main' data-aos='fade-up'>
          {t('our-methods.title.lbl')}
        </span>
        <>
          <div className='content-wrapper' data-aos='fade-up'>
            <div className='content'>
              <div
                className='button-right'
                style={{ backgroundImage: `url(${images.button})` }}
              ></div>
              <div
                className='button-left'
                style={{ backgroundImage: `url(${images.button})` }}
              ></div>

              {/*         
              {/* Slide */}
              {/* <SwiperSlide> */}
              <div
                className='background'
                style={{ backgroundImage: `url(${images.classType})` }}
              >
                <h3>{t('our-methods.private-room_title.lbl')}</h3>
                <span>{t('our-methods.private-room_content.txt')}</span>
                <h3 style={{ marginLeft: '47%' }}>
                  {t('our-methods.talking-room_title.lbl')}
                </h3>
                <span style={{ marginLeft: '47%' }}>
                  {t('our-methods.talking-room_content.txt')}
                </span>
              </div>

              {/* </SwiperSlide> */}
              {/* Slide */}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default OurMethods;
