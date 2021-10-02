import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

import * as yup from 'yup';
import Form from '../../../generic/component/form/Form';
import { TransactionResponse, TransactionResponseErr, TransactionResponseErrData, WithdrawRequestDefaultData } from '../model/TransactionReqResModel';
import * as transactionService from '../transactionService';

class WithdrawalForm extends Form {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...WithdrawRequestDefaultData },
      errors: {},
    };
  }

  schema = {
    accountPassword: yup.string()
      .required("Password is required")
      .label('Password'),

    accountNumber: yup
      .string()
      .required("Account number is required")
      .label('Account Number'),

    withdrawAmount: yup.number()
      .required("Please enter a valid positive number.")
      .positive("Please enter a valid positive number.")
      .integer("Please enter a valid positive number.")
      .label('withdrawAmount')
  }

  doSubmit = async () => {
    try {
      const { data } = this.state
      const { data: { message } }: TransactionResponse = await transactionService.withdraw(data);
      toast.success(message);
    } catch (err: any) {
      const { status, data }: TransactionResponseErr = err.response
      this.handleValidationErr(status, data);

      if (status && status === 400) return toast.error(data.message)
      if (status && status === 401) return toast.error(data.message)
      toast.error("An unhandled server error occurred")
    }
  };


  private handleValidationErr(status: number, data: TransactionResponseErrData) {
    if (status && status === 400 && data.errors) this.setState({ errors: { ...data.errors } });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('Account Number *', 'accountNumber')}
          {this.renderInput('Account Password *', 'accountPassword', 'password')}
          {this.renderInput('Withdraw Amount *', 'withdrawAmount', 'number')}

          {this.renderButton('Withdraw')}
        </form>
      </Fragment>
    );
  }
}

export default WithdrawalForm;
