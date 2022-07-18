import styles from "./Layout.module.scss";
import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.layout__main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout