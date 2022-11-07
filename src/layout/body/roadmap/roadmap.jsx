import './roadmap.scss';
import {Container} from "react-bootstrap";

const Roadmap = ({windowDimensions}) => {
  const images = {
    bgRoadmap: process.env.PUBLIC_URL + '/images/roadmap/bg-roadmap.png',
  }

  return (
      <div className="roadmap"
           style={{backgroundImage:`url(${images.bgRoadmap})`}}
      >
        <Container>
          <span className="title-main">ROADMAP</span>
          <div className="roadmap-box">
            <div className="box-month">
              <div className="bg-month green"></div>
              <span className="text green">AUG</span>
              <div className="content-year content-year-2022">
                <li>Ideas for Metalish</li>
                <li>Arrange resources and kick-off</li>
                <li>Develop Metalish phase 1</li>
                <li>Design art for phase 1</li>
                <li>Release website</li>
                <li> Prepare for phase 2</li>
              </div>
              <span className="title-year title-year-2022">2022</span>
            </div>

            <div className="box-month">
              <div className="bg-month blue"></div>
              <span className="text blue">FEB</span>
              <div className="content-year content-year-2023">
                <li>Release 1st version</li>
                <li>Design art for phase 2</li>
                <li>Develop Metalish phase 2 (metaverse)</li>
                <li>Upgrade server (10M+ users)</li>
                <li>Call for capital investment</li>
                <li>Run advertising in app</li>
                <li>Prepare for phase 3</li>
              </div>
              <span className="title-year title-year-2023">2023</span>
            </div>

            <div className="box-month">
              <div className="bg-month yellow"></div>
              <span className="text yellow">AUG</span>
              <span className="title-year title-year-2023-second">2023</span>
              <div className="content-year content-year-2023-second">
                <li>Release 2nd version</li>
                <li>Design art for phase 3</li>
                <li>Develop Metalish phase 3</li>
                <li>Upgrade AI and UI</li>
              </div>
            </div>

            <div className="box-month">
              <div className="bg-month purple"></div>
              <span className="text purple">FEB</span>
              <span className="title-year title-year-2024">2024</span>
              <div className="content-year content-year-2024">
                <li> Release 3rd version</li>
                <li>Go-live app (metaverse)</li>
              </div>
            </div>

            <span className="vertical-light"></span>
          </div>
        </Container>
      </div>
  );
};

export default Roadmap;
