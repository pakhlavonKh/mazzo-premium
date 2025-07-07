import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language} className="lang-switcher">
      <option value="en">EN</option>
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default LanguageSwitcher;
