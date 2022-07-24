import { FC } from "react";
import styles from "./Error.module.scss";
import ErrorImg from "../../sprites/error.webp"
import Text from "../Text";

const Error: FC = () => {
    return (
        <div className={styles.error}>
            <img className={styles.error__img} src={ErrorImg} alt="" />
            <Text size={18} bold>Error</Text>
        </div>
    )
}

export default Error