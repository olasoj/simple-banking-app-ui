import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as accountService from '../accountService'
import { AccountInfo, AccountInfoResponseBody, AccountResponseErr } from '../model/AccountReqResModel';

class UserAccountInfo extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { ...AccountInfo },
      errors: {},
    };
  }

  async componentDidMount() {
    try {
      toast.info("Creating account")
      // const { data } = this.state
      const { data }: AccountInfoResponseBody = await accountService.getAccountInfo();
      console.log(data)
      this.setState({ data: { ...data.account } })
      console.log(this.state)
      // toast.success(message);
    } catch (err: any) {
      const { status, data }: AccountResponseErr = err.response
      if (status && status === 400) return toast.error(data.message)
      toast.error("Server: service unavailable, please try later")
    }
  }

  render() {
    // const { data: { users, pageSize, page, totalNumberOfUser } } = this.state;

    return (
      <div className='row'>
        <div className='col'>
          <p></p>
        </div>
      </div>
    );
  }

  getTableMetaData(totalNumberOfUsers: number) {
    return <div className='row'>
      <div className='col'>
        <p>{totalNumberOfUsers} users(s) found</p>
      </div>
      <div className='col'>
        <Link className='btn-primary btn m-2' to='/users/add'>
          Add User
        </Link>
      </div>
    </div>;
  }

}

export default UserAccountInfo;
