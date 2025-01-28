import { createBrowserRouter } from "react-router";
import { Products } from "./features/products/products";
import { Basket } from "./features/basket/basket";
import { AddProduct } from "./features/products/pages/add";
import {Layout} from './features/layout/Layout'
import { EditProduct } from "./features/products/pages/edit";


export const routes = createBrowserRouter([

   {path : '/',element : <Layout/> ,children: [
    {
        path: '/',
        element: <Products/>,
    },
    {
        path: '/basket',
        element: <Basket/>,
    },
    {path : '/product/add',element : <AddProduct/>},
    {path : '/product/edit/:id',element : <EditProduct/>}
   ]}
])