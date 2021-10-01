export interface AccountInfoResponseBody {
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


export const AccountInfo = {
    accountName: "", accountNumber: "", deposit: 0
};

export const NewAccountRequest = {
    accountName: "", accountPassword: "", initialDeposit: 0
};

export interface NewAccountRequestBody {
    accountName: string, accountPassword: string, initialDeposit: number
};

export interface NewAccountResponse {
    data: {
        success: boolean,
        message: string,
        responseCode: number
    }
}

export interface NewAccountResponseErr {
    status: number;
    data: {
        success: boolean,
        message: string,
        responseCode: number
    };

}