import './roadmap.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Roadmap = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    bgRoadmap: process.env.PUBLIC_URL + '/images/roadmap/bg-roadmap.png',
  };

  return (
    <div
      className='roadmap'
      style={{ backgroundImage: `url(${images.bgRoadmap})` }}
    >
      <Container>
        <span data-aos='fade-up' className='title-main'>
          {t('roadmap.titleMain')}
        </span>

        <div className='roadmap-box'>
          <div
            className='box-month'
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            data-aos-delay={windowDimensions.width > 767.5 ? '200' : '100'}
          >
            <div className='bg-month green'></div>

            <span className='text green'>{t('roadmap.title2022.month')}</span>

            <div className='content-year content-year-2022'>
              <li>{t('roadmap.title2022.title1')}</li>
              <li>{t('roadmap.title2022.title2')}</li>
              <li>{t('roadmap.title2022.title3')}</li>
              <li>{t('roadmap.title2022.title4')}</li>
              <li>{t('roadmap.title2022.title5')}</li>
              <li>{t('roadmap.title2022.title6')}</li>
            </div>

            <span className='title-year title-year-2022'>2022</span>
          </div>

          <div
            className='box-month'
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            data-aos-delay={windowDimensions.width > 767.5 ? '400' : '200'}
          >
            <div className='bg-month blue'></div>
            <span className='text blue'>{t('roadmap.title2023.month')}</span>
            <div className='content-year content-year-2023'>
              <li>{t('roadmap.title2023.title1')}</li>
              <li>{t('roadmap.title2023.title2')}</li>
              <li>{t('roadmap.title2023.title3')}</li>
              <li>{t('roadmap.title2023.title4')}</li>
              <li>{t('roadmap.title2023.title5')}</li>
              <li>{t('roadmap.title2023.title6')}</li>
              <li>{t('roadmap.title2023.title7')}</li>
            </div>
            <span className='title-year title-year-2023'>2023</span>
          </div>

          <div
            className='box-month'
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            data-aos-delay={windowDimensions.width > 767.5 ? '600' : '300'}
          >
            <div className='bg-month yellow'></div>
            <span className='text yellow'>
              {t('roadmap.title2023Second.month')}
            </span>
            <span className='title-year title-year-2023-second'>2023</span>
            <div className='content-year content-year-2023-second'>
              <li>{t('roadmap.title2023Second.title1')}</li>
              <li>{t('roadmap.title2023Second.title2')}</li>
              <li>{t('roadmap.title2023Second.title3')}</li>
              <li>{t('roadmap.title2023Second.title4')}</li>
            </div>
          </div>

          <div
            className='box-month'
            data-aos={windowDimensions.width > 767.5 ? 'fade-left' : 'fade-up'}
            data-aos-delay={windowDimensions.width > 767.5 ? '900' : '400'}
          >
            <div className='bg-month purple'></div>
            <span className='text purple'>FEB</span>
            <span className='title-year title-year-2024'>
              {t('roadmap.title2024.month')}
            </span>
            <div className='content-year content-year-2024'>
              <li>{t('roadmap.title2024.title1')}</li>
              <li>{t('roadmap.title2024.title2')}</li>
            </div>
          </div>

          <span
            data-aos='zoom-in'
            data-aos-delay='700'
            className='vertical-light'
          ></span>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;
