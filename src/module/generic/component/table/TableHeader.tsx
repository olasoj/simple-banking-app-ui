import React, { FC, Fragment } from 'react';

interface Props {
  columns: Array<ColumnHeader>;
}

const TableHeader: FC<Props> = ({ columns }) => {
  const renderIcon = (column: ColumnHeader) => {
    return <i className='fa fa-sort-desc' />;
  };

  return (
    <Fragment>
      <thead>
        <tr>
          {columns.map(column => (
            <th
              style={{ cursor: 'pointer' }}
              key={column.id}
            >
              {column.label}
              {renderIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    </Fragment>
  );
};


interface ColumnHeader {
  id: number;
  label?: string;
  path?: string;
  content?: (param: any) => {};
};



export default TableHeader;
