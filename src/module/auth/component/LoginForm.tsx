import { Fragment } from 'react';

import * as yup from 'yup';

import auth from '../authService';
import Form from '../../generic/component/form/Form';
import { Redirect } from 'react-router-dom';
import { LoginData, LoginResponseErr, LoginResponseErrData } from '../module/AuthReqResModel';
import { toast } from 'react-toastify';

class LoginForm extends Form {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...LoginData },
      errors: {}
    };
  }

  schema = {
    accountPassword: yup.string()
      .required("Account Password is required")
      .label('Password'),
    accountNumber: yup
      .string()
      .required("Account Number is required")
      .label('Account Number'),
  }


  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (err: any) {
      const { status, data }: LoginResponseErr = err.response
      this.handleValidationErr(status, data);
      if (status && status === 400) return toast.error(data.message)
      if (status && status === 401) return toast.error(data.message)

      toast.error("An unhandled server error occurred")
    }
  };

  private handleValidationErr(status: number, data: LoginResponseErrData) {
    if (status && status === 400 && data.errors) this.setState({ errors: { ...data.errors } });
  }

  render() {
    if (auth.getCurrentUser()) return <Redirect to='/' />;
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('Account Number', 'accountNumber')}
          {this.renderInput('Account Password', 'accountPassword', 'password')}
          {this.renderButton('Login')}
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
