export interface CompletionResponseBody {
    searchText: string;
    maxResults: number;
    totalResults?: number;
    results: Array<string>;
}
