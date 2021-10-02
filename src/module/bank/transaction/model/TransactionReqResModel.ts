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
    accountNumber: "", accountPassword: "", withdrawAmount: 0
};

export interface WithdrawRequestBody {
    accountNumber: string, accountPassword: string, withdrawAmount: number
};

export interface TransactionResponse {
    data: {
        success: boolean,
        message: string,
        responseCode: number
    }
}

export interface TransactionHistoryResponse {
    data: Array<TransactionHistory>;
}

export interface TransactionHistory {
    data: {
        transactionDate: string;
        transactionType: string;
        amount: number
        narration: string;
        accountBalance: number;
    }
}


export const TransactionHistoryData = {
    data: [{
        transactionDate: "",
        transactionType: "",
        amount: 0,
        narration: 0,
        accountBalance: 0
    }]
}

export interface TransactionResponseErr {
    status: number;
    data: TransactionResponseErrData

}

export interface TransactionResponseErrData {
    success: boolean;
    message: string;
    error: string;
    status: number
    timestamp: string;
    errors: {
        accountName: string;
        accountPassword: string;
        withdrawAmount: number;
        amount: number;
    }
}