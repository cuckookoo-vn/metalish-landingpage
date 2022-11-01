import './key-features.styles.scss';
import { useTranslation } from 'react-i18next';
import KeyFeaturesItem from './key-features-item/key-features-item';

const KeyFeatures = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const images = {
    studyingEnglishIcon:
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

  const keyFeatures = [
    {
      title: `${t('key-features.studying-english_title.lbl')}`,
      alt: 'studying-english',
      src: images.studyingEnglishIcon,
      content: `${t('key-features.studying-english_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.graphics_title.lbl')}`,
      alt: 'graphics',
      src: images.graphics,
      content: `${t('key-features.graphics_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.connect_title.lbl')}`,
      alt: 'connect',
      src: images.connect,
      content: `${t('key-features.connect_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.customized-classroom_title.lbl')}`,
      alt: 'customized-classroom',
      src: images.customizedClassroom,
      content: `${t('key-features.customized-classroom_content.txt')}`,
      last: true,
    },
    {
      title: `${t('key-features.practical-english_title.lbl')}`,
      alt: 'practical-english',
      src: images.practicalEnglish,
      content: `${t('key-features.practical-english_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.ai-technology_title.lbl')}`,
      alt: 'ai-technology',
      src: images.ai,
      content: `${t('key-features.ai-technology_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.ai-in-advertising_title.lbl')}`,
      alt: 'ai-in-advertising',
      src: images.aiInAdvertising,
      content: `${t('key-features.ai-in-advertising_content.txt')}`,
      last: true,
    },
    {
      title: `${t('key-features.mini-games_title.lbl')}`,
      alt: 'mini-games',
      src: images.miniGames,
      content: `${t('key-features.mini-games_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.rewards_title.lbl')}`,
      alt: 'rewards',
      src: images.rewards,
      content: `${t('key-features.rewards_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.best-choice_title.lbl')}`,
      alt: 'best-choice',
      src: images.bestChoice,
      content: `${t('key-features.best-choice_content.txt')}`,
      last: false,
    },
    {
      title: `${t('key-features.review_title.lbl')}`,
      alt: 'review',
      src: images.review,
      content: `${t('key-features.review_content.txt')}`,
      last: false,
    },
  ];

  return (
    <>
      <div className='key-features'>
        <span className='title-main' data-aos='fade-up'>
          {t('key-features.title.lbl')}
        </span>
        <>
          <div className='content-wrapper'>
            {/* <div>
              {keyFeatures.map((element, index) => (
                <>
                  <KeyFeaturesItem
                    key={index}
                    alt={element.alt}
                    src={element.src}
                    title={element.title}
                    content={element.content}
                    last={element.last}
                  />
                  {element.last ? <br/>: null}
                </>
              ))}
            </div> */}

            <div data-aos='fade-up'>
              <KeyFeaturesItem
                alt='studying-english'
                src={images.studyingEnglishIcon}
                title={t('key-features.studying-english_title.lbl')}
              />
              <KeyFeaturesItem
                alt='graphics'
                src={images.graphics}
                title={t('key-features.graphics_title.lbl')}
              />
              <KeyFeaturesItem
                alt='connect'
                src={images.connect}
                title={t('key-features.connect_title.lbl')}
              />
              <KeyFeaturesItem
                alt='customized-classroom'
                src={images.customizedClassroom}
                title={t('key-features.customized-classroom_title.lbl')}
                last
              />
            </div>

            <br />
            <br />

            <div data-aos='fade-up'>
              <KeyFeaturesItem
                alt='practical-english'
                src={images.practicalEnglish}
                title={t('key-features.practical-english_title.lbl')}
              />
              <KeyFeaturesItem
                alt='ai-technology'
                src={images.ai}
                title={t('key-features.ai-technology_title.lbl')}
              />
              <KeyFeaturesItem
                alt='ai-in-advertising'
                src={images.aiInAdvertising}
                title={t('key-features.ai-in-advertising_title.lbl')}
                last
              />
            </div>

            <br />
            <br />

            <div data-aos='fade-up'>
              <KeyFeaturesItem
                alt='mini-games'
                src={images.miniGames}
                title={t('key-features.mini-games_title.lbl')}
              />
              <KeyFeaturesItem
                alt='rewards'
                src={images.rewards}
                title={t('key-features.rewards_title.lbl')}
              />
              <KeyFeaturesItem
                alt='best-choice'
                src={images.bestChoice}
                title={t('key-features.best-choice_title.lbl')}
              />
              <KeyFeaturesItem
                alt='review'
                src={images.review}
                title={t('key-features.review_title.lbl')}
                last
              />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default KeyFeatures;
