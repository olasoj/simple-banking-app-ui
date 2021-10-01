import React, { FC, ReactNode } from "react";
import Table from '../../../generic/component/table/Table';


interface Props {
  users: Array<ColumnBody>;
}

const UsersTable: FC<Props> = ({ users }) => {

  const columns: Array<ColumnHeader> = [
    { id: 1, label: 'Transaction Date', path: 'transactionDate' },
    { id: 2, label: 'Transaction Type', path: 'transactionType' },
    { id: 3, label: 'Amount', path: 'amount' },
    { id: 4, label: 'Narration', path: 'narration' },
    { id: 5, label: 'Account Balance', path: 'accountBalance' }
  ];

  return (<Table data={users} columns={columns} />);
};

interface ColumnHeader {
  id: number;
  label?: string;
  path?: string;
  content?: (param: any) => {};
};

interface ColumnBody {
  id: number;
};


export default UsersTable;