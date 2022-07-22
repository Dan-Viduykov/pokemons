import styles from "./HomeScreen.module.scss";
import { FC } from "react";
import PokemonShort from "../../PokemonShort";
import { useGetPokemonsQuery } from "../../../services/pokemon.api";
import { useDispatch } from "react-redux";
import { AppSlice } from "../../../store/pokemon.slice";

const HomeScreen: FC = () => {
    const { data } = useGetPokemonsQuery(10000);
    const dispatch = useDispatch()
    const { getPokemonsName } = AppSlice.actions

    
    if (data) dispatch(getPokemonsName(data))

    return (
        <div className={styles.home}>
            <PokemonShort className={styles.home__pokemon} />
        </div>
    )
}

export default HomeScreen