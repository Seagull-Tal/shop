import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import styles from './ProductPage.module.css';

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className={styles.message}>Загрузка...</p>;
    if (error || !product) {
        return (
            <div className={styles.page}>
                <p className={styles.message}>Товар не найден</p>
                <button className={styles.back} onClick={() => navigate(-1)}>
                    НАЗАД
                </button>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h2 className={styles.title}>{product.title}</h2>
                <img src={product.image} alt={product.title} className={styles.image} />
                <p className={styles.text}>Price: {product.price} $</p>
                <p className={styles.text}>Description: {product.description}</p>
                <Rating rate={product.rating.rate} />
            </div>
            <button className={styles.back} onClick={() => navigate(-1)}>
                НАЗАД
            </button>
        </div>
    );
}

export default ProductPage;