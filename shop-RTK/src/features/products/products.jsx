import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, moveToBasket } from "./productsApi";
import styles from './product.module.css'
import { data, useNavigate } from "react-router";
import { toast,ToastContainer } from "react-toastify";
import { getBasketProductById, updateBasketProduct } from "../basket/basketApi";

export const Products = () => {
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts())
    },[])
    const handleMove = async (id, data) => {
        try {
            const basketData = await getBasketProductById(id)
    
            if (!basketData) {
                await moveToBasket({ ...data, count: 1 }); 
                toast.success('Moved to Basket', { autoClose: 1500 });
            } else {
                await updateBasketProduct(id, {
                    ...basketData,
                    count: basketData.count ? basketData.count + 1 : 1
                })
                toast.success('Basket updated', { autoClose: 1500 });
            }
        } catch (err) {
            toast.error(err.message || "Something went wrong", { autoClose: 1500 });
        }
    };
    

    return (
        <div className={styles.container}>
            <ToastContainer/>
            <h1 className={styles.heading}>Products</h1>
            {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.price}>${product.price}</div>
                    <div className={styles.quantity}>Quantity: {product.quantity}</div>
                    <div className={styles.quantity}>Category: {product.category}</div>
                    <strong>
                        <button className={styles.edit} onClick={() =>  navigate('product/edit/' + product.id)}>Edit</button>
                        <button className={styles.move} onClick={() => handleMove(product.id,product)}>Move to cart</button>
                    </strong>
                </div>
            ))}
        </div>
    );
}