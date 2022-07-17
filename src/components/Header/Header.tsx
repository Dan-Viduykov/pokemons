import { FC } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Title from "../Title/Title";
import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <Title className={styles.header__title}>Pokemon`s</Title>
                <nav className={styles.header__nav}>
                    <Link className={styles.header__link} to={"/"}>Home</Link>
                    <Link className={styles.header__link} to={"/favorites"}>Favorites</Link>
                </nav>
            </Container>
        </header>
    )
}

export default Header