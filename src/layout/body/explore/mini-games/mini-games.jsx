import { Container } from 'react-bootstrap';
import './mini-games.scss';
import { useTranslation } from 'react-i18next';

const MiniGames = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    dice: process.env.PUBLIC_URL + '/images/explore/mini-games/dice.png',
    mutichoice:
      process.env.PUBLIC_URL + '/images/explore/mini-games/mutichoice.png',
    fillBlank:
      process.env.PUBLIC_URL + '/images/explore/mini-games/fill-blank.png',
    fillInBlankPic:
      'https://metalish.s3.ap-northeast-2.amazonaws.com/img/lp-explore-tour/mini-games/fill-in-blank.png',
    scrambleWordsPic:
      'https://metalish.s3.ap-northeast-2.amazonaws.com/img/lp-explore-tour/mini-games/scramble-words.png',
    multipleChoicePic:
      'https://metalish.s3.ap-northeast-2.amazonaws.com/img/lp-explore-tour/mini-games/multiple-choice.png',
  };

  return (
    <div className='mini-games'>
      <span className='title-main' data-aos='fade-up'>
        {t('miniGames.titleMain')}
      </span>

      <Container>
        <div
          className='mini-games-box'
          data-aos={windowDimensions.width > 576.5 ? 'fade-up' : ''}
        >
          <div
            className='mini-games-item'
            data-aos={windowDimensions.width > 576.5 ? '' : 'fade-up'}
          >
            <div
              className='overlay'
              style={{ backgroundImage: `url(${images.fillInBlankPic})` }}
            ></div>
            <img src={images.fillBlank} alt='fillBlank' />
            <span className='title'>{t('miniGames.blank')}</span>
          </div>

          <div
            className='mini-games-item center'
            data-aos={windowDimensions.width > 576.5 ? '' : 'fade-up'}
          >
            <div
              className='overlay'
              style={{ backgroundImage: `url(${images.multipleChoicePic})` }}
            ></div>
            <img src={images.mutichoice} alt='mutichoice' />
            <span className='title'>{t('miniGames.choice')}</span>
          </div>

          <div
            className='mini-games-item'
            data-aos={windowDimensions.width > 576.5 ? '' : 'fade-up'}
          >
            <div
              className='overlay'
              style={{ backgroundImage: `url(${images.scrambleWordsPic})` }}
            ></div>
            <img src={images.dice} alt='dice' />
            <span className='title'>{t('miniGames.word')}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiniGames;
