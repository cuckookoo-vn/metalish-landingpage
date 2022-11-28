import './core-skills.styles.scss';
import { useTranslation } from 'react-i18next';
import { url } from '../../../url';

const CoreSkills = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgKeyFeatures: process.env.PUBLIC_URL + '/images/overview/bg-overview.jpg',
    frame: process.env.PUBLIC_URL + '/images/explore/order-service/frame.png',
    listening: `${url}/img/lp-core-skills/listening-1.png`,
    speaking: `${url}/img/lp-core-skills/speaking.png`,
    vocabulary: `${url}/img/lp-core-skills/vocabulary.png`,
    mouthShape: `${url}/img/lp-core-skills/mouth-shape.png`,
  };

  return (
    <div
      className='core-skills'
      style={{ backgroundImage: `url(${images.bgKeyFeatures})` }}
    >
      <span className='title-main' data-aos='fade-up'>
        {t('core-skills.title.lbl')}
      </span>

      <div className='core-skills-box' data-aos='fade-up'>
        <div
          className='core-skills-item listening'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <div
            className='overlay'
            style={{ backgroundImage: `url(${images.listening})` }}
          ></div>
          <span>{t('core-skills.listening.lbl')}</span>
        </div>
        <div
          className='core-skills-item speaking'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <div
            className='overlay'
            style={{ backgroundImage: `url(${images.speaking})` }}
          ></div>
          <span>{t('core-skills.speaking.lbl')}</span>
        </div>
        <div
          className='core-skills-item vocabulary'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <div
            className='overlay'
            style={{ backgroundImage: `url(${images.vocabulary})` }}
          ></div>
          <span>{t('core-skills.vocabulary.lbl')}</span>
        </div>
        <div
          className='core-skills-item mouth-shape'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <div
            className='overlay'
            style={{ backgroundImage: `url(${images.mouthShape})` }}
          ></div>
          <span>{t('core-skills.mouth-shape.lbl')}</span>
        </div>
      </div>
    </div>
  );
};

export default CoreSkills;
