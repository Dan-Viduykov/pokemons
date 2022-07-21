import styles from "./HomeScreen.module.scss";
import { FC } from "react";
import Search from "../../Search";
import PokemonShort from "../../PokemonShort";

const HomeScreen: FC = () => {
    return (
        <div className={styles.home}>
            <Search className={styles.home__search} />
            <PokemonShort className={styles.home__pokemon} />
        </div>
    )
}

export default HomeScreen