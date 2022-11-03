import { useRef } from 'react';
import './our-methods.styles.scss';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Container } from 'react-bootstrap';

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

      <Container>
        <div data-aos='fade-up' className='box-slide'>
          <Swiper
            // slidesPerView={3}
            slidesPerView={1}
            slidesPerGroup={1}
            // spaceBetween={windowDimensions.width > 767 ? 30 : 5}
            // slidesPerGroup={windowDimensions.width > 767 ? 4 : 3}
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
            {methods.map((element, index) => (
              <SwiperSlide key={index}>
                {/* <img style={{height: '650px'}} alt={element.title} src={element.frame} /> */}
                <div
                  className='box'
                  style={{ backgroundImage: `url(${element.frame})` }}
                >
                  {element.title === 'class-type' ? (
                    <></>
                  ) : (
                    // <div className='class-type'>
                    //   <div className='type-1'>
                    //     <h3>{t('our-methods.private-room_title.lbl')}</h3>
                    //     <span>hhdhdh</span>
                    //   </div>
                    //   <div className='type-2'>
                    //     <h3>{t('our-methods.talking-room_title.lbl')}</h3>
                    //     <span>
                    //       {t('our-methods.talking-room_content.txt')}
                    //     </span>
                    //   </div>
                    // </div>
                    <span>SPAN</span>
                  )}
                </div>
              </SwiperSlide>
            ))}
            <div
              data-aos='fade-right'
              ref={prevRef}
              className='icon-slide icon-next hidden-mobile'
            >
              <img className='prev icon-next' src={images.button} alt='pre' />
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
      </Container>
    </div>
  );
};

export default OurMethods;
