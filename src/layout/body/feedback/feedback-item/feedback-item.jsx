import './feedback-item.styles.scss';

const FeedbackItem = ({ src, grade, name, summary, comment }) => {
  const images = {
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
  };
  return (
    <div className='feedback-item'>
      <div
        className='feedback-item-box'
        style={{ backgroundImage: `url(${images.commentBox})` }}
      >
        <div
          className='avatar'
          style={{
            backgroundImage: `url(${images.commentAvatar})`,
          }}
        ></div>
        <img className='user-avatar' src={src} alt='comment-avatar' />
        <h4 className='user-name'>{name}</h4>
        <span className='user-grade'>{grade}</span>
        <h2 className='user-summary-title'>{summary}</h2>
        <span className='user-comment'>{comment}</span>
      </div>
    </div>
  );
};

export default FeedbackItem;
