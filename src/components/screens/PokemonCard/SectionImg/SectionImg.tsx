import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
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
    const { addFavorite, removeFavorite } = AppSlice.actions;
    const { favorites } = useAppSelector(state => state.App)

    const img = pokemon?.sprites.other["official-artwork"].front_default;
    const namePokemon = pokemon?.name;
    const id = pokemon?.id;

    const [ isFav, setIsFav ] = useState(favorites.find(fav => fav.id === id) ? true : false)

    const handleClickFav = () => {
        if (isFav) {
            dispatch(removeFavorite(namePokemon))
        } else {
            dispatch(addFavorite({name: namePokemon, id}))
        }

        setIsFav(!isFav)
    }

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
                style={{ color: `${isFav ? 'gold' : '#000'}` }}
                onClick={() => handleClickFav()}>
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