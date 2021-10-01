import React, { FC } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table: FC<Props> = ({ columns, data }) => {
  return (
    <table className='table'>
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

interface Props {
  columns: Array<ColumnHeader>;
  data: Array<ColumnBody>;
}

interface ColumnBody {
  id: any;
};


interface ColumnHeader {
  id: number;
  label?: string;
  path?: string;
  content?: (param: any) => {};
};



export default Table;
