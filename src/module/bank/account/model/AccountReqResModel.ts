export interface AccountInfoResponseBody {
    data: {
        success: boolean,
        message: undefined,
        account: {
            accountName: string,
            accountNumber: string,
            balance: number
        },
        status: number
    }
};


export const AccountInfo = {
    accountName: null, accountNumber: null, deposit: null
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
        status: number
    }
}

export interface AccountResponseErr {
    status: number;
    data: AccountResponseErrData

}

export interface AccountResponseErrData {
    success: boolean;
    message: string;
    error: string;
    status: number
    timestamp: string;
    errors: {
        accountName: string;
        accountPassword: string;
        initialDeposit: number;
    }
}
