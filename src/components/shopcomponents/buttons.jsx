import React from 'react';
import { CartState } from '../../context/Context';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const AddToCartButton = ({ prod,  addButtonStyle  }) => {
  const { dispatch } = CartState();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: prod,
    });
  };

  return (
    <button
      onClick={addToCart}
      disabled={!prod.inStock}
      className={addButtonStyle}>
      {!prod.inStock ? 'Out of Stock' : 'Add to cart'}
    </button>
  );
};

const RemoveFromCartButton = ({ prod,  addButtonStyle  }) => {
  const { dispatch } = CartState();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: prod,
    });
  };

  return (
    <button
      onClick={removeFromCart}
      className={addButtonStyle}>
      Remove from cart
    </button>
  );
};


const AddToWishlist = ({ prod,  addButtonStyle  }) => {
    const { dispatch } = CartState();
  
    const addToWishlist = () => {
      dispatch({
        type: 'ADD_TO_WISHLIST',
        payload: prod,
      });
    };
  
    return (
      <button
        onClick={addToWishlist}
        className={addButtonStyle}>
            <FaRegHeart />
      </button>
    );
  };


const RemoveFromWishlist = ({ prod,  addButtonStyle  }) => {
    const { dispatch } = CartState();
  
    const removeFromWishlist = () => {
      dispatch({
        type: 'REMOVE_FROM_WISHLIST',
        payload: prod,
      });
    };
  
    return (
      <button
        onClick={removeFromWishlist}
        className={addButtonStyle}>
        <FaHeart />
      </button>
    );
  };

export { AddToCartButton, RemoveFromCartButton, AddToWishlist, RemoveFromWishlist };