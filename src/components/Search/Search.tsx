import { FC, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { useGetPokemonQuery } from "../../services/pokemon.api";
import Dropdown from "../Dropdown";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
    const [ search, setSearch ] = useState('pikachu');
    const debounce = useDebounce(search);

    const { isLoading: pokemonLoading, isError: pokemonError, data: pokemonLink} = useGetPokemonQuery(debounce, {
        skip: debounce.length < 2
    });

    return (
        <div className={`${styles.search} ${className}`}>
            <input
                className={styles.search__input}
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)} />
            { pokemonLink && <Dropdown pokemon={pokemonLink} />}
        </div>
    )
}

export default Search