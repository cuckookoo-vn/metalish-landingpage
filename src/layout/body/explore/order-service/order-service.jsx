import './order-service.scss';
import { useTranslation } from 'react-i18next';

const OrderService = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const images = {
    book: process.env.PUBLIC_URL + '/images/explore/order-service/book.png',
    drink: process.env.PUBLIC_URL + '/images/explore/order-service/drink.png',
    food1: process.env.PUBLIC_URL + '/images/explore/order-service/food-1.png',
    food2: process.env.PUBLIC_URL + '/images/explore/order-service/food-2.png',
    food3: process.env.PUBLIC_URL + '/images/explore/order-service/food-3.png',
    frame: process.env.PUBLIC_URL + '/images/explore/order-service/frame.png',
  };

  return (
    <div className='order-service'>
      <span className='title-main'>{t('explore.order-service_title.lbl')}</span>
      <span className='description'>
        {t('explore.order-service_description.lbl')}
      </span>
      <div className='order-service-box'>
        <div
          className='item-service book'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.book} alt='book' />
        </div>
        <div
          className='item-service drink'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.drink} alt='drink' />
        </div>
        <div
          className='item-service food-1'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.food1} alt='food1' />
        </div>
        <div
          className='item-service food-2'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.food2} alt='food2' />
        </div>
        <div
          className='item-service food-3'
          style={{ backgroundImage: `url(${images.frame})` }}
        >
          <img src={images.food3} alt='food3' />
        </div>
      </div>
    </div>
  );
};

export default OrderService;
