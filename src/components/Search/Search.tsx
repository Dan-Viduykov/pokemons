import { FC, useState } from "react";
import Dropdown from "../Dropdown";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
    const [ search, setSearch ] = useState('')

    return (
        <div className={`${styles.search} ${className}`}>
            <input
                className={`${styles.search__input}`}
                type="text"
                placeholder="enter a name"
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)} />
            {search.length !== 0 && <Dropdown value={search} className={styles.search__dropdown} />}
        </div>
    )
}

export default Search