import { FC } from "react";
import { Link } from "react-router-dom";
import { IPokemon } from "../../../models/pokemon";
import styles from "./DropdownItem.module.scss";

interface DropdownItemProps {
    pokemon: IPokemon;
}

const DropdownItem: FC<DropdownItemProps> = ({ pokemon }) => {
    return (
        <li
            onClick={() => {}}
            className={styles.dropdown__item}
            >
            <Link to={`/pokemon/${pokemon.name}`}>
                {pokemon.name}
            </Link>
        </li>
    )
}

export default DropdownItem