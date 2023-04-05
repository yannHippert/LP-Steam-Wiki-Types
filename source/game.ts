import { Category } from './types/category';
import { Platform } from './types/platform';
import { Genre } from './types/genre';
import { OwnerCount } from './types/owner_count';
import { SteamspyTag } from './types/steamspy_tag';

export interface Game {
    appid: string;
    name: string;
    release_date: Date;
    english: boolean;
    developer: string;
    publisher: string;
    platforms: Array<Platform>;
    categories: Array<Category>;
    genres: Array<Genre>;
    required_age: number;
    steamspy_tags: Array<SteamspyTag>;
    achievements: number;
    positive_ratings: number;
    negative_ratings: number;
    average_playtime: number;
    median_playtime: number;
    owners: OwnerCount;
    price: number;
}
