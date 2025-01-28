import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/products.slice';
import { basketReducer } from '../features/basket/basket.slice';

export const store = configureStore({
    reducer: { products: productsReducer, basket: basketReducer },
});
