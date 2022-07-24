import { FC } from "react";
import { Link } from "react-router-dom";
import Title from "../../../Title";
import styles from "./FavItem.module.scss";

interface FavItemProps {
    className?: string;
}

const FavItem: FC<FavItemProps> = ({ className }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <Title className={styles.card__title} Tag="h2">name</Title>
            <div className={styles.card__img}>
                <img src="" alt="" />
            </div>
            <div className={styles.card__actions}>
                <Link className={styles.card__link} to={`pokemon/${1}`}>
                    Card
                </Link>
                <button className={styles.card__add}>★</button>
            </div>
        </div>
    )
}

export default FavItem