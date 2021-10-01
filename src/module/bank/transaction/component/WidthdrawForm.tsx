import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

import * as yup from 'yup';
import Form from '../../../generic/component/form/Form';
import { TransactionResponse, TransactionResponseErr, WithdrawRequestDefaultData } from '../model/TransactionReqResModel';
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

    withdrawnAmount: yup.number()
      .required("Please enter a valid positive number.")
      .positive("Please enter a valid positive number.")
      .integer("Please enter a valid positive number.")
      .label('withdrawnAmount')
  }

  doSubmit = async () => {
    try {
      toast.info("Creating account")
      const { data } = this.state
      const { data: { message } }: TransactionResponse = await transactionService.withdraw(data);
      toast.success(message);
      // this.props.history.replace("/users")
    } catch (err: any) {
      const { status, data }: TransactionResponseErr = err.response
      if (status && status === 400) return toast.error(data.message)
      toast.error("Server: service unavailable, please try later")
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('Account Number *', 'accountNumber')}
          {this.renderInput('Account Password *', 'accountPassword', 'password')}
          {this.renderInput('Withdraw Amount *', 'withdrawnAmount', 'number')}

          {this.renderButton('Withdraw')}
        </form>
      </Fragment>
    );
  }
}

export default WithdrawalForm;
