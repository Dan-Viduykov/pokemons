import { FC } from "react";
import styles from "./Rating.module.scss";

interface RatingProps {
    value: number;
}

const Rating: FC<RatingProps> = ({ value }) => {
    return (
        <div className={styles.rating}>
            <div className={styles.rating__body}>
                <div className={styles.rating__active} style={{ width: `${value}%`}}></div>
                <div className={styles.rating__list}>
                    <input type="radio" className={styles.rating__item} value={1} name={'rating'} />
                    <input type="radio" className={styles.rating__item} value={2} name={'rating'} />
                    <input type="radio" className={styles.rating__item} value={3} name={'rating'} />
                    <input type="radio" className={styles.rating__item} value={4} name={'rating'} />
                    <input type="radio" className={styles.rating__item} value={5} name={'rating'} />
                </div>
            </div>
            <div className={styles.rating__value}>{value}</div>
        </div>
    )
}

export default Rating