import { useEffect, useRef, useState } from 'react';
import './our-methods.styles.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import OurMethodsItem from './our-methods-item/our-methods-item';

const OurMethods = ({ windowDimensions }) => {
  // translation
  const { t } = useTranslation();

  const images = {
    next: process.env.PUBLIC_URL + '/images/our-methods/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/our-methods/left-button.png',
    classType: process.env.PUBLIC_URL + '/images/our-methods/2-class-type.png',
    cooperation: process.env.PUBLIC_URL + '/images/our-methods/cooperation.png',
    curriculum: process.env.PUBLIC_URL + '/images/our-methods/curriculum.png',
  };

  const methods = [
    {
      type: 'class-type',
      frame: images.classType,
    },
    {
      type: 'cooperation',
      frame: images.cooperation,
    },
    {
      type: 'curriculum',
      frame: images.curriculum,
    },
  ];

   // check width set data slide
   const checkWidthWindowSetSlideData = () => {
    let slideDataTemp = {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
    };

    if (windowDimensions.width > 1399.5) {
      slideDataTemp.slidesPerView = 1;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 1;
    } else if (windowDimensions.width > 991.5) {
      slideDataTemp.slidesPerView = 1;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 1;
    } else {
      slideDataTemp.slidesPerView = 1;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 1;
    }
    return slideDataTemp;
  };

  const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData);

  useEffect(() => {
    setSlideData(checkWidthWindowSetSlideData);
  }, [windowDimensions.width]);


  // button slide
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='our-methods'>
      <span className='title-main'>{t('our-methods.title.lbl')}</span>

      <Container>
        <div className='box-slide'>
          <Swiper
            slidesPerView={slideData.slidesPerView}
            spaceBetween={slideData.spaceBetween}
            slidesPerGroup={slideData.slidesPerGroup}
            preventClicks={true}
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
                  <OurMethodsItem image={element.frame} type={element.type} />
                </SwiperSlide>
              ))}
            </div>
            <div ref={prevRef} className='icon-slide icon-next hidden-mobile'>
              <img className='icon-next' src={images.pre} alt='pre' />
            </div>
            <div ref={nextRef} className='icon-slide icon-pre hidden-mobile'>
              <img src={images.next} alt='next' />
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default OurMethods;
