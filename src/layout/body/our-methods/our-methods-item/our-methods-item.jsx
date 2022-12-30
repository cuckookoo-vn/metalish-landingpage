import { useTranslation } from 'react-i18next';
import './our-methods-item.styles.scss';
import {url} from "../../../../url";

const OurMethodsItem = ({ type, title, src }) => {
  const { t } = useTranslation();

  const images = {
    commentBox: url + '/images/feedback/comment-box.png',
    commentAvatar:
      url + '/images/feedback/comment-avatar.png',
    frame: url + '/images/our-methods/method-frame.png',
  };

  return (
    <div className='our-methods-item'>
      <div
        className='our-methods-item-box'
        style={{ backgroundImage: `url(${images.frame})` }}
      >
        <span className='method-title'>{title}</span>
        <span className='item-content'>
          {t(`our-methods.${type}_content.txt`)}
        </span>
        <img className="lazyload" alt={type} data-src={src} />
      </div>
    </div>
  );
};

export default OurMethodsItem;
