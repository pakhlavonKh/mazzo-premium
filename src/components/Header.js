import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../context/BasketContext';  
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { basket } = useContext(BasketContext);
  const { t } = useTranslation();

  return (
    <header className="header">
      <Link to="/">
        <img src="img/logo-ts.png" alt="mazzo logo" className="header__logo" />
      </Link>
      <LanguageSwitcher />

      <Link to="/basket" className="header__basket">
        {t('basket')} [{basket.length}]
      </Link>

      <Link to="/login" className="header__login">
        {t('register')}
      </Link>
    </header>
  );
}

export default Header;
