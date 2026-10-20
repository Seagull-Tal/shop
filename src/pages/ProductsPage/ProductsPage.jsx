import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import styles from './ProductsPage.module.css';

const url = 'https://fakestoreapi.com/products';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className={styles.message}>Загрузка...</p>;
    if (error) return <p className={styles.message}>Не удалось загрузить товары</p>;

    return (
        <div className={styles.grid}>
            {products.map((item) => (
                <div key={item.id} className={styles.card}>
                    <Link to={`/product/${item.id}`} className={styles.title}>
                        {item.title}
                    </Link>
                    <Rating rate={item.rating.rate} />
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;