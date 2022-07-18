import { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import HomeScreen from "../components/screens/HomeScreen";

const HomePage: FC = () => {
    return (
        <Layout>
            <Container>
                <HomeScreen />
            </Container>
        </Layout>
    )
}

export default HomePage