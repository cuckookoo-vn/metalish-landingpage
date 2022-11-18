import React, { useEffect, useState } from 'react';
import './header.styles.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import ModalDownload from '../../components/modal-download/modal-download';

const Header = () => {
  const images = {
    logoHeader: process.env.PUBLIC_URL + '/images/header/logo.png',
    downloadButton: process.env.PUBLIC_URL + '/images/header/download.png',
    iconSelect:
      process.env.PUBLIC_URL + '/images/header/icon-select-header.png',
    flagEngland: process.env.PUBLIC_URL + '/images/header/england-flag.jpg',
    flagVietnam: process.env.PUBLIC_URL + '/images/header/vietnam-flag.jpg',
    flagKorean: process.env.PUBLIC_URL + '/images/header/korea-flag.jpg',
  };

  const [statusLang, setStatusLang] = useState(false);
  const [textLang, setTextLang] = useState('English');
  const [statusButton, setStatusButton] = useState(true);

  const [flag, setFlag] = useState(images.flagEngland);

  const [bgColor, setBgColor] = useState('');
  const [logoDisplay, setLogoDisplay] = useState('');

  const [show, setShow] = useState(false);
  const [listOffsetTop, setListOffsetTop] = useState([]);

  const listClassSection = [
    'overview',
    'key-features',
    'core-skills',
    'our-methods',
    'feedback',
    'explore',
    'explore-collapse',
    'roadmap',
    'development-team',
    'footer',
  ];

  const listClass = [
    'vertical-video',
    'vertical-introduce',
    'vertical-key-features',
    'vertical-airport',
    'vertical-character',
    'vertical-item',
    'vertical-mini-game',
    'vertical-3d',
    'vertical-roadmap',
    'vertical-core-team',
  ];

  const setShowModal = () => {
    if (statusButton) {
      setShow(true);
      setStatusButton(false);
    }
  };

  const setStatusMenu = (status) => {
    setStatusLang(!status);
  };

  const { t, i18n } = useTranslation();

  const changeLang = (name) => {
    i18n.changeLanguage(name);
    let lang = t(`header.option_${name}.lbl`);
    setTextLang(lang);
    if (name === 'ko') {
      setFlag(images.flagKorean);
    } else if (name === 'vi') {
      setFlag(images.flagVietnam);
    } else {
      setFlag(images.flagEngland);
    }
    setStatusLang(false);
  };

  const scrollCLick = (className) => {
    let getClass = document.getElementsByClassName(className)[0];
    window.scrollTo(0, getClass.offsetTop);
  };

  const removeActive = () => {
    listClass.forEach((element) => {
      let getClass = document.getElementsByClassName(element)[0];
      if (getClass.classList.contains('active')) {
        getClass.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (
        window.pageYOffset >
        document.getElementById('video-introduce').offsetHeight
      ) {
        setBgColor('#020220');
        setLogoDisplay(`${process.env.PUBLIC_URL}/images/logo.png`);
      } else {
        setBgColor('');
        setLogoDisplay('');
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let listClassElement = [];
    listClassSection.forEach((element) => {
      listClassElement.push(document.getElementsByClassName(element)[0]);
    });
    setListOffsetTop(listClassElement);

    const onScroll = () => {
      listOffsetTop.forEach((element, index) => {
        let getClassItem = document.getElementsByClassName(listClass[index])[0];
        if (window.pageYOffset + element.offsetHeight / 2 > element.offsetTop) {
          if (!getClassItem.classList.contains('active')) {
            removeActive();
            getClassItem.classList.add('active');
            return;
          }
        }
      });
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [document.getElementsByClassName('video-introduce')[0]]);

  return (
    <>
      <div className='header' style={{ backgroundColor: bgColor }}>
        <img className='logo' src={logoDisplay} alt='' />
        <>
          {/* Download */}
          <div
            className='download'
            onClick={() => setShowModal()}
            style={{ backgroundImage: `url(${images.downloadButton}` }}
          >
            <span>{t('header.download.btn')}</span>
          </div>
          {/* Download */}

          {/* Dropdown */}
          <div className='language dropdown-lang'>
            <button
              className='language-btn'
              onClick={() => setStatusMenu(statusLang)}
            >
              <img className='flag' src={flag} alt='flag-england' />
              {textLang}
              <img
                className={'icon-select-header' + (statusLang ? ' rotate' : '')}
                src={images.iconSelect}
                alt='icon-select'
              />
            </button>

            <div
              className={
                'language-content language-content-lang' +
                (statusLang ? ' show' : '')
              }
            >
              <button
                onClick={() => changeLang('en')}
                className='language-option'
              >
                <img
                  className='flag-option'
                  src={images.flagEngland}
                  alt='flag-english'
                />
                {t('header.option_en.lbl')}
              </button>
              <button
                onClick={() => changeLang('ko')}
                className='language-option'
              >
                <img
                  className='flag-option'
                  src={images.flagKorean}
                  alt='flag-korean'
                />
                {t('header.option_ko.lbl')}
              </button>
              <button
                onClick={() => changeLang('vi')}
                className='language-option'
              >
                <img
                  className='flag-option'
                  src={images.flagVietnam}
                  alt='flag-vietnam'
                />
                {t('header.option_vi.lbl')}
              </button>
            </div>
          </div>
          {/* Dropdown */}

          {/* Contact */}
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[9])}
            >
              {t('header.contact.btn')}
            </button>
          </div>

          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[8])}
            >
              {t('header.teams.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[7])}
            >
              {t('header.roadmap.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[5])}
            >
              {t('header.explore.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[4])}
            >
              {t('header.reviews.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[3])}
            >
              {t('header.our-methods.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[2])}
            >
              {t('header.core-skills.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[1])}
            >
              {t('header.key-features.btn')}
            </button>
          </div>
          <div className='menu'>
            <button
              className='button'
              onClick={() => scrollCLick(listClassSection[0])}
            >
              {t('header.introduction.btn')}
            </button>
          </div>
          {/* Contact */}
        </>
      </div>

      <ModalDownload
        show={show}
        setShow={setShow}
        setStatusButton={setStatusButton}
      />
    </>
  );
};

export default Header;
