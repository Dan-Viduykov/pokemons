import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    currentPokemon: string;
    favorites: string[];
}

const initialState: AppState = {
    currentPokemon: '',
    favorites: []
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeCurrentPokemon: (state, action: PayloadAction<string>) => {
            state.currentPokemon = action.payload;
        },
        addFavorite: (state, action: PayloadAction<string>) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            const fav = state.favorites
            const idx = fav.findIndex(fav => fav === action.payload);

            state.favorites = [...fav.slice(idx), ...fav.slice(idx+1, fav.length)]
        }
    }
})

export default AppSlice.reducer;