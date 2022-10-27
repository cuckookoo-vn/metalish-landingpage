import * as React from 'react';
import CoreSkills from './layout/body/core-skills/core-skills';
import Explore from './layout/body/explore/explore';
import Feedback from './layout/body/feedback/feedback';
import KeyFeatures from './layout/body/key-features/key-features';
import OurMethods from './layout/body/our-methods/our-methods';
import Overview from './layout/body/overview/overview';
import VideoProposal from './layout/body/video-proposal/video-proposal';
import Header from './layout/header/header';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function App() {
  return (
    <>
      <Header />
      <VideoProposal />
      <Overview />
      <KeyFeatures />
      <CoreSkills />
      <OurMethods />
      <Feedback />
      <Explore />
    </>
  );
}
