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
        <span className='title-main'>{t('roadmap.title.lbl')}</span>
        <div className='roadmap-box'>
          <div className='box-month'>
            <div className='bg-month green'></div>
            <span className='text green'>AUG</span>
            <div className='content-year content-year-2022'>
              <li>{t('roadmap.aug-2022.item-1.txt')}</li>
              <li>{t('roadmap.aug-2022.item-2.txt')}</li>
              <li>{t('roadmap.aug-2022.item-3.txt')}</li>
              <li>{t('roadmap.aug-2022.item-4.txt')}</li>
              <li>{t('roadmap.aug-2022.item-5.txt')}</li>
              <li>{t('roadmap.aug-2022.item-6.txt')}</li>
            </div>
            <span className='title-year title-year-2022'>2022</span>
          </div>

          <div className='box-month'>
            <div className='bg-month blue'></div>
            <span className='text blue'>FEB</span>
            <div className='content-year content-year-2023'>
              <li>{t('roadmap.feb-2023.item-1.txt')}</li>
              <li>{t('roadmap.feb-2023.item-2.txt')}</li>
              <li>{t('roadmap.feb-2023.item-3.txt')}</li>
              <li>{t('roadmap.feb-2023.item-4.txt')}</li>
              <li>{t('roadmap.feb-2023.item-5.txt')}</li>
              <li>{t('roadmap.feb-2023.item-6.txt')}</li>
              <li>{t('roadmap.feb-2023.item-6.txt')}</li>
            </div>
            <span className='title-year title-year-2023'>2023</span>
          </div>

          <div className='box-month'>
            <div className='bg-month yellow'></div>
            <span className='text yellow'>AUG</span>
            <span className='title-year title-year-2023-second'>2023</span>
            <div className='content-year content-year-2023-second'>
              <li>{t('roadmap.aug-2023.item-1.txt')}</li>
              <li>{t('roadmap.aug-2023.item-2.txt')}</li>
              <li>{t('roadmap.aug-2023.item-3.txt')}</li>
              <li>{t('roadmap.aug-2023.item-4.txt')}</li>
            </div>
          </div>

          <div className='box-month'>
            <div className='bg-month purple'></div>
            <span className='text purple'>FEB</span>
            <span className='title-year title-year-2024'>2024</span>
            <div className='content-year content-year-2024'>
              <li>{t('roadmap.feb-2024.item-1.txt')}</li>
              <li>{t('roadmap.feb-2024.item-2.txt')}</li>
            </div>
          </div>

          <span className='vertical-light'></span>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;
