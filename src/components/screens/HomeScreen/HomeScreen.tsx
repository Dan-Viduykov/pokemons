import styles from "./HomeScreen.module.scss";
import { FC } from "react";
import PokemonCard from "../../PokemonCard";
import Search from "../../Search";

const HomeScreen: FC = () => {
    return (
        <div className={styles.home}>
            <Search className={styles.home__search} />
            <PokemonCard className={styles.home__pokemon} />
        </div>
    )
}

export default HomeScreen