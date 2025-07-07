import React from 'react';
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();
  const features = t('features', { returnObjects: true });const 
  icons = [
    'fa-award',
    'fa-palette',
    'fa-truck',
    'fa-layer-group',
    'fa-boxes-stacked',
    'fa-location-dot',
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <i className={`fa-solid ${icons[index]} feature__icon`}></i>
          <h4 className="heading-4 heading-4--dark">{feature.title}</h4>
          <p className="feature__text">{feature.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;