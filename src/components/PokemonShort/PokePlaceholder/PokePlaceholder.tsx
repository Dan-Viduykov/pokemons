import { FC } from "react";
import styles from "./PokePlaceholder.module.scss";
import placeholder from '../../../sprites/poke-placeholder.png'

const PokePlaceholder: FC = () => {
    return (
        <div className={styles.placeholder}>
            <img className={styles.placeholder__img} src={placeholder} alt="" />
        </div>
    )
}

export default PokePlaceholder