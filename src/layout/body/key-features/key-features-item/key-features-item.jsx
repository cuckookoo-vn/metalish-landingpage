import './key-features-item.styles.scss';
import {url} from "../../../../url";

const KeyFeaturesItem = ({ src, alt, title, content }) => {
  const images = {
    frame: url + '/images/key-features/frame.png',
  };

  return (
    <div className='key-features-item'>
      <img className="lazyload" alt={alt} data-src={src} />
      <span>{title}</span>
      <div
        className='lazyload overlay'
        data-bgset={images.frame}
        // style={{ backgroundImage: `url(${images.frame})` }}
      >
        <div className='title'>{title}</div>
        <div className='content'>{content}</div>
      </div>
    </div>
  );
};

export default KeyFeaturesItem;
