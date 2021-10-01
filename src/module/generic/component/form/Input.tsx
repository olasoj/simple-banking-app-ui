import React, { FC } from 'react';

const Input: FC<Props> = ({ label, name, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>{label}</label>

      <input
        {...rest}
        name={name}
        className='form-control'
        id={name}
        placeholder={name}
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

interface Props {
  label: string;
  name: string;
  error: any;
  type: string;
  placeholder: string;
  value: any;
  onChange: (p: React.ChangeEvent<HTMLInputElement>) => void;
}


export default Input;
