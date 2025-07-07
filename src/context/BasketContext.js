import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const stored = localStorage.getItem('basket');
    return stored ? JSON.parse(stored) : [];
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const toggleItem = (item) => {
    const exists = basket.find((i) => i.id === item.id);
    if (exists) {
      setBasket(basket.filter((i) => i.id !== item.id));
      showToast(`${item.name} удалено из избранного`);
    } else {
      setBasket([...basket, item]);
      showToast(`${item.name} добавлено в избранное`);
    }
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500); // Auto-hide after 2.5s
  };

  return (
    <BasketContext.Provider value={{ basket, toggleItem, toast }}>
      {children}
      {toast && <div className="toast">{toast}</div>}
    </BasketContext.Provider>
  );
};
