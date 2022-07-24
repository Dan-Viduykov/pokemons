import { FC } from "react";
import styles from "./PokemonCard.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonQuery, useGetPokemonDescriptionQuery } from "../../../services/pokemon.api";
import Text from "../../Text";
import Title from "../../Title";
import Characteristics from "./Characteristics";
import Stats from "./Stats";
import Loading from "../../Loading";
import Error from "../../Error";
import { IPokemon } from "../../../models/pokemon";

interface PokemonCardProps {
    className?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ className }) => {
    const { name = '' } = useParams<{name?: string}>();
    const {
        isLoading: pokemonLoading,
        isFetching: pokemonFetching,
        isError: pokemonError,
        data: pokemon
    } = useGetPokemonQuery(name, { skip: name.length < 2 });
    const { 
        isError: optionsError,
        isFetching: optionsFetching,
        isLoading: optionsLoading,
        data: options
    } = useGetPokemonDescriptionQuery(name, { skip: name.length < 2 });
    const navigate = useNavigate()

    const description = options?.flavor_text_entries[0].flavor_text;
    const img = pokemon?.sprites.other["official-artwork"].front_default;
    const namePokemon = pokemon?.name;


    const content = (poke: IPokemon) => {
        return (
            <>
            <section className={`${styles.pokemon__section} ${styles.pokemon__img}`}>
                <button className={styles.pokemon__back} onClick={() => navigate(-1)}>←</button>
                <Title Tag="h2" className={styles.pokemon__title}>{namePokemon}</Title>
                <img src={img} alt={namePokemon} />
            </section>
            <section className={`${styles.pokemon__section}`}>
                <Text className={styles.pokemon__definition} size={18}>
                    {optionsFetching || optionsLoading ? <Loading /> : optionsError ? <Error /> : description}
                </Text>
                <Characteristics className={styles.pokemon__characteristics} pokemon={poke} />
                <Stats pokemon={poke}/>
            </section>
        </>    
        )
    }

    return (
        <div className={`${styles.pokemon} ${className}`}>
            {pokemonFetching || pokemonLoading ? <Loading /> : pokemonError ? <Error /> : content(pokemon!)}
        </div>        
    )
}

export default PokemonCard