import { IPokemon } from './../models/pokemon';
import { ILinkPokemon, PokemonsResponse } from './../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PokemonOptions } from '../models/pokemonOptions';

export const pokemonApi = createApi({
    reducerPath: 'pokemon/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    tagTypes: ['PokemonLink', 'Pokemon'],
    endpoints: build => ({
        getPokemonsName: build.query<string[], number>({
            query: (limit: number = 20, offset: number = 0) => ({
                url: 'pokemon/',
                params: {
                    q: 'pokemon/',
                    limit: limit,
                    offset: offset
                }
            }),
            transformResponse: (response: PokemonsResponse<ILinkPokemon>) => response.results.map(result => result.name),
        }),
        getPokemon: build.query<IPokemon, string>({
            query: (name: string) => `pokemon/${name}`
        }),
        getPokemonDescription: build.query<PokemonOptions, string>({
            query: (name: string) => `https://pokeapi.co/api/v2/pokemon-species/${name}/`
        })
    })
})

export const { useGetPokemonQuery, useGetPokemonsNameQuery, useGetPokemonDescriptionQuery } = pokemonApi