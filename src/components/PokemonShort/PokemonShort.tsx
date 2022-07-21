import { FC } from "react";
import styles from "./PokemonShort.module.scss";

interface PokemonShortProps {
    className: string;
}

const PokemonShort: FC<PokemonShortProps> = ({className}) => {
    return (
        <div className={`${styles.poke} ${className}`}>
            PokemonShort
        </div>
    )
}

export default PokemonShort