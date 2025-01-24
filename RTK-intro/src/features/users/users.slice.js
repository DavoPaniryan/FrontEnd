import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [
            { id: 101, name: 'Lusine', age: 23, salary: 200000 },
            { id: 102, name: 'Armen', age: 24, salary: 300000 },
            { id: 103, name: 'Rafo', age: 18, salary: 100000 },
            { id: 104, name: 'Mike', age: 30, salary: 300000 },
        ],
    },
    reducers: {
        remove: (state, action) => {
            state.list = state.list.filter((user) => user.id != action.payload);
            console.log(state);
        },
        salaryUp(state, action) {
            state.list.find((user) => {
                if (user.id == action.payload) {
                    user.salary += 50000;
                }
            });
        },
        salaryDown(state, action) {
            state.list.find((user) => {
                if (user.id == action.payload) {
                    if (user.salary - 50000 < 0) {
                        user.salary = 0;
                    } else {
                        user.salary -= 50000;
                    }
                }
            });
        },
    },
});

export const userReducer = userSlice.reducer;
export const { remove, salaryUp, salaryDown } = userSlice.actions;
