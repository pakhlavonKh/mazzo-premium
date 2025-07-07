import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <input
        type="checkbox"
        id="nav-toggle"
        className="navigation__checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><Link to="/" className="navigation__link">{t('sidebar.home')}</Link></li>
            <li className="navigation__item"><Link to="/catalog" className="navigation__link">{t('sidebar.catalog')}</Link></li>
            <li className="navigation__item"><Link to="/basket" className="navigation__link">{t('sidebar.basket')}</Link></li>
            <li className="navigation__item"><Link to="/login" className="navigation__link">{t('sidebar.account')}</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;