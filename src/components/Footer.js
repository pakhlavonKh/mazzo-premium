import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
      <footer className="footer">
        <ul className="nav">
          <li className="nav__item"><a href="#about" className="nav__link">{t('footer.find')}</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">{t('footer.contact')}</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">{t('footer.delivery')}</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">{t('footer.return')}</a></li>
        </ul>
        <p className="copyright">© Copyright 2025 by Pakhlavon Khamidov</p>
      </footer>
  );
}

export default Footer;