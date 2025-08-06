import React, { useContext } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { BasketContext } from '../context/BasketContext';
import Gallery from '../components/Gallery';
import { useTranslation } from 'react-i18next';

function Basket() {
  const { basket , toggleItem} = useContext(BasketContext);
  const { t } = useTranslation();

  return (
    <div className="container">
      <Header />
      <Sidebar />

      <main style={{ gridColumn: 'center-start / center-end', marginTop: '5rem' }}>
        <h2 className="heading-2" style={{ marginBottom: '3rem' }}>{t('basket')}</h2>

        {basket.length === 0 ? (
          <p style={{
            fontSize: '1.6rem',
            padding: '2rem',
            backgroundColor: '#f9f7f6',
            borderRadius: '5px',
            minHeight: '20rem'
          }}>
            {t('emptyBasket')}
          </p>
        ) : (
          <section className="cards" style={{ minHeight: '40rem' }}>

            {basket.map((home) => {
              
              const liked = basket.find((item) => item.id === home.id);

              return(
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
                  <p>{home.rooms}</p>
                </div>
                <div className="card__price">
                  <svg><use xlinkHref="/img/sprite.svg#icon-key" /></svg>
                  <p>{home.price}</p>
                </div>
                <button className="btn card__btn">{t('order')}</button>
              </div>);
})}
          </section>
        )}
      </main>

      <Gallery />
      <Footer />
    </div>
  );
}

export default Basket;
