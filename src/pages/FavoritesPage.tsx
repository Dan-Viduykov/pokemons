import { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Favorites from "../components/screens/Favorites";

const FavoritesPage: FC = () => {
    return (
        <Layout>
            <Container>
                <Favorites />    
            </Container>
        </Layout>
    )
}

export default FavoritesPage