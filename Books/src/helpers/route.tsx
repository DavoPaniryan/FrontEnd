import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import { BookList } from '../pages/BookList';
import { AddBook } from '../pages/AddBook';
import { AddAuthor } from '../pages/AddAuthor';
import { Details } from '../pages/details';
export const paths = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            { path: '', element: <BookList /> },
            { path: '/add', element: <AddBook /> },
            { path: '/addAuthor', element: <AddAuthor /> },
            { path: 'details/:id', element: <Details /> },
        ],
    },
]);
