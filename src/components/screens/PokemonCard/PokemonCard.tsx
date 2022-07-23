import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonQuery, useGetPokemonDescriptionQuery } from "../../../services/pokemon.api";
import Rating from "../../Rating";
import Text from "../../Text";
import Title from "../../Title";
import styles from "./PokemonCard.module.scss";

interface PokemonCardProps {
    className?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ className }) => {
    const { name = '' } = useParams<{name?: string}>();
    const { data: pokemon } = useGetPokemonQuery(name, { skip: name.length < 2 });
    const { data: options } = useGetPokemonDescriptionQuery(name, { skip: name.length < 2 });

    const description = options?.flavor_text_entries[0].flavor_text;
    const img = pokemon?.sprites.other["official-artwork"].front_default;
    const namePokemon = pokemon?.name;

    
    return (
        <div className={`${styles.pokemon} ${className}`}>
            <section className={`${styles.pokemon__section} ${styles.pokemon__img}`}>
                <Title Tag="h2" className={styles.pokemon__title}>{namePokemon}</Title>
                <img src={img} alt={pokemon?.name} />
            </section>
            <section className={`${styles.pokemon__section}`}>
                <Text size={20}>{description}</Text>
                <div className={styles.pokemon__description}>
                    <Text className={styles.pokemon__info} size={20}><span>height</span>{pokemon?.height}</Text>
                    <Text className={styles.pokemon__info} size={20}><span>weight</span>{pokemon?.weight}</Text>
                    <Text className={styles.pokemon__info} size={20}><span>types</span>{pokemon?.types[0].type.name}</Text>
                </div>
                <ul className={styles.pokemon__stats}>
                    { pokemon?.stats.map((stat) => {
                        return (
                            <li
                                key={stat.stat.url}
                                className={styles.pokemon__stat}>
                                <span>{stat.stat.name}</span>
                                <Rating value={stat.base_stat} />
                            </li>)
                    })}
                </ul>
            </section>
        </div>

    )
}

export default PokemonCard