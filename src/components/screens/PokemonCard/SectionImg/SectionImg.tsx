import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { IPokemon } from "../../../../models/pokemon";
import { AppSlice } from "../../../../store/pokemon.slice";
import Title from "../../../Title";
import styles from "./SectionImg.module.scss";

interface SectionImgProps {
    className?: string;
    pokemon: IPokemon;
}

const SectionImg: FC<SectionImgProps> = ({ className, pokemon }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { addFavorite } = AppSlice.actions

    const img = pokemon?.sprites.other["official-artwork"].front_default;
    const namePokemon = pokemon?.name;
    const id = pokemon?.id;

    return (
        <section className={`${styles.section} ${className}`}>
            <button
                className={styles.section__back}
                onClick={() => navigate(-1)}>
                ←
            </button>
            <Title
                Tag="h2"
                className={styles.section__title}>
                {namePokemon}
            </Title>
            <button
                className={styles.section__fav}
                style={{ color: `gold` }}
                onClick={() => dispatch(addFavorite({name: namePokemon, id}))}>
                ★
            </button>
            <img
                className={styles.section__img}
                src={img}
                alt={namePokemon} />
        </section>
    )
}

export default SectionImg