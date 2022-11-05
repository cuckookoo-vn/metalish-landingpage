import { useState, useEffect } from 'react';
import { getWindowDimensions } from './mixins/window-dimensions';
import './styles/index.scss';

// layout
import Header from './layout/header/header';
import KeyFeatures from './layout/body/key-features/key-features';
import Overview from './layout/body/overview/overview';
import VideoProposal from './layout/body/video-proposal/video-proposal';
import DevelopmentTeam from './layout/body/development-team/development-team';
import Footer from "./layout/footer/footer";
import Roadmap from "./layout/body/roadmap/roadmap";

//library
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';

import SwiperCore, { Navigation,
    Pagination,
    Autoplay,
    Virtual } from 'swiper';
import Explore from "./layout/body/explore/explore";
import MiniGames from "./layout/body/explore/mini-games/mini-games";
import Advertising from "./layout/body/explore/advertising/advertising";
import OrderService from "./layout/body/explore/order-service/order-service";
import Tour from "./layout/body/explore/tour/tour";

export default function App() {

    // status show explore
    const [statusExplore, setStatusExplore] = useState(false);
    const changeStatusExplore = (status) =>{
        setStatusExplore(status)
    }

    //use swiper
    SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

    //get size window
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
    <>
        {/*<Header />*/}
        {/*<VideoProposal />*/}
        {/*<Overview windowDimensions={windowDimensions}/>*/}
        {/*<KeyFeatures windowDimensions={windowDimensions}/>*/}

        {
            statusExplore ?
            <>
                <Tour windowDimensions={windowDimensions}/>
                <MiniGames windowDimensions={windowDimensions}/>
                <Advertising windowDimensions={windowDimensions}/>
                <OrderService windowDimensions={windowDimensions}/>
            </>
                :
            <Explore windowDimensions={windowDimensions}
                     statusExplore={statusExplore}
                     changeStatusExplore={changeStatusExplore}
            />
        }

        <Roadmap windowDimensions={windowDimensions}/>
        <DevelopmentTeam windowDimensions={windowDimensions}/>
        <Footer windowDimensions={windowDimensions}/>

    </>
  );
}
