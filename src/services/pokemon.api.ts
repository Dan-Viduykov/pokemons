import { IPokemon, ResponseServer } from './../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemon/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: build => ({
        getPokemons: build.query<ResponseServer<IPokemon>, number>({
            query: (offset: number) => ({
                url: 'pokemon/',
                params: {
                    q: 'pokemon/',
                    limit: 5,
                    offset: offset
                }
            })
        }),
        getPokemon: build.query<IPokemon, string>({
            query: (name: string) => `pokemon/${name}`
        }),
    })
})

export const { useGetPokemonQuery, useGetPokemonsQuery } = pokemonApi