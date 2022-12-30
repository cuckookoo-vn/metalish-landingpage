import './development-team-member.scss';
import {url} from "../../url";

const DevelopmentTeamMember = ({ image, name, position }) => {
  const images = {
    boxMember:
      url + '/images/development-team/avatar-border.png',
  };
  return (
    <div className='development-team-member'>
      <div
        className='development-team-member-box'
        style={{ backgroundImage: `url(${images.boxMember})` }}
      >
        <img className='lazyload image-member' data-src={image} alt='member' />
        <span className='name-member'>{name}</span>
      </div>
      <span className='position-member'>{position}</span>
    </div>
  );
};

export default DevelopmentTeamMember;
