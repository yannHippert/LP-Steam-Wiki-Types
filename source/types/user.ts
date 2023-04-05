import { DBRefreshToken } from './token';

export interface User {
    email: string;
    games: Array<string>;
}

export interface PrivateUser {
    id: string;
    email: string;
    password_hash: string;
    games: Array<string>;
    refresh_tokens: Array<DBRefreshToken>;
}
