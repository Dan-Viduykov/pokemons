import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    names: string[]
}

const initialState: AppState = {
    names: []
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getPokemonsName: (state, action: PayloadAction<string[]>) => {
            state.names = action.payload;
        }
    }
})

export default AppSlice.reducer;