import { FC } from "react";
import { IPokemon } from "../../../../models/pokemon";
import Text from "../../../Text";
import styles from "./Characteristics.module.scss";

interface CharacteristicsProps {
    className?: string;
    pokemon: IPokemon;
}

const Characteristics: FC<CharacteristicsProps> = ({ className, pokemon }) => {
    return (
        <div className={`${styles.characteristics} ${className}`}>
            <Text className={styles.characteristics__parameter} size={20}>
                <span className={styles.characteristics__name}>Order</span>
                <span className={styles.characteristics__value}>{pokemon.order}</span>
            </Text>
            <Text className={styles.characteristics__parameter} size={20}>
                <span className={styles.characteristics__name}>Height</span>
                <span className={styles.characteristics__value}>{pokemon.height}</span>
            </Text>
            <Text className={styles.characteristics__parameter} size={20}>
                <span className={styles.characteristics__name}>Weight</span>
                <span className={styles.characteristics__value}>{pokemon.weight}</span>
            </Text>
            <Text className={styles.characteristics__parameter} size={20}>
                <span className={styles.characteristics__name}>Types</span>
                {pokemon.types.map(type => {
                    return (
                        <span
                            key={type.type.name}
                            className={styles.characteristics__type}>
                            {type.type.name}
                        </span>)
                })}
            </Text>
        </div>  
    )
}

export default Characteristics