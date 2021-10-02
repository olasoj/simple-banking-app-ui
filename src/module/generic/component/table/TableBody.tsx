import React, { FC, Fragment } from 'react';
import { get } from 'lodash';

const TableBody: FC<Props> = ({ data, columns }) => {
  const renderCell = (item: ColumnBody, column: ColumnHeader) => {
    if (column.content) return column.content(item);
    return (column.path) ? get(item, column.path) : null;
  };

  return (
    <Fragment>
      <tbody>
        {data.map(item => (
          <tr key={item.id || data.indexOf(item)}>
            {columns.map(column => (
              <Fragment key={column.id}>
                <td> {renderCell(item, column)}</td>
              </Fragment>
            ))}
            <td> </td>
            <td />
          </tr>
        ))}
      </tbody>
    </Fragment>
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

export default TableBody;
