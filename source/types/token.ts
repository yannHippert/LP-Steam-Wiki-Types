export interface DBRefreshToken {
    token: string;
    user_agent: string;
    cearted_at: string;
}

export interface JWTToken {
    refreshToken: string;
}

export interface JWTTokenData {
    userId: string;
}
