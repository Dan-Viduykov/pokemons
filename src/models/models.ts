export interface ILinkPokemon {
    name: string;
    url: string;
}

export interface PokemonsResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}