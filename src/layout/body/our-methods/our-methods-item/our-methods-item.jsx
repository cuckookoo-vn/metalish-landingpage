import { useTranslation } from 'react-i18next';
import './our-methods-item.styles.scss';

const OurMethodsItem = ({ type, frame, src }) => {
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
        style={{ backgroundImage: `url(${frame})` }}
      >
        <span className='item-content'>
          {t(`our-methods.${type}_content.txt`)}
        </span>
        <img alt={type} src={src} />
      </div>
    </div>
  );
};

export default OurMethodsItem;
