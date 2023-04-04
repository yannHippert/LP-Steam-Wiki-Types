export interface Login {
    email: string;
    password: string;
}

export interface IRegister extends Login {
    confirmPassword: string;
}
