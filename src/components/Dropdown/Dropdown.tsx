import { FC } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
    className?: string;
}

const Dropdown: FC<DropdownProps> = ({ className }) => {

    const createItem = () => {
        return (
            <li
                onClick={() => {}}
                className={styles.dropdown__item}
                >
                Dropdown
            </li>
        )
    }

    return (
        <ul className={`${styles.dropdown} ${className}`}>
            {createItem()}
        </ul>
    )
}

export default Dropdown