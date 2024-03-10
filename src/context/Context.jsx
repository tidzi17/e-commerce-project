import React, { createContext, useContext, useReducer, useEffect } from "react";
import productsData from '../data/products.json';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
  const cartFromStorage = localStorage.getItem('cart');
  const wishlistFromStorage = localStorage.getItem('wishlist');
  const initialState = {
    products: productsData,
    cart: cartFromStorage ? JSON.parse(cartFromStorage) : [], 
    wishlist: wishlistFromStorage ? JSON.parse(wishlistFromStorage) : [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart)); 
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const [productState, productDispatch] = useReducer(productReducer, {
    byRating: 0,
  });


  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;