import './footer.scss';
import {Container} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const images = {
    chainos: process.env.PUBLIC_URL + '/images/footer/chainos.png',
    cuckookoo: process.env.PUBLIC_URL + '/images/footer/cuckookoo.png',
  }

  return(
      <div className="footer">
        <Container>
          <div className="logo">
            <div className="logo-cuckookoo">
              <a href="">
                <img src={images.cuckookoo} alt="logo-cuckookoo"/>
              </a>
            </div>

            <div className="logo-chainos">
              <a href="">
                <img src={images.chainos} alt="logo-chainos"/>
              </a>
            </div>
          </div>

          <div className="contract">
            <span className="title-main-footer">Get In Touch</span>

            <div className="title-box">
              <FontAwesomeIcon className="icon icon-local" icon={faLocationDot} />
              <span className="title">82, Street No.6, Ward 10, Go Vap District, Ho Chi Minh City</span>
            </div>

            <div className="title-box">
              <FontAwesomeIcon className="icon icon-mail" icon={faEnvelope} />
              <span className="title">metalish@cuckookoo.vn</span>
            </div>

            <div className="title-box">
              <FontAwesomeIcon className="icon icon-phone" icon={faPhone} />
              <span className="title">0336111248</span>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default Footer;
