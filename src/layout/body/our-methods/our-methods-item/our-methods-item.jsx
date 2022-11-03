import './our-methods-item.styles.scss';

const OurMethodsItem = ({ image, name, position }) => {
  return (
    <div className='our-methods-item'>
      <div
        className='our-methods-item-box'
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img className='image-member' src={image} alt='member' />
        <span className='name-member'>{name}</span> */}
      </div>
      {/* <span className='position-member'>{position}</span> */}
    </div>
  );
};

export default OurMethodsItem;
