import { useReducer } from 'react';
import './App.css';
import { BookList } from './components/BookList';
import { BookContext } from './context/context';
import { Reducer } from './context/reducer';
import { initialState } from './context/state';
import './index.css';

function App() {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Phone Book App
                </h1>
                <BookContext.Provider value={{ state, dispatch }}>
                    <BookList />
                </BookContext.Provider>
            </div>
        </div>
    );
}

export default App;
