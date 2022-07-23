import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useGetPokemonQuery } from "../../services/pokemon.api";
import Error from "../Error";
import Loading from "../Loading";
import Text from "../Text";
import Title from "../Title";
import styles from "./PokemonShort.module.scss";

interface PokemonShortProps {
    className: string;
}

const PokemonShort: FC<PokemonShortProps> = ({className}) => {
    const { currentPokemon } = useAppSelector(state => state.App);
    const { isLoading, isError, isFetching, data } = useGetPokemonQuery(currentPokemon, {skip: currentPokemon.length < 2});

    const img = data?.sprites.other["official-artwork"].front_default;
    const name = data?.name;
    
    return ( 
        <>
            {data &&
                <div className={`${styles.poke} ${className}`}>
                    {isError && <Error />}
                    {isFetching || isLoading ? <Loading className={styles.poke__loading} /> :
                        <>
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
                                alt={data.name} />
                        </> 
                    }
                </div>
            }
        </>
    )
}

export default PokemonShort