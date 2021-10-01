import React, { FC } from 'react';


const Select: FC<Props> = ({ options, name, label, onChange, error }) => {
  return (
    <div className='input-group mb-3 m-2'>
      <div className='input-group-append'>
        <label className='input-group-text' htmlFor='inputGroupSelect02'>
          {label}
        </label>
      </div>

      <select onChange={e => onChange(e)} defaultValue={''}
        className="form-select form-select-sm" id={name}>
        <option defaultValue="">Select</option>

        {options && options.map(option => (
          <option key={options.indexOf(option)} value={option}>
            {option}
          </option>
        ))}
      </select>


      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};


interface Props {
  label: string;
  options: Array<string>;
  onChange: (p: React.ChangeEvent<HTMLSelectElement>) => void;

  name: string;
  error?: any;
}

export default Select;
