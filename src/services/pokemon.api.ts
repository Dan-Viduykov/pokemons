import { IPokemon } from './../models/pokemon';
import { ILinkPokemon, PokemonsResponse } from './../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemon/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    tagTypes: ['PokemonLink', 'Pokemon'],
    endpoints: build => ({
        getPokemons: build.query<PokemonsResponse<ILinkPokemon>, number>({
            query: (limit: number = 20, offset: number = 0) => ({
                url: 'pokemon/',
                params: {
                    q: 'pokemon/',
                    limit: limit,
                    offset: offset
                }
            }),
        }),
        getPokemon: build.query<IPokemon, string>({
            query: (name: string) => `pokemon/${name}`
        }),
    })
})

export const { useGetPokemonQuery, useGetPokemonsQuery } = pokemonApi