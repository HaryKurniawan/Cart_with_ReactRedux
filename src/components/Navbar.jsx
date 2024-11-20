import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">My Store</a>
      <button 
        className="btn btn-primary" 
        onClick={() => dispatch(toggleCart())}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
