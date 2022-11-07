import './order-service.scss';

const OrderService = ({windowDimensions}) => {

  const images = {
    book: process.env.PUBLIC_URL + '/images/explore/order-service/book.png',
    drink: process.env.PUBLIC_URL + '/images/explore/order-service/drink.png',
    food1: process.env.PUBLIC_URL + '/images/explore/order-service/food-1.png',
    food2: process.env.PUBLIC_URL + '/images/explore/order-service/food-2.png',
    food3: process.env.PUBLIC_URL + '/images/explore/order-service/food-3.png',
    frame: process.env.PUBLIC_URL + '/images/explore/order-service/frame.png'
  }

  return(
      <div className="order-service">
        <span className="title-main"
              data-aos="fade-up">ORDER SERVICE</span>

        <span className="description"
              data-aos="fade-up">Interact with the advertisement to make a real order</span>

        <div className="order-service-box">
          <div className="item-service book"
               data-aos="fade-right"
               style={{backgroundImage:`url(${images.frame})`}}>
            <img src={images.book} alt="book"/>
          </div>

          <div className="item-service drink"
               data-aos="fade-up-right"
               style={{backgroundImage:`url(${images.frame})`}}>
            <img src={images.drink} alt="drink"/>
          </div>

          <div className="item-service food-1"
               data-aos="fade-left"
               style={{backgroundImage:`url(${images.frame})`}}>
            <img src={images.food1} alt="food1"/>
          </div>

          <div className="item-service food-2"
               data-aos="fade-up-left"
               style={{backgroundImage:`url(${images.frame})`}}>
            <img src={images.food2} alt="food2"/>
          </div>

          <div className="item-service food-3"
               data-aos="fade-up"
               style={{backgroundImage:`url(${images.frame})`}}>
            <img src={images.food3} alt="food3"/>
          </div>
        </div>
      </div>
  );
};

export default OrderService;
