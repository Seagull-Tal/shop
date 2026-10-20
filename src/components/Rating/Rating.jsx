import styles from './Rating.module.css';

function Rating({ rate }) {
    const rounded = Math.round(rate);

    return (
        <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rounded ? styles.filled : styles.empty}
                >
          ★
        </span>
            ))}
        </div>
    );
}

export default Rating;