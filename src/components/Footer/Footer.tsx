import { FC } from "react";
import Container from "../Container";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footer__container}>
                Footer
            </Container>
        </footer>
    )
}   

export default Footer