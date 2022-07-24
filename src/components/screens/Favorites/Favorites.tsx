import { FC } from "react";
import FavItem from "./FavItem";
import styles from "./Favorites.module.scss";

const Favorites: FC = () => {
    const names = [ 'lorem', 'lorem2', 'lorem3', 'lorem4', 'lorem5', ];

    return (
        <div className={styles.favorites}>
            <ul className={styles.favorites__list}>
                {names.map(name => (
                    <li className={styles.favorites__item} key={name}>
                        <FavItem />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites