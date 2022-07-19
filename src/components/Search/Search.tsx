import { FC, useState } from "react";
import { useGetPokemonQuery, useGetPokemonsQuery } from "../../services/pokemon.api";
import Dropdown from "../Dropdown";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
    const [ search, setSearch ] = useState('');
    const [ debounce, setDebounce ] = useState('');
    // const { isLoading: pokemonLoading, isError: pokemonError, data: pokemon} = useGetPokemonQuery('ditto');
    const { isLoading: pokemonsLoading, isError: pokemonsError, data: pokemons} = useGetPokemonsQuery(15);
    console.log(pokemons);

    return (
        <div className={`${styles.search} ${className}`}>
            <input
                className={styles.search__input}
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)} />
            <Dropdown />
        </div>
    )
}

export default Search