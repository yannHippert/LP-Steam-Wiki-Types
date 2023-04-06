import { JWTTokenData } from 'source/types/token';

export interface LoginResponseBody {
    code: number;
    message: any;
    data: JWTTokenData;
}
