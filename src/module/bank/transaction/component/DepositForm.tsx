import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

import * as yup from 'yup';
import Form from '../../../generic/component/form/Form';
import { DepositRequestDefaultData, TransactionResponse, TransactionResponseErr, TransactionResponseErrData } from '../model/TransactionReqResModel';
import * as transactionService from '../transactionService';

class DepositForm extends Form {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...DepositRequestDefaultData },
      errors: {},
    };
  }

  schema = {
    accountNumber: yup
      .string()
      .required("Account number is required")
      .label('Account Number'),

    amount: yup.number()
      .required("Please enter a valid positive number.")
      .positive("Please enter a valid positive number.")
      .integer("Please enter a valid positive number.")
      .label('amount')
  }

  doSubmit = async () => {
    try {
      const { data } = this.state
      const { data: { message } }: TransactionResponse = await transactionService.deposit(data);
      toast.success(message);
    } catch (err: any) {
      const { status, data }: TransactionResponseErr = err.response
      this.handleValidationErr(status, data);
      if (status && status === 400) return toast.error(data.message)
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
          {this.renderInput('Amount *', 'amount', 'number')}

          {this.renderButton('Deposit')}
        </form>
      </Fragment>
    );
  }
}

export default DepositForm;
