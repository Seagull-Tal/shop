import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <h1 className={styles.code}>404</h1>
            <p className={styles.text}>Страница не найдена</p>
            <button className={styles.button} onClick={() => navigate('/products')}>
                К списку товаров
            </button>
        </div>
    );
}

export default NotFoundPage;