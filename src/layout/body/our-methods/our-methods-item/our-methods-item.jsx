import { useTranslation } from 'react-i18next';
import './our-methods-item.styles.scss';

const OurMethodsItem = ({ image, type, position }) => {
  const { t } = useTranslation();

  return (
    <div className='our-methods-item'>
      <div
        className='our-methods-item-box'
        style={{ backgroundImage: `url(${image})` }}
      >
        {type === 'class-type' ? (
          <>
            <div className='class-type-title'>
              <span className='private-room'>
                {t('our-methods.private-room_title.lbl')}
              </span>
              <span className='talking-room'>
                {t('our-methods.talking-room_title.lbl')}
              </span>
            </div>
            <div className='class-type-content'>
              <span className='private-room'>
                {t('our-methods.private-room_content.txt')}
              </span>
              <span className='talking-room'>
                {t('our-methods.talking-room_content.txt')}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className='content'>
              {t(`our-methods.${type}_content.txt`)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OurMethodsItem;
