import { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import FavItem from "./FavItem";
import styles from "./Favorites.module.scss";

const Favorites: FC = () => {
    const { favorites } = useAppSelector(state => state.App);

    return (
        <div className={styles.favorites}>
            <ul className={styles.favorites__list}>
                {favorites.map(fav => (
                    <li className={styles.favorites__item} key={fav.id}>
                        <FavItem fav={fav} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites