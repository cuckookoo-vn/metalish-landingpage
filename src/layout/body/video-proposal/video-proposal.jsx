import React from 'react';
import './video-proposal.styles.scss';

const VideoProposal = () => {
  return (
    <div>
      <img
        className='img'
        src={`${process.env.PUBLIC_URL}/images/header/picture.png`}
        alt=''
      />
    </div>
  );
};

export default VideoProposal;
