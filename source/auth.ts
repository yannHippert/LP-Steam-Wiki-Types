export interface Login {
    email: string;
    password: string;
}

export interface Register extends Login {
    confirmPassword: string;
}

export interface JWTToken {
    refreshToken: string;
}

export interface JWTTokenData {
    userId: string;
}
