import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/users/users.slice';

export const store = configureStore({
    reducer: { users: userReducer },
});
