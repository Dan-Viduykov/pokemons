import { FC } from "react";
import { IPokemon } from "../../models/pokemon";
import styles from "./Dropdown.module.scss";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
    className?: string;
    pokemon: IPokemon;
}

const Dropdown: FC<DropdownProps> = ({ className, pokemon }) => {
    return (
        <ul className={`${styles.dropdown} ${className}`}>
            <DropdownItem pokemon={pokemon} />
        </ul>
    )
}

export default Dropdown