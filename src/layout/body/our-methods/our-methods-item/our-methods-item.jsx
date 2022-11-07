import './our-methods-item.styles.scss';

const OurMethodsItem = ({ src, type }) => {
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
        {/* <div
          className='avatar'
          style={{
            backgroundImage: `url(${images.commentAvatar})`,
          }}
        ></div>
        <img className='user-avatar' src={src} alt='comment-avatar' />
        <h4 className='user-name'>{name}</h4>
        <span className='user-grade'>{grade}</span>
        <h2 className='user-summary-title'>{summary}</h2>
         <div className='user-comment'>{comment}</div> */}
      </div>
    </div>
  );
};

export default OurMethodsItem;
