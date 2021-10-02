import React, { Fragment } from 'react';

import * as yup from 'yup';

import auth from '../authService';
import Form from '../../generic/component/form/Form';
import { Redirect } from 'react-router-dom';
import { LoginData, NewAccountResponseErr } from '../module/AuthReqResModel';

class LoginForm extends Form {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...LoginData },
      errors: { ...LoginData }
    };
  }

  schema = {
    accountPassword: yup.string()
      .required("Password is required")
      .label('Password'),
    accountNumber: yup
      .string()
      .required("Full name is required")
      .label('Account Number'),
  }


  doSubmit = async () => {
    const { data } = this.state;
    try {
      await auth.login(data);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (err: any) {
      if (err.response) {
        const { status, data }: NewAccountResponseErr = err.response
        const errors = { ...this.state.errors };
        errors.accountNumber = status;
        this.setState({ errors });
      }
    }
  };

  render() {
    // if (auth.getCurrentUser()) return <Redirect to='/' />;
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
