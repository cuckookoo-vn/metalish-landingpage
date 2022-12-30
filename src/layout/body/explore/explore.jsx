import './explore.scss';
import { useTranslation } from 'react-i18next';
import {url} from "../../../url";

const Explore = ({ windowDimensions, statusExplore, changeStatusExplore }) => {
  const images = {
    bgExplore: url + '/images/explore/explore-button.gif',
    bgExploreCollapse:
      url + '/images/explore/collapse-button.png',
  };

  const { t } = useTranslation();

  return (
    <div className='explore'>
      {statusExplore ? (
        <div
          className='button-explore-collapse'
          data-aos='fade-up'
          onClick={() => changeStatusExplore(!statusExplore)}
        >
          <img className="lazyload" data-src={images.bgExploreCollapse} alt='bg-explore' />

          {/* <span className="title-explore">{t("explore.titleMain")}</span> */}
        </div>
      ) : (
        <div
          className='button-explore'
          data-aos='fade-up'
          onClick={() => changeStatusExplore(!statusExplore)}
        >
          <img className="lazyload" data-src={images.bgExplore} alt='bg-explore' />

          <span className='title-explore'>{t('explore.titleMain')}</span>
        </div>
      )}
    </div>
  );
};

export default Explore;
