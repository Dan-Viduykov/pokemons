import { FC, useState } from "react";
import styles from "./Burger.module.scss";

const Burger: FC = () => {
    const [ isActive, setIsActive ] = useState(false)

    const handleClick = () => setIsActive(!isActive)
    
    return (
        <div className={styles.burger}>
            <button
                className={`${styles.burger__button} ${isActive && styles.burger__button_active}`}
                id="menu07"
                onClick={handleClick} >
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
            </button>
        </div>
    )
}

export default Burger