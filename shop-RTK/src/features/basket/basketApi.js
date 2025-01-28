import { createAsyncThunk } from '@reduxjs/toolkit';
import { Http } from '../../helpers/Axios';

export const getBasketProducts = createAsyncThunk('basket/get', async () => {
    const response = await Http.get('/basket');
    return response.data;
});

export const updateBasketProductThunk = createAsyncThunk(
    '/basket/update',
    async (obj) => {
        try {
            const response = await Http.patch('/basket/' + obj.id, obj.data);
            return response.data;
        } catch (err) {
            console.error('Error updating basket item:', err);
            throw err;
        }
    },
);

export const getBasketProductById = async (id) => {
    try {
        const response = await Http.get('/basket/' + id);
        return response.data;
    } catch (err) {
        console.error('Error fetching basket item:', err);
        return undefined;
    }
};

export const updateBasketProduct = async (id, data) => {
    try {
        const response = await Http.patch('/basket/' + id, data);
        return response.data;
    } catch (err) {
        console.error('Error updating basket item:', err);
        throw err;
    }
};

export const deleteProduct = async (id) => {
    const response = await Http.delete('/basket/' + id);
    return response.data;
};
