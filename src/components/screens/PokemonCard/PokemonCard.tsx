import { FC } from "react";
import styles from "./PokemonCard.module.scss";
import { useParams } from "react-router-dom";
import { useGetPokemonQuery, useGetPokemonDescriptionQuery } from "../../../services/pokemon.api";
import Text from "../../Text";
import Characteristics from "./Characteristics";
import Stats from "./Stats";
import Loading from "../../Loading";
import Error from "../../Error";
import { IPokemon } from "../../../models/pokemon";
import SectionImg from "./SectionImg";

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

    const description = options?.flavor_text_entries[0].flavor_text;

    const content = (poke: IPokemon) => {
        return (
            <>
                <SectionImg className={styles.pokemon__section} pokemon={poke} />
                <section className={`${styles.pokemon__section}`}>
                    <div className={styles.pokemon__definition}>
                        {optionsFetching || optionsLoading ? <Loading /> : optionsError ? <Error /> : <Text size={18}>{description}</Text>}
                    </div>
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