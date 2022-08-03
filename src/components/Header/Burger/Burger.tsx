import { FC } from "react";
import styles from "./Burger.module.scss";

interface BurgerProps {
    className?: string;
    active: boolean
    onClick?: () => void
}

const Burger: FC<BurgerProps> = ({ className, onClick, active }) => {    
    return (
        <div className={`${styles.burger} ${className}`}>
            <button
                className={`${styles.burger__button} ${active && styles.burger__button_active}`}
                id="menu07"
                onClick={onClick} >
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
            </button>
        </div>
    )
}

export default Burger