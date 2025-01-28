import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editProduct, getProductById } from "../../productsApi";
import styles from "./edit.module.css";
import { toast ,ToastContainer} from "react-toastify";

export const EditProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id).then((res) => {
            reset({
                title: res?.title,
                price: res?.price,
                quantity: res?.quantity
            });
            setLoading(false);
        });
    }, [id, reset]);

    const handleSave = (data) => {
       editProduct(id,data).then(() => {
        toast.success("Product edited successfully.Moving to main page", {
            autoClose: 1500,
            onClose : () => navigate('/')
        });
       }).catch(err => {
        toast(err.stack)
       })
    };

    if (loading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            <ToastContainer/>
            <h1 className={styles.heading}>Edit Product</h1>
            <form onSubmit={handleSubmit(handleSave)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Title</label>
                    <input
                        type="text"
                        {...register('title', { required: 'Please fill the title' })}
                        className={styles.input}
                    />
                    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Price</label>
                    <input
                        type="number"
                        {...register('price', {
                            required: 'Please fill the price',
                            setValueAs: (value) => +value
                        })}
                        className={styles.input}
                    />
                    {errors.price && <p className={styles.error}>{errors.price.message}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Quantity</label>
                    <input
                        type="number"
                        {...register('quantity', {
                            required: 'Please fill the quantity',
                            setValueAs: (value) => +value
                        })}
                        className={styles.input}                    />
                    {errors.quantity && <p className={styles.error}>{errors.quantity.message}</p>}
                </div>
                <button type="submit" className={styles.button}>
                    Save
                </button>
            </form>
        </div>
    );
};
