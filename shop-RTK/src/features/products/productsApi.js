import { createAsyncThunk } from '@reduxjs/toolkit';
import { Http } from '../../helpers/Axios';

export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await Http.get('/products');

    return response.data;
});

export const addProduct = async (payload) => {
    const response = await Http.post('/products', payload);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await Http.get('/products/' + id);
    return response.data;
};
export const editProduct = async (id, data) => {
    const response = await Http.patch('/products/' + id, data);
    return response.data;
};

export const moveToBasket = async (data) => {
    const response = await Http.post('/basket', data);
    return response.data;
};

export const addCategorie = async (data) => {
    const response = await Http.post('/categories', data);
    return response.data;
};

export const getCategories = async () => {
    const response = await Http.get('/categories');
    return response.data;
};

export const getCategoryByName = async (name) => {
    const response = await Http.get('/categories?name=' + name);
    return response.data;
};
