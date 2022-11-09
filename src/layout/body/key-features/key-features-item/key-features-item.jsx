import './key-features-item.styles.scss';

const KeyFeaturesItem = ({ src, alt, title, content, k }) => {
  const images = {
    frame: process.env.PUBLIC_URL + '/images/key-features/frame.png',
  };

  return (
    <div key={k} className='key-features-item'>
      <img alt={alt} src={src} />
      <span>{title}</span>
      <div
        className='overlay'
        style={{ backgroundImage: `url(${images.frame})` }}
      >
        <div className='title'>{title}</div>
        <div className='content'>{content}</div>
      </div>
    </div>
  );
};

export default KeyFeaturesItem;
