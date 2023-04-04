import { Movie } from './types/movie';
import { Screenshot } from './types/screenshot';

export interface Media {
    appid: string;
    header_image: string;
    screenshots: Array<Screenshot>;
    background: string;
    movies?: Array<Movie>;
}
