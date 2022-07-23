import { FC } from "react";
import Container from "../Container";
import Title from "../Title";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footer__container}>
                <Title>Footer</Title>
            </Container>
        </footer>
    )
}   

export default Footer