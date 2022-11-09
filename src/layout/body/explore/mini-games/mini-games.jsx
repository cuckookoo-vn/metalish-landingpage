import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './mini-games.scss';

const MiniGames = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    dice: process.env.PUBLIC_URL + '/images/explore/mini-games/dice.png',
    mutichoice:
      process.env.PUBLIC_URL + '/images/explore/mini-games/mutichoice.png',
    fillBlank:
      process.env.PUBLIC_URL + '/images/explore/mini-games/fill-blank.png',
  };

  return (
    <div className='mini-games'>
      <span className='title-main'>{t('explore.mini-games_title.lbl')}</span>
      <Container>
        <div className='mini-games-box'>
          <div className='mini-games-item'>
            <img src={images.fillBlank} alt='fillBlank' />
            <span className='title'>
              {t('explore.mini-games_fill-in-blank.lbl')}
            </span>
          </div>
          <div className='mini-games-item center'>
            <img src={images.mutichoice} alt='mutichoice' />
            <span className='title'>
              {t('explore.mini-games_multiple-choice.lbl')}
            </span>
          </div>
          <div className='mini-games-item'>
            <img src={images.dice} alt='dice' />
            <span className='title'>
              {t('explore.mini-games_arrange-word.lbl')}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiniGames;
