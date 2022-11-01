import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CoreSkills from './layout/body/core-skills/core-skills';
import Explore from './layout/body/explore/explore';
import Feedback from './layout/body/feedback/feedback';
import KeyFeatures from './layout/body/key-features/key-features';
import OurMethods from './layout/body/our-methods/our-methods';
import Overview from './layout/body/overview/overview';
import VideoProposal from './layout/body/video-proposal/video-proposal';
import Header from './layout/header/header';
import { getWindowDimensions } from './mixins/window-dimensions';
import './styles/index.scss';

export default function App() {
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
      <Header />
      <br />
      <VideoProposal />
      <Overview windowDimensions={windowDimensions} />
      <KeyFeatures windowDimensions={windowDimensions} />
      <CoreSkills windowDimensions={windowDimensions} />
      <OurMethods windowDimensions={windowDimensions} />
      <Feedback windowDimensions={windowDimensions} />
    </>
  );
}
