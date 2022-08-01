import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useGetPokemonQuery } from "../../services/pokemon.api";
import Text from "../Text";
import Title from "../Title";
import View from "../View";
import styles from "./PokemonShort.module.scss";
import PokePlaceholder from "./PokePlaceholder";

interface PokemonShortProps {
    className: string;
}

const PokemonShort: FC<PokemonShortProps> = ({className}) => {
    const { currentPokemon } = useAppSelector(state => state.App);
    const { isLoading, isError, isFetching, data } = useGetPokemonQuery(currentPokemon, {skip: currentPokemon.length < 2});

    const img = data?.sprites.other["official-artwork"].front_default;
    const name = data?.name;

    const content = <>
        <div className={styles.poke__info}>
            <Title className={styles.poke__title}>{name}</Title>
            <Link
                className={styles.poke__link}
                to={`/pokemon/${name}`}>
                <Text size={20}>Pokemon Card</Text>
            </Link>
        </div>
        <img
            className={styles.poke__img}
            src={img}
            alt={data?.name} />
    </> 
    
    return ( 
        <div className={`${styles.poke} ${className}`}>
            {
                currentPokemon.length === 0 ?
                    <PokePlaceholder /> :
                    <View isErr={isError} isFetch={isFetching} isLoad={isLoading}>
                        {content}
                    </View>
            }
        </div>
    )
}

export default PokemonShort