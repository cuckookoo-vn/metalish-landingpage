import { useRef } from 'react';
import './our-methods.styles.scss';
import { useTranslation } from 'react-i18next';

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
    <div className='our-methods'>
      <span className='title-main' data-aos='fade-up'>
        {t('our-methods.title.lbl')}
      </span>

      <>
        <div data-aos='fade-up' className='box-slide'>
          <Swiper
            // slidesPerView={1}
            slidesPerView={1}
            spaceBetween={windowDimensions.width > 767 ? 30 : 5}
            slidesPerGroup={windowDimensions.width > 767 ? 4 : 3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className='mySwiper'
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <div className='box-member'>
              {methods.map((element, index) => (
                <SwiperSlide key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      style={{ width: '1500px', height: '650px' }}
                      alt={element.title}
                      src={element.frame}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div
              data-aos='fade-right'
              ref={prevRef}
              className='icon-slide icon-next hidden-mobile'
            >
              <img className='prev' src={images.button} alt='pre' />
            </div>
            <div
              data-aos='fade-left'
              ref={nextRef}
              className='icon-slide icon-pre hidden-mobile'
            >
              <img className='next' src={images.button} alt='next' />
            </div>
          </Swiper>
        </div>
      </>
    </div>
  );
};

export default OurMethods;
