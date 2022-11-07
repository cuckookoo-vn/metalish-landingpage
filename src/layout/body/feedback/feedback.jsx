import { useEffect, useRef, useState } from 'react';
import './feedback.styles.scss';
import { Container } from 'react-bootstrap';
import DevelopmentTeamMember from '../../../components/development-team-member/development-team-member';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import FeedbackItem from './feedback-item/feedback-item';

const Feedback = ({ windowDimensions }) => {
  // translation
  const { t } = useTranslation();

  const images = {
    next: process.env.PUBLIC_URL + '/images/development-team/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/development-team/left-button.png',
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
    avatar1: process.env.PUBLIC_URL + '/images/feedback/MTP.png',
    avatar2: process.env.PUBLIC_URL + '/images/feedback/XoaiNon.png',
    avatar3: process.env.PUBLIC_URL + '/images/feedback/MatBiec.png',
    avatar4: process.env.PUBLIC_URL + '/images/feedback/LanNgoc.png',
  };

  const comments = [
    {
      name: 'Min Nguyen',
      grade: `${t('feedback.user-description-title.txt')}`,
      avatar: images.avatar1,
      summaryComment: `${t('feedback.user-summary-comment.lbl')}`,
      comment: `${t('feedback.user-full-comment.txt')}`,
    },
    {
      name: 'Jin Nguyen',
      // grade: `${t('feedback.user-description-title.txt')}`,
      grade: '12th grade student',
      avatar: images.avatar2,
      // summaryComment: `${t('feedback.user-summary-comment.lbl')}`,
      summaryComment: 'Interesting, good experience',
      comment:
        'I gained the confidence to use English in my daily life. With Metalish, I can meet and interact with others who have the same interest with me.',
      // comment: `${t('feedback.user-full-comment.txt')}`,
    },
    {
      name: 'User',
      grade: `${t('feedback.user-description-title.txt')}`,
      avatar: images.avatar1,
      summaryComment: `${t('feedback.user-summary-comment.lbl')}`,
      comment: `${t('feedback.user-full-comment.txt')}`,
    },
  ];

  // check width set data slide
  const checkWidthWindowSetSlideData = () => {
    let slideDataTemp = {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2,
    };

    if (windowDimensions.width > 1399.5) {
      slideDataTemp.slidesPerView = 2;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 2;
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
    <div className='feedback'>
      <span className='title-main'>{t('feedback.title.lbl')}</span>

      <Container>
        <div className='box-slide'>
          <Swiper
            slidesPerView={slideData.slidesPerView}
            spaceBetween={slideData.spaceBetween}
            slidesPerGroup={slideData.slidesPerGroup}
            // autoplay={{
            //   delay: 6000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true
            // }}
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
            <div className='box-feedback'>
              {comments.map((element, index) => (
                <SwiperSlide key={index}>
                  <FeedbackItem
                    src={element.avatar}
                    name={element.name}
                    grade={element.grade}
                    summary={element.summaryComment}
                    comment={element.comment}
                  />
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

export default Feedback;
