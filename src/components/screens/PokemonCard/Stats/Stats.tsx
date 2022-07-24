import { FC } from "react";
import { IPokemon } from "../../../../models/pokemon";
import Rating from "../../../Rating";
import styles from "./Stats.module.scss";

interface StatsProps {
    className?: string;
    pokemon: IPokemon;
}

const Stats: FC<StatsProps> = ({ className, pokemon }) => {
    const createItem = (url: string, name: string, base: number) => {
        return (
            <li key={url} className={styles.stats__item}>
                <span>{name}</span>
                <Rating value={base} />
            </li>
        )
    }

    return (
        <ul className={`${styles.stats} ${className}`}>
            { pokemon.stats.map((stat) => createItem(stat.stat.url, stat.stat.name, stat.base_stat))}
        </ul>
    )
}

export default Stats