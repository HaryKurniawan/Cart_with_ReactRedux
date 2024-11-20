import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, toggleCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;