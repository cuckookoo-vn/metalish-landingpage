import './overview.styles.scss';
import { useTranslation } from 'react-i18next';

const Overview = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.png',
  };

  return (
    <div
      className='overview'
      style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
    >
      <span className='title-main' data-aos='fade-up'>
        METALISH
      </span>
    </div>
  );
};

export default Overview;
