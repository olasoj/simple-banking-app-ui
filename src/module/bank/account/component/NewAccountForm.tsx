import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

import * as yup from 'yup';
import Form from '../../../generic/component/form/Form';
import * as AccountService from '../accountService';
import { NewAccountRequest, NewAccountResponse, NewAccountResponseErr } from '../model/NewAccountReqResModel';

class NewAccountForm extends Form {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...NewAccountRequest },
      errors: {},
    };
  }

  schema = {
    accountPassword: yup.string()
      .required("Password is required")
      .label('Password'),

    accountName: yup
      .string()
      .required("Full name is required")
      .label('Account Name'),

    initialDeposit: yup.number()
      .required("Please enter a valid positive number.")
      .positive("Please enter a valid positive number.")
      .integer("Please enter a valid positive number.")
      .label('Initial Deposit')
  }

  doSubmit = async () => {
    try {
      toast.info("Creating account")
      const { data } = this.state
      const { data: { message } }: NewAccountResponse = await AccountService.createAccount(data);
      toast.success(message);
      // this.props.history.replace("/users")
    } catch (err: any) {
      const { status, data }: NewAccountResponseErr = err.response
      if (status && status === 400) return toast.error(data.message)
      toast.error("Server: service unavailable, please try later")
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('Account Name *', 'accountName')}
          {this.renderInput('Account Password *', 'accountPassword', 'password')}
          {this.renderInput('Initial Deposit *', 'initialDeposit', 'number')}

          {this.renderButton('Create Account')}
        </form>
      </Fragment>
    );
  }
}

export default NewAccountForm;
