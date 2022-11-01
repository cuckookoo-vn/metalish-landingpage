import './feedback.styles.scss';
import { useTranslation } from 'react-i18next';

const Feedback = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
    avatar: process.env.PUBLIC_URL + '/images/feedback/MTP.png',
    button: process.env.PUBLIC_URL + '/images/feedback/left-right-button.png',
  };

  return (
    <>
      <div className='feedback'>
        <span className='title-main' data-aos='fade-up'>
          {t('feedback.title.lbl')}
        </span>
        <>
          <div className='content-wrapper'>
            <div className='content' data-aos='fade-up'>
              <div
                className='button-right'
                style={{ backgroundImage: `url(${images.button})` }}
              ></div>
              <div
                className='button-left'
                style={{ backgroundImage: `url(${images.button})` }}
              ></div>
              <div
                className='comment-box'
                style={{ backgroundImage: `url(${images.commentBox})` }}
              >
                <div
                  className='avatar'
                  style={{ backgroundImage: `url(${images.commentAvatar})` }}
                >
                  <img src={images.avatar} />
                  <h4 className='user-name'>User name</h4>
                  <span className='user-grade'>
                    {t('feedback.user-description-title.txt')}
                  </span>
                  <h2 className='user-summary-title'>
                    {t('feedback.user-summary-comment.lbl')}
                  </h2>
                  <span className='user-full-comment'>
                    {t('feedback.user-full-comment.txt')}
                  </span>
                </div>
              </div>
              <div
                className='comment-box'
                style={{
                  backgroundImage: `url(${images.commentBox})`,
                  marginLeft: '20%',
                }}
              >
                <div
                  className='avatar'
                  style={{ backgroundImage: `url(${images.commentAvatar})` }}
                >
                  <img src={images.avatar} />
                  <h4 className='user-name'>User name</h4>
                  <span className='user-grade'>
                    {t('feedback.user-description-title.txt')}
                  </span>
                  <h2 className='user-summary-title'>
                    {t('feedback.user-summary-comment.lbl')}
                  </h2>
                  <span className='user-full-comment'>
                    {t('feedback.user-full-comment.txt')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Feedback;
