import './video-proposal.styles.scss';
const VideoProposal = () => {
  const srcDefault = 'https://d2qh7rlng6g9al.cloudfront.net/video/Video_Proposal.mp4';
  // const srcError =
  //   'https://ik.imagekit.io/hngejsvtfd/AroundTheWould_Cuckookoo_VideoProposal_v6_ncs.mp4';


  return (
    <div className='video-proposal' id='video-introduce'>
            <video
            autoPlay
            muted
            loop
            data-src="https://d2qh7rlng6g9al.cloudfront.net/video/Video_Proposal.mp4"
            className="lazyload video"
          ></video>
    </div>
  );
};

export default VideoProposal;
