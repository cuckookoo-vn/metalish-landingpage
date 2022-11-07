import {useEffect, useRef, useState} from "react";
import "./development-team.scss";
import {Container} from "react-bootstrap";
import DevelopmentTeamMember from "../../../components/development-team-member/development-team-member";
import {useTranslation} from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const DevelopmentTeam = ({windowDimensions}) => {
  // data development team
  const urlImage = "https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/imgs/landingpage/lp-core-member/lp-core-member-";

  const images = {
    next: process.env.PUBLIC_URL + '/images/development-team/right-button.png',
    pre: process.env.PUBLIC_URL + '/images/development-team/left-button.png',
  };

  const memberTeam = [
    {
      name: 'Paul Pham',
      position: 'Product Owner',
      image: urlImage + '1.png',
    },
    {
      name: 'Felix Nguyen',
      position: 'Executive',
      image: urlImage + '2.png',
    },
    {
      name: 'Tony Quach',
      position: 'Executive',
      image: urlImage + '3.png',
    },
    {
      name: 'Julie Tran',
      position: 'Content Advisor Leader',
      image: urlImage + '4.png',
    },
    {
      name: 'Joy Le',
      position: 'Artist Manager',
      image: urlImage + '5.png',
    },
    {
      name: 'Henry Ho',
      position: 'Solution Architect',
      image: urlImage + '6.png',
    },
    {
      name: 'Johnny Le',
      position: 'Developer Leader',
      image: urlImage + '7.png',
    },
    {
      name: 'Mr.Kan',
      position: 'AI Leader',
      image: urlImage + '8.png',
    },
    {
      name: 'Mr.Thinh',
      position: 'Blockchain Leader',
      image: urlImage + '9.png',
    },
    {
      name: 'GiGi Le',
      position: 'Translator',
      image: urlImage + '10.png',
    },
    {
      name: 'Ivy Pham',
      position: 'Quality Control Leader',
      image: urlImage + '11.png',
    },
    {
      name: 'Leon Nguyen',
      position: 'Senior Artist',
      image: urlImage + '12.png',
    },
    {
      name: 'Leo Dinh',
      position: 'Developer',
      image: urlImage + '13.png',
    },
    {
      name: 'Finn Le',
      position: 'Developer',
      image: urlImage + '14.png',
    },
    {
      name: 'Link Ho',
      position: 'Developer',
      image: urlImage + '15.png',
    },
    {
      name: 'Keng Nguyen',
      position: 'Developer',
      image: urlImage + '16.png',
    },
  ];

  // check width set data slide
  const checkWidthWindowSetSlideData = () =>{
    let slideDataTemp = {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    };

    if(windowDimensions.width > 1399.5){
      slideDataTemp.slidesPerView = 4;
      slideDataTemp.spaceBetween = 30;
      slideDataTemp.slidesPerGroup = 4;
    }else if(windowDimensions.width > 991.5){
      slideDataTemp.slidesPerView = 3;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 3;
    }else{
      slideDataTemp.slidesPerView = 2;
      slideDataTemp.spaceBetween = 15;
      slideDataTemp.slidesPerGroup = 2;
    }
    return slideDataTemp;
  };

  const [slideData, setSlideData] = useState(checkWidthWindowSetSlideData)

  useEffect(()=>{
    setSlideData(checkWidthWindowSetSlideData)
  },[windowDimensions.width])

  // translation
  const {t} = useTranslation();

  // button slide
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return(
      <div className="development-team">
            <span className="title-main">
               {t('developmentTeam.titleMain')}
            </span>

        <Container>
          <div className="box-slide">
            <Swiper
                slidesPerView={slideData.slidesPerView}
                spaceBetween={slideData.spaceBetween}
                slidesPerGroup={slideData.slidesPerGroup}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                preventClicks={true}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
            >
              <div className="box-member">
                {memberTeam.map((element, index) =>
                    <SwiperSlide key={index}>
                      <DevelopmentTeamMember
                          image={element.image}
                          name={element.name}
                          position={element.position}
                      />
                    </SwiperSlide>
                )}
              </div>
              <div ref={prevRef}
                   className="icon-slide icon-next hidden-mobile">
                <img className="icon-next" src={images.pre} alt="pre"/>
              </div>
              <div ref={nextRef}
                   className="icon-slide icon-pre hidden-mobile">
                <img src={images.next} alt="next"/>
              </div>
            </Swiper>
          </div>
        </Container>
      </div>
  )
};

export default DevelopmentTeam;
