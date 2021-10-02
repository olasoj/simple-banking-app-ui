import { Component } from 'react';
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
      const { data }: AccountInfoResponseBody = await accountService.getAccountInfo();
      this.setState({ data: { ...data.account } })
      // toast.success(message);
    } catch (err: any) {
      const { status, data }: AccountResponseErr = err.response
      if (status && status === 401) return toast.error(data.message)
      toast.error("An unhandled server error occurred")
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className='row'>
        <div className='col'>
          <p>account name: {data.accountName}</p>
          <p>account number: {data.accountNumber}</p>
          <p>account balance: {data.balance}</p>
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
