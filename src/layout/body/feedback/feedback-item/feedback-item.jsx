import './feedback-item.styles.scss';

const FeedbackItem = ({ src, grade, name, summary, comment }) => {
  const images = {
    commentBox: process.env.PUBLIC_URL + '/images/feedback/comment-box.png',
    commentAvatar:
      process.env.PUBLIC_URL + '/images/feedback/comment-avatar.png',
  };
  return (
    <div className='core-team-member'>
      <div
        className='core-team-member-box'
        style={{ backgroundImage: `url(${images.commentBox})` }}
      >
        <div
          className='avatar'
          style={{
            backgroundImage: `url(${images.commentAvatar})`,
          }}
        ></div>
        <img className='image-member' src={src} alt='comment-avatar' />
        <h4 className='user-name'>{name}</h4>
        <span className='user-grade'>{grade}</span>
        <h2 className='user-summary-title'>{summary}</h2>
        <div className='user-comment'>{comment}</div>
      </div>
      {/*<h2 className='user-summary-title'>
    {t('feedback.user-summary-comment.lbl')}
  </h2>
  <span className='user-full-comment'>
    {t('feedback.user-full-comment.txt')}
  </span> */}
    </div>
  );
};

export default FeedbackItem;
