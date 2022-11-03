import './explore.scss';
import {Container} from "react-bootstrap";

const Explore = ({windowDimensions, statusExplore,changeStatusExplore}) => {

  const images = {
    bgExplore: process.env.PUBLIC_URL + '/images/explore/explore-button.gif',
  }
  return(
      <div className="explore">
          <Container>
            <div className="button-explore">
                <img onClick={()=>changeStatusExplore(!statusExplore)} src={images.bgExplore} alt="bg-explore"/>
            </div>
          </Container>
      </div>
  );
};

export default Explore;
