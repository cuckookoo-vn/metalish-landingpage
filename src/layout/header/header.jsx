import React, { useState } from 'react';
import './header.styles.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import ModalDownload from '../../components/modal-download/modal-download';

const Header = () => {
  const images = {
    logoHeader: process.env.PUBLIC_URL + '/images/header/logo-ckk-header.png',
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

  const [show, setShow] = useState(false);

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

  return (
    <>
      <div className='header'>
        <img
          className='logo'
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt=''
        />
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
              className='language-btn language-btn-lang'
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
        </>
      </div>

      <ModalDownload show={show} setShow={setShow} setStatusButton={setStatusButton}/>

    </>
  );
};

export default Header;
