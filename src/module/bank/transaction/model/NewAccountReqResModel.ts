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


export const DepositRequestDefaultData = {
    accountNumber: "", amount: 0
};

export interface DepositRequestBody {
    accountNumber: string, amount: number
};

export const WithdrawRequestDefaultData = {
    accountNumber: "", accountPassword: "", withdrawnAmount: 0
};

export interface WithdrawRequestBody {
    accountNumber: string, accountPassword: string, withdrawnAmount: number
};

export interface TransactionResponse {
    data: {
        success: boolean,
        message: string,
        responseCode: number
    }
}

export interface TransactionResponseErr {
    status: number;
    data: {
        success: boolean,
        message: string,
        responseCode: number
    };

}