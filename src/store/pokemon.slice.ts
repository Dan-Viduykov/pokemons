import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    currentPokemon: string;
    favorites: IFav[];
}

export interface IFav {
    name: string;
    id: number;
}

const initialState: AppState = {
    currentPokemon: '',
    favorites: [
        {
            name: 'bulbasaur',
            id: 1
        },
    ]
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeCurrentPokemon: (state, action: PayloadAction<string>) => {
            state.currentPokemon = action.payload;
        },
        addFavorite: (state, action: PayloadAction<IFav>) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            const fav = state.favorites
            const idx = fav.findIndex(fav => fav.name === action.payload);

            state.favorites = [...fav.slice(idx), ...fav.slice(idx+1, fav.length)]
        }
    }
})

export default AppSlice.reducer;