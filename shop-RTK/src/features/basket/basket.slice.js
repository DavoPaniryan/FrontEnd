import { createSlice } from '@reduxjs/toolkit';
import { getBasketProducts, updateBasketProductThunk } from './basketApi';

const basketSlice = createSlice({
    name: 'basket',
    initialState: { items: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBasketProducts.fulfilled, (state, action) => {
            state.items = action.payload;
        });

        builder.addCase(updateBasketProductThunk.fulfilled, (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id == action.payload.id) {
                    return { ...item, count: action.payload.count };
                }
                return item;
            });
        });
    },
});

export const basketReducer = basketSlice.reducer;
