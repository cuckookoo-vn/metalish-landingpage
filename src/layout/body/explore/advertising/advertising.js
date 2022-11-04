import './advertising.scss';

const Advertising = ({ windowDimensions }) => {
  const images = {
    bgAdvertising:
      'https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/imgs/artw_ckk_vali_web.png',
    bgAdvertisingMobile:
      'https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/imgs/artw_ckk_vali_mobile.png',
  };

  return (
    <div className='advertising'>
      <span className='title-main'>3D BILLBOARD ADVERTISING</span>

      <div
        className='advertising-image'
        style={{
          backgroundImage: `url(${
            windowDimensions.width > 767.5
              ? images.bgAdvertising
              : images.bgAdvertisingMobile
          })`,
        }}
      >
        <span className='title title-1'>
          “This merchandise is currently available at Gmarket.co.kr...”
        </span>

        <span className='title title-2'>“How do I purchase this valise?”</span>
      </div>
    </div>
  );
};

export default Advertising;
