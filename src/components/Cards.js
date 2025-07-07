import React, { forwardRef, useContext } from 'react';
import { BasketContext } from '../context/BasketContext'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Homes = forwardRef(({ homes=[] }, ref) => {
  const { basket, toggleItem } = useContext(BasketContext);
  const navigate = useNavigate(); 
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <section className="cards" ref={ref}>
      {homes.map((home) => {
        const liked = basket.find((item) => item.id === home.id);

        return (
          <div className="card" key={home.id}>
            <img src={`/img/${home.src}`} alt={home.name} className="card__img" />

            <svg
              className={`card__like ${liked ? 'liked' : ''}`}
              onClick={() => toggleItem(home)} 
            >
              <use xlinkHref="/img/sprite.svg#icon-heart-full"></use>
            </svg>

            <h5 className="card__name">{home.name}</h5>

            <div className="card__people">
              <svg><use xlinkHref="/img/sprite.svg#icon-profile-male" /></svg>
              <p>{home.rooms} </p>
            </div>

            <div className="card__price">
              <svg><use xlinkHref="/img/sprite.svg#icon-key" /></svg>
              <p>{home.price}</p>
            </div>

            <button className="btn card__btn">{t('order')}</button>
          </div>
        );
      })}

      {location.pathname === '/' && (
        <div className="cards__more-wrapper">
          <button className="btn--outline" onClick={() => navigate('/catalog')}>{t('more')} </button>
        </div>
      )}
    </section>
  );
});

export default Homes;
