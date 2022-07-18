import { FC, useState } from "react";
import Dropdown from "../Dropdown";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
    const [ search, setSearch ] = useState('');
    const [ debounce, setDebounce ] = useState('');

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