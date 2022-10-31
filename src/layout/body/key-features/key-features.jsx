import './key-features.styles.scss';
import { useTranslation } from 'react-i18next';
import KeyFeaturesItem from './key-features-item/key-features-item';

const KeyFeatures = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    studingEnglishIcon:
      process.env.PUBLIC_URL + '/images/key-features/studying-english.png',
    graphics: process.env.PUBLIC_URL + '/images/key-features/graphics.png',
    connect: process.env.PUBLIC_URL + '/images/key-features/connect.png',
    customizedClassroom:
      process.env.PUBLIC_URL + '/images/key-features/customized-classroom.png',
    practicalEnglish:
      process.env.PUBLIC_URL + '/images/key-features/practical-english.png',
    ai: process.env.PUBLIC_URL + '/images/key-features/ai.png',
    aiInAdvertising:
      process.env.PUBLIC_URL + '/images/key-features/ai-in-advertising.png',
    miniGames: process.env.PUBLIC_URL + '/images/key-features/mini-games.png',
    rewards: process.env.PUBLIC_URL + '/images/key-features/rewards.png',
    bestChoice: process.env.PUBLIC_URL + '/images/key-features/best-choice.png',
    review: process.env.PUBLIC_URL + '/images/key-features/review.png',
  };

  return (
    <>
      <div className='key-features'>
        <span className='title-main' data-aos='fade-up'>
          {t('key-features_title.lbl')}
        </span>
        <>
          <div className='content-wrapper'>
            <div>
              <KeyFeaturesItem
                alt='studying-english'
                src={images.studingEnglishIcon}
              />
              {/* <KeyFeaturesItem alt='graphics' src={images.graphics} />
              <KeyFeaturesItem alt='connect' src={images.connect} />
              <KeyFeaturesItem
                alt='customized-classroom'
                src={images.customizedClassroom}
                last
              /> */}
            </div>

            <br />
            <br />

            {/* <div>
              <KeyFeaturesItem
                alt='practical-english'
                src={images.practicalEnglish}
              />
              <KeyFeaturesItem alt='ai-technology' src={images.ai} />
              <KeyFeaturesItem
                alt='ai-in-advertising'
                src={images.aiInAdvertising}
                last
              />
            </div>

            <br />
            <br />

            <div>
              <KeyFeaturesItem alt='mini-games' src={images.miniGames} />
              <KeyFeaturesItem alt='rewards' src={images.rewards} />
              <KeyFeaturesItem alt='best-choice' src={images.bestChoice} />
              <KeyFeaturesItem alt='review' src={images.review} last />
            </div> */}
          </div>
        </>
      </div>
    </>
  );
};

export default KeyFeatures;
