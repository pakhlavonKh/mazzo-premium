import React from 'react';
import { useTranslation } from 'react-i18next';

function Story() {
  const { t } = useTranslation();

  return (
    <>
      <div className="story__pictures">
        <img src="img/story-1.jpeg" alt="Couple with new house" className="story__img--1" />
        <img src="img/story--2.jpg" alt="New house" className="story__img--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">{t('story.h3')}</h3>
        <h2 className="heading-2 heading-2--dark mb-md">“{t('story.h2')}”</h2>
        <p className="story__text">{t('story.text')}</p>
        <button className="btn">{t('story.button')}</button>
      </div>
      </>
  );
}

export default Story;