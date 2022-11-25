import { useEffect, useRef, useState } from 'react';
import './our-methods.styles.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import OurMethodsItem from './our-methods-item/our-methods-item';
import { url } from '../../../url';

const OurMethods = ({ windowDimensions }) => {
  // translation
  const { t } = useTranslation();

  const images = {
    next: process.env.PUBLIC_URL + '/images/our-methods/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/our-methods/left-button.png',

    cooperationPic: `${url}/img/lp-our-methods/cooperation.png`,
    curriculumPic: `${url}/img/lp-our-methods/curriculum.png`,
    privateRoomPic: `${url}/img/lp-our-methods/private-room.png`,
    talkingRoomPic: `${url}/img/lp-our-methods/talking-room.gif`,
  };

  const methods = [
    {
      type: 'private-room',
      title: 'PRIVATE ROOM',
      src: images.privateRoomPic,
    },
    {
      type: 'talking-room',
      title: 'TALKING ROOM',
      src: images.talkingRoomPic,
    },
    {
      type: 'cooperation',
      title: 'COOPERATION',
      src: images.cooperationPic,
    },
    {
      type: 'curriculum',
      title: 'CURRICULUM',
      src: images.curriculumPic,
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
    setSlideData(checkWidthWindowSetSlideData); // eslint-disable-next-line
  }, [windowDimensions.width]);

  // button slide
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='our-methods'>
      <span className='title-main' data-aos='fade-up'>
        {t('our-methods.title.lbl')}
      </span>

      <Container>
        <div className='box-slide' data-aos='fade-up'>
          <Swiper
            slidesPerView={slideData.slidesPerView}
            spaceBetween={slideData.spaceBetween}
            slidesPerGroup={slideData.slidesPerGroup}
            preventClicks={true}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
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
            <div className='box-our-methods'>
              {methods.map((element, index) => (
                <SwiperSlide key={index}>
                  <OurMethodsItem
                    title={element.title}
                    type={element.type}
                    src={element.src}
                  />
                </SwiperSlide>
              ))}
            </div>
            <div
              ref={prevRef}
              data-aos='fade-right'
              className='icon-slide icon-next hidden-mobile'
            >
              <img className='icon-next' src={images.pre} alt='pre' />
            </div>
            <div
              ref={nextRef}
              data-aos='fade-left'
              className='icon-slide icon-pre hidden-mobile'
            >
              <img src={images.next} alt='next' />
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default OurMethods;
