import React, { FC, ReactNode } from "react";
import Table from '../../../generic/component/table/Table';


interface Props {
  users: Array<ColumnBody>;
  onDelete: (id: string) => void;
}

const UsersTable: FC<Props> = ({ users, onDelete }) => {

  const columns: Array<ColumnHeader> = [
    { id: 1, label: 'Username', path: '_username' },
    { id: 2, label: 'Full Name', path: '_fullName' },
    { id: 3, label: 'Email', path: '_email' },
    { id: 4, label: 'Years of Experience', path: '_yearsOfExperience' },
    { id: 5, label: 'interest', path: '_interest' },
    { id: 6, label: 'Work Category', path: '_workCategory' },
    { id: 7, content: renderDeleteButton(onDelete) }
  ];

  return (<Table data={users} columns={columns} />);
};

function renderDeleteButton(onDelete: any) {
  return (user: any) => (
    <button className='btn btn-danger btn-sm' onClick={e => onDelete(user._id)}>
      Delete
    </button>
  );
}

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