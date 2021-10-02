import { Fragment } from 'react';
import { toast } from 'react-toastify';


import * as yup from 'yup';
import Form from '../../../generic/component/form/Form';
import * as AccountService from '../accountService';
import auth from '../../../auth/authService'
import { NewAccountRequest, AccountResponseErr, AccountResponseErrData } from '../model/AccountReqResModel';

class NewAccountForm extends Form {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...NewAccountRequest },
      errors: {},
    };
  }

  schema = {
    accountName: yup.string()
      .required("Account Name is required")
      .label('Account Name'),

    accountPassword: yup.string()
      .required("Password is required")
      .label('Password'),

    initialDeposit: yup.number()
      .required("Please Enter a valid amount.")
      .positive("Please Enter a valid amount.")
      .integer("Please Enter a valid amount.")
      .label('Initial Deposit')
  }

  doSubmit = async () => {
    try {
      const response = await AccountService.createAccount(this.state.data);
      auth.loginWithJwt(response.headers['authorization']);
      toast.success("Account successfully created");
      window.location.href = ("/account/info")
    } catch (err: any) {
      const { status, data }: AccountResponseErr = err.response
      this.handleValidationErr(status, data);
      if (status && status === 400) return toast.error(data.message)
      toast.error("An unhandled server error occurred")
    }
  };

  private handleValidationErr(status: number, data: AccountResponseErrData) {
    if (status && status === 400 && data.errors) this.setState({ errors: { ...data.errors } });
  }

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
