import { FC, useState } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
    className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
    const [ search, setSearch ] = useState('')

    return (
        <div className={styles.search}>
            <input
                className={`${styles.search__input} ${className}`}
                type="text"
                placeholder="enter a name"
                value={search}
                onChange={e => setSearch(e.target.value)} />
        </div>
    )
}

export default Search