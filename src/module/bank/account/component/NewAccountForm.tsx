import { Fragment } from 'react';
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
      .required("Account Name is required")
      .label('Account Name'),

    initialDeposit: yup.number()
      .required("Please Enter a valid amount.")
      .positive("Please Enter a valid amount.")
      .integer("Please Enter a valid amount.")
      .label('Initial Deposit')
  }

  doSubmit = async () => {
    try {
      toast.info("Creating account")
      const { data: { message } }: NewAccountResponse = await AccountService.createAccount(this.state.data);
      toast.success(message);
      this.props.history.replace("/account/info")
    } catch (err: any) {
      const { status, data }: NewAccountResponseErr = err.response
      if (status && status === 400) return toast.error(data.message)
      toast.error("An unhandled server error occurred")
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
