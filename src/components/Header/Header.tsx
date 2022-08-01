import { FC } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Text from "../Text";
import Title from "../Title/Title";
import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <Link className={styles.header__home} to={"/"}>
                    <Title Tag="h1" className={styles.header__title}>Pokedex</Title>
                </Link>
                <nav className={styles.header__nav}>
                    <Link className={styles.header__link} to={"/"}><Text size={20}>Home</Text></Link>
                    <Link className={styles.header__link} to={"/favorites"}><Text size={20}>Favorites</Text></Link>
                </nav>
            </Container>
        </header>
    )
}

export default Header