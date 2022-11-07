import './core-skills.styles.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CoreSkills = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    frame: process.env.PUBLIC_URL + '/images/explore/order-service/frame.png',
  };

  return (
    <div
      className='core-skills'
      style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
    >
      <span className='title-main'>{t('core-skills.title.lbl')}</span>

      <div className='core-skills-box'>
        <div
          className='core-skills-item listening'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <span>{t('core-skills.listening.lbl')}</span>
        </div>
        <div
          className='core-skills-item speaking'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <span>{t('core-skills.speaking.lbl')}</span>
        </div>
        <div
          className='core-skills-item vocabulary'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <span>{t('core-skills.vocabulary.lbl')}</span>
        </div>
        <div
          className='core-skills-item mouth-shape'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <span>{t('core-skills.mouth-shape.lbl')}</span>
        </div>
      </div>
    </div>
  );
};

export default CoreSkills;
