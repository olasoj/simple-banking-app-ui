export interface LoginSchema {
    data: {
        success: boolean,
        message: undefined,
        account: {
            accountName: string,
            accountPassword: number,
            balance: number
        },
        responseCode: number
    }
};


export const LoginData = {
    accountPassword: "", accountNumber: ""
};



export interface LoginResponseErr {
    status: number;
    data: LoginResponseErrData

}

export interface LoginResponseErrData {
    success: boolean;
    message: string;
    error: string;
    status: number
    timestamp: string;
    errors: {
        accountNumber: string;
        accountPassword: string;
    }
}