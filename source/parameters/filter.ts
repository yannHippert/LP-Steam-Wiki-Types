import { Category } from '../types/category';
import { Genre } from '../types/genre';
import { Platform } from '../types/platform';
import { SteamspyTag } from '../types/steamspy_tag';

export interface FilterParameters {
    name?: string;
    start_date?: string;
    end_date?: string;
    developers?: string | Array<string>;
    publishers?: string | Array<string>;
    platforms?: Platform | Array<Platform>;
    and_platforms?: boolean;
    required_age?: number;
    categories?: Category | Array<Category>;
    genres?: Genre | Array<Genre>;
    tags?: SteamspyTag | Array<SteamspyTag>;
    order_by?: string;
    order_type?: 'asc' | 'desc';
}
