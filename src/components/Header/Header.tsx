import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Sidebar from "../Sidebar";
import Text from "../Text";
import Title from "../Title/Title";
import Burger from "./Burger";
import styles from "./Header.module.scss";

const Header: FC = () => {
    const [ isActive, setIsActive ] = useState(false)
    const handleClick = () => setIsActive(!isActive);

    const burger = window.innerWidth < 720 ? <Burger active={isActive} onClick={handleClick} /> : null;
    const bc = <div className={`${styles.header__bc} ${isActive && styles.header__bc_active}`} />;

    return (
        <header className={styles.header}>
            { bc }
            <Container className={styles.header__container}>
                <Link className={styles.header__home} to={"/"}>
                    <Title Tag="h1" className={styles.header__title}>Pokedex</Title>
                </Link>
                {/* { burger } */}
                {/* <nav className={`${styles.header__nav} ${isActive && styles.header__nav_active}`}>
                    <Link className={styles.header__link} to={"/"}><Text size={20}>Home</Text></Link>
                    <Link className={styles.header__link} to={"/favorites"}><Text size={20}>Favorites</Text></Link>
                </nav> */}
                {/* <Sidebar active={isActive}>
                    <Link className={styles.header__link} to={"/"}><Text size={20}>Home</Text></Link>
                    <Link className={styles.header__link} to={"/favorites"}><Text size={20}>Favorites</Text></Link>
                </Sidebar> */}
                <Sidebar>
                    <Link className={styles.header__link} to={"/"}><Text size={20}>Home</Text></Link>
                    <Link className={styles.header__link} to={"/favorites"}><Text size={20}>Favorites</Text></Link>
                </Sidebar>
            </Container>
        </header>
    )
}

export default Header