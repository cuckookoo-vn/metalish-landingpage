import './feedback.styles.scss';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Container } from 'react-bootstrap';
import FeedbackItem from './feedback-item/feedback-item';

const Feedback = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
    avatar1: process.env.PUBLIC_URL + '/images/feedback/MTP.png',
    avatar2: process.env.PUBLIC_URL + '/images/feedback/XoaiNon.png',
    avatar3: process.env.PUBLIC_URL + '/images/feedback/MatBiec.png',
    avatar4: process.env.PUBLIC_URL + '/images/feedback/LanNgoc.png',
    button: process.env.PUBLIC_URL + '/images/feedback/left-right-button.png',
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

  return (
    <>
      <div className='feedback'>
        <span className='title-main' data-aos='fade-up'>
          {t('feedback.title.lbl')}
        </span>

        <Container>
          <div data-aos='fade-up' className='box-slide'>
            <Swiper
              // slidesPerGroup={1}
              slidesPerView={windowDimensions.width > 767 ? 2 : 1}
              slidesPerGroup={windowDimensions.width > 767 ? 2 : 1}
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
              {comments.map((element, index) => (
                <SwiperSlide key={index}>
                  <div className='comment-box'>
                    <FeedbackItem
                      src={element.avatar}
                      name={element.name}
                      grade={element.grade}
                      summary={element.summaryComment}
                      comment={element.comment}
                    />
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
    </>
  );
};

export default Feedback;
