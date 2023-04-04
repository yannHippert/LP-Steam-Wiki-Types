import { DetailedGame } from 'source/detailedGame';
import { CompletionResponseBody } from './completion';
import { Game } from 'source/game';

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
