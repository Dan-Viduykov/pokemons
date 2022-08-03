import { FC, ReactNode } from "react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
    children: ReactNode[];
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
    return (
        <>
            <input
                className={styles.input}
                type="checkbox"
                id="navcheck"
                role="button"
                title="menu" />
            <label
                className={styles.label}
                htmlFor="navcheck"
                aria-hidden="true"
                title="menu">
                <span className={styles.burger}>
                    <span className={styles.bar}>
                        <span className={styles.visuallyhidden}>Menu</span>
                    </span>
                </span>
            </label>
            <nav className={styles.nav} id="menu">
                { children.map(child => child) }
            </nav>
        </>
    )
}

export default Sidebar