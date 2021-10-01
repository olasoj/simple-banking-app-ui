import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as transactionService from '../transactionService'

import UserTable from './UsersTable';
import Pagination from '../../../pagination/Pagination';
import { TransactionHistoryResponse, TransactionResponse, TransactionResponseErr } from '../model/TransactionReqResModel';

class TransactionHistory extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        transactionHistory: []
      },
      errors: {},
    };
  }

  schema = {}

  async componentDidMount() {
    try {
      toast.info("Creating account")
      // const { data } = this.state
      const { data }: TransactionHistoryResponse = await transactionService.getAccountStatement();
      console.log(data)
      this.setState({ data: { transactionHistory: [...data] } })
      console.log(this.state)
      // toast.success(message);
    } catch (err: any) {
      const { status, data }: TransactionResponseErr = err.response
      if (status && status === 400) return toast.error(data.message)
      toast.error("Server: service unavailable, please try later")
    }
  }


  handlePageChange = async (pageNumber: number) => {
    // const { data } = this.state
    // data.page = pageNumber;
    // await this.getUserDetailsData()
  };

  render() {
    const { data: { transactionHistory } } = this.state;

    return (
      <div className='row'>
        <div className='col'>
          {/* //     {this.getTableMetaData(totalNumberOfUser)} */}

          <UserTable users={transactionHistory} />
          {/* //     <Pagination totalNumberOfRecord={totalNumberOfUser} pageSize={pageSize} currentPage={page} onPageChange={this.handlePageChange} /> */}
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

export default TransactionHistory;
