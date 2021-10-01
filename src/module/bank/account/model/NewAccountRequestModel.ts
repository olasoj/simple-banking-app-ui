
import { Interface } from "readline";

export class AccountCreationRequest {

    private _accountName: string = "";

    private _accountPassword: string = "";

    private _yearsOfExperience: number | undefined;


    public get accountName(): string {
        return this._accountName;
    }
    public set accountName(accountName: string) {
        this._accountName = accountName;
    }

    public get accountPassword(): string {
        return this._accountPassword;
    }
    public set accountPassword(accountPassword: string) {
        this._accountPassword = accountPassword;
    }

    public get yearsOfExperience(): number | undefined {
        return this._yearsOfExperience;
    }

    public set yearsOfExperience(yearsOfExperience: number | undefined) {
        this._yearsOfExperience = yearsOfExperience;
    }


}

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