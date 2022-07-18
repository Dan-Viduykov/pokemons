import { FC } from "react";
import styles from "./PokemonCard.module.scss";

interface PokemonCardProps {
    className?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ className }) => {
    return (
        <div className={`${styles.pokemon} ${className}`}>
            PokemonCard
        </div>
    )
}

export default PokemonCard