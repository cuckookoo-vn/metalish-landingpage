import './core-skills.styles.scss';
import { useTranslation } from 'react-i18next';

const CoreSkills = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    frame: process.env.PUBLIC_URL + '/images/core-skills/audi-logo.png',
    viewButton: process.env.PUBLIC_URL + '/images/overview/fish-eye-button.png',
  };

  return (
    <>
      <div
        className='core-skills'
        style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
      >
        <span className='title-main' data-aos='fade-up'>
          CORE SKILLS
        </span>
        <>
          <div className='content-wrapper' style={{ backgroundImage: `url(${images.frame})` }}></div>
        </>
      </div>
    </>
  );
};

export default CoreSkills;
