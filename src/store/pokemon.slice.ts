import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    currentPokemon: string;
    favorites: IFav[];
}

export interface IFav {
    name: string;
    id: number;
}

const FAV_KEY = 'FAV_KEY'

const initialState: AppState = {
    currentPokemon: '',
    favorites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]')
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeCurrentPokemon: (state, action: PayloadAction<string>) => {
            state.currentPokemon = action.payload;
        },
        addFavorite: (state, action: PayloadAction<IFav>) => {
            state.favorites.push(action.payload);
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites))
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(fav => fav.name !== action.payload)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites))
        },
    }
})

export default AppSlice.reducer;