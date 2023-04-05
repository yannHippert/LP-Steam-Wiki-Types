export interface User {
    id: string;
    email: string;
    password_hash: string;
    games: Array<string>;
}
