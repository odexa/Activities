import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  cart: [],
  isSaving: false,
  addToCart: () => {},
});

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // Simulated save: "Saving..." for 1 second, then the cart updates
  const addToCart = (item) => {
    setIsSaving(true);
    setTimeout(() => {
      setCart((prev) => [...prev, item]);
      setIsSaving(false);
    }, 1000);
  };

  return (
    <AppContext.Provider value={{ cart, isSaving, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};