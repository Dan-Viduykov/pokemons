export interface IPokemon {
    name: string;
    url: string;
}

export interface ResponseServer<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}