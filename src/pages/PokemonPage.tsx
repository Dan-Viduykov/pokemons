import { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import PokemonCard from "../components/screens/PokemonCard";

const PokemonPage: FC = () => {
    return (
        <Layout>
            <Container>
                <PokemonCard />
            </Container>
        </Layout>
    )
}

export default PokemonPage