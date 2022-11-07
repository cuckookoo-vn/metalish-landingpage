import './core-skills.styles.scss';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

const CoreSkills = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    frame: process.env.PUBLIC_URL + '/images/core-skills/audi-logo.png',
    viewButton: process.env.PUBLIC_URL + '/images/overview/fish-eye-button.png',
  };

  return (
    <div
      className='core-skills'
      style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
    >
      <span className='title-main' data-aos='fade-up'>
        {t('core-skills.title.lbl')}
      </span>
      <Container>
        <div
          className='background'
          style={{ backgroundImage: `url(${images.frame})` }}
        ></div>
        <span className='content'>{t('core-skills.listening.lbl')}</span>
        <span className='content' style={{ marginLeft: '-4%' }}>
          {t('core-skills.speaking.lbl')}
        </span>
        <span className='content' style={{ marginLeft: '-4%' }}>
          {t('core-skills.vocabulary.lbl')}
        </span>
        <span className='content' style={{ marginLeft: '-6%', marginRight: 0 }}>
          {t('core-skills.mouth-shape.lbl')}
        </span>
      </Container>
    </div>
  );
};

export default CoreSkills;
