import { createSlice } from '@reduxjs/toolkit';
import { addProduct, getProducts } from './productsApi';

const productSlice = createSlice({
    name: 'products',
    initialState: { items: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export const productsReducer = productSlice.reducer;
