import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getBasketProducts, updateBasketProductThunk } from "./basketApi";
import styles from './basket.module.css';
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Basket = () => {
    const products = useSelector(state => state.basket.items);
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        dispatch(getBasketProducts());
    }, [dispatch]);

    if (!products) {
        return <div>Loading...</div>;
    }

    const handleUp = (id, data) => {
        if (data.count + 1 > data.quantity) {
            toast.error("Error: Count cannot be higher than quantity");
        } else {
            const updatedData = { ...data, count: data.count + 1 };
            const obj = { data: updatedData, id };
            dispatch(updateBasketProductThunk(obj));
        }
    };

    const handleDown = (id, data) => {
        if (data.count - 1 === 0) {
            deleteProduct(id).then(() => {
                dispatch(getBasketProducts());
            });
        } else {
            const updatedData = { ...data, count: data.count - 1 };
            const obj = { data: updatedData, id };
            dispatch(updateBasketProductThunk(obj));
        }
    };

    const getBasketTotal = () => {
        return products.reduce((total, product) => total + product.price * product.count, 0);
    };

    return (
        <div className={styles.container}>
            <ToastContainer />
            <h1 className={styles.title}>Basket</h1>
            <div className={styles.productsList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <div className={styles.productInfo}>
                            <span className={styles.infoItem}>Price: ${product.price}</span>
                            <span className={styles.infoItem}>Count: {product.count}</span>
                            <span className={styles.infoItem}>Remaining: {product.quantity - product.count}</span>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.countUp} onClick={() => handleUp(product.id, product)}>Count Up</button>
                            <button className={styles.countDown} onClick={() => handleDown(product.id, product)}>Count Down</button>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.totalButton} onClick={() => setModalIsOpen(true)}>Total</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <h2>Basket Summary</h2>
                <p>Total Price: <strong>${getBasketTotal()}</strong></p>
                <button className={styles.closeButton} onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};
