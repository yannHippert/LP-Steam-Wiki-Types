import { CompletionResponseBody } from './completion';
import { DetailedGame } from '../detailedGame';
import { Game } from '../game';

export interface CompleteGameResponseBody extends CompletionResponseBody {}

export interface GetGameReponseBody {
    game: DetailedGame;
}

export interface FilterGamesResponseBody {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    results: Array<Game>;
    filters: Array<object>;
}
