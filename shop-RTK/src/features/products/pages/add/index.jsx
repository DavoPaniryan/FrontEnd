import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./add.module.css";
import { toast ,ToastContainer} from "react-toastify";
import { addCategorie, addProduct, getCategories, getCategoryByName } from "../../productsApi";

export const AddProduct = () => {
    const [categories,setCategories] = useState([])
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            category: categories.length > 0 ? categories[0] : "" 
        }
    });
    const [text,setText] = useState('')
    const [visible,setVisible] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res)
        })
    },[])

    const handleSelectChange = (value) => {
        if(value == 'other') {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const handleCategorySave = (name) => {
        getCategoryByName(name).then(res => {
            if(res.length > 0) {
                toast.error("you can't add this category")
            }else {
                addCategorie({name}).then(() => {
                    toast.success('category added successfuly')
                    setVisible(false);
                    getCategories().then(res => {
                        setCategories(res)
                    })
                })
            }
        })
    }

    const handleSave = (data) => {
        addProduct(data).then(() => {
            toast.success('product added successfuly nacigateing to main page',{
                autoClose : 1500,
                onClose : () => navigate('/')
            })
        }).catch(err => {
            toast.error(err.message)
        })
    };


    return (
        <div className={styles.container}>
            <ToastContainer/>
            <h1 className={styles.heading}>Add Product</h1>
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
                <select {...register('category')} onChange={(e) =>handleSelectChange(e.target.value)}>
                    {categories.map(category => <option  key={category.name} value={category.name}>{category.name}</option>)}
                    <option  value="other">other</option>
                </select>
                {visible && <input type="text" placeholder="enter new category" className={styles.input} onChange={(e) => setText(e.target.value)}/>}
                {visible && <button type="button" onClick={() => handleCategorySave(text)}>save category</button>}
                <button type="submit" className={styles.button}>
                    Save
                </button>
            </form>
        </div>
    );
};
