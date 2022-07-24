import { FC } from "react";
import { Link } from "react-router-dom";
import { IFav } from "../../../../store/pokemon.slice";
import Title from "../../../Title";
import styles from "./FavItem.module.scss";

interface FavItemProps {
    className?: string;
    fav: IFav;
}

const FavItem: FC<FavItemProps> = ({ className, fav }) => {

    return (
        <div className={`${styles.card} ${className}`}>
            <Title className={styles.card__title} Tag='h4'>{fav.name}</Title>
            <div className={styles.card__img}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fav.id}.png`} alt="" />
            </div>
            <div className={styles.card__actions}>
                <Link className={styles.card__link} to={`/pokemon/${fav.name}`}>
                    Card
                </Link>
                <button className={styles.card__add}>★</button>
            </div>
        </div>
    )
}

export default FavItem