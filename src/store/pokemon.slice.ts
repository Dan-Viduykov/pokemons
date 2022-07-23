import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    currentPokemon: string;
}

const initialState: AppState = {
    currentPokemon: ''
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeCurrentPokemon: (state, action: PayloadAction<string>) => {
            state.currentPokemon = action.payload;
        }
    }
})

export default AppSlice.reducer;