import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { useGetPokemonsNameQuery } from "../../services/pokemon.api";
import { AppSlice } from "../../store/pokemon.slice";
import Empty from "../Empty";
import Text from "../Text";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
    className?: string;
    value: string;
}

const Dropdown: FC<DropdownProps> = ({ className, value }) => {
    const { data } = useGetPokemonsNameQuery(10000);
    const dispatch = useAppDispatch();
    const { changeCurrentPokemon } = AppSlice.actions

    const createItem = (name: string) => {
        return (
        <li
            className={styles.dropdown__item}
            key={name}
            onClick={() => dispatch(changeCurrentPokemon(name))} >
            <Text size={18}>
                {name}
            </Text>
        </li>)
    }

    const filteredNames = (arr: string[]) => {
        return arr.filter((name) => {
            const length = value.length;
            return name.slice(0, length) === value.slice(0, length)
        })
    }

    return (
        <ul className={`${styles.dropdown} ${className}`}>
            {
                data ? 
                    filteredNames(data).length > 0 ?
                        filteredNames(data).map(name => createItem(name)) :
                        <Empty className={styles.dropdown__empty} /> :
                null
            }
        </ul>
    )
}

export default Dropdown