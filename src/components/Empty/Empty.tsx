import { FC } from "react";
import styles from "./Empty.module.scss";

interface EmptyProps {
    className?: string;
}

const Empty: FC<EmptyProps> = ({ className }) => {
    return (
        <section className={`${styles.empty} ${className}`}>
            <img
                src={`https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png`}
                alt="" />
        </section>
    )
}

export default Empty