import { useTranslation } from 'react-i18next';
import './our-methods-item.styles.scss';

const OurMethodsItem = ({ src, type }) => {
  const { t } = useTranslation();

  const images = {
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
  };
  return (
    <div className='our-methods-item'>
      <div
        className='our-methods-item-box'
        style={{ backgroundImage: `url(${src})` }}
      >
        {type === 'class-type' ? (
          <>
            <div className='private-room-title'>
              {t('our-methods.private-room_title.lbl')}
            </div>
            <div className='talking-room-title'>
              {t('our-methods.talking-room_title.lbl')}
            </div>
            <span className='private-room-content'>
              {t('our-methods.private-room_content.txt')}
            </span>
            <span className='talking-room-content'>
              {t('our-methods.talking-room_content.txt')}
            </span>
          </>
        ) : (
          <span className='others-content'>
            {t(`our-methods.${type}_content.txt`)}
          </span>
        )}
      </div>
    </div>
  );
};

export default OurMethodsItem;
