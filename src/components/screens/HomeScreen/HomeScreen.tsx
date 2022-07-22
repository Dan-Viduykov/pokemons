import styles from "./HomeScreen.module.scss";
import { FC } from "react";
import PokemonShort from "../../PokemonShort";
import Search from "../../Search";

const HomeScreen: FC = () => {
    return (
        <div className={styles.home}>
            <Search className={styles.home__search} />
            <PokemonShort className={styles.home__pokemon} />
        </div>
    )
}

export default HomeScreen