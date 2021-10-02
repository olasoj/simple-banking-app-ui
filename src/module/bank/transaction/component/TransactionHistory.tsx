import { Component } from 'react';
import { toast } from 'react-toastify';

import * as transactionService from '../transactionService'

import UserTable from './TransactionTable';
import { TransactionHistoryResponse, TransactionResponseErr } from '../model/TransactionReqResModel';

class TransactionHistory extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: { transactionHistory: [] },
      errors: {},
    };
  }

  schema = {}

  async componentDidMount() {
    try {
      const { data }: TransactionHistoryResponse = await transactionService.getAccountStatement();
      this.setState({ data: { transactionHistory: [...data] } })
    } catch (err: any) {
      const { status, data }: TransactionResponseErr = err.response
      if (status && status === 400) return toast.error(data.message)
      toast.error("An unhandled server error occurred")
    }
  }


  render() {
    const { data: { transactionHistory } } = this.state;

    return (
      <div className='row'>
        <div className='col'>

          <UserTable transactions={transactionHistory} />
        </div>
      </div>
    );
  }
}

export default TransactionHistory;
