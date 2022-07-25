import { pokemonApi } from './../services/pokemon.api';
import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from './pokemon.slice';

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        App: pokemonSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;