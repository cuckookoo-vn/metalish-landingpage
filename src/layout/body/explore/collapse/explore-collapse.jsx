import './explore-collapse.styles.scss';
import { useTranslation } from 'react-i18next';

const ExploreCollapse = ({
  windowDimensions,
  statusExplore,
  changeStatusExplore,
}) => {
  const images = {
    bgExplore: process.env.PUBLIC_URL + '/images/explore/collapse-button.png',
  };

  const { t } = useTranslation();

  return (
    <div className='explore-collapse'>
      <div
        className='button-explore-collapse'
        data-aos='fade-up'
        onClick={() => changeStatusExplore(!statusExplore)}
      >
        <img src={images.bgExplore} alt='bg-explore' />

        {/* <span className="title-explore">{t("explore.titleMain")}</span> */}
      </div>
    </div>
  );
};

export default ExploreCollapse;
