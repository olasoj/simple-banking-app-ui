import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import * as yup from 'yup';
import { each, groupBy, keys } from 'lodash-es';


interface IStateSchema {
  data: any;
  errors: any;
};

class Form extends Component<any, any>{
  schema: any;

  constructor(props: any) {
    super(props);
    this.state = this.state;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors } || { error: {} });

    if (errors) return;
    this.doSubmit();
  };

  validateForm = () => {
    try {
      const { data }: IStateSchema = this.state;
      const options = { abortEarly: false };
      const schemaTransform = yup.object().shape(this.schema);
      schemaTransform.validateSync(schemaTransform.cast(data), options);

      return '';
    } catch (err) {
      return this.getFormErrors(err);
    }
  };

  getFormErrors(err: any) {
    const errors: any = {};
    const fieldErrors = groupBy(err.inner, 'path');
    const fields = keys(fieldErrors);

    each(fields, (field) => {
      each(fieldErrors[field], (fieldError) => {
        Object.assign((errors[field] = fieldError.errors[0]));
      });
    });

    return errors;
  }

  handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { data, errors: stateErr } = this.state;
    const errors = { ...stateErr };
    const errorMessage = this.validateField(target);

    if (errorMessage) errors[target.name] = errorMessage;
    else delete errors[target.name];
    this.setState({ data: { ...data, [target.name]: target.value }, errors: { ...errors } });
  };

  validateField = ({ name, value }: EventTarget & HTMLInputElement) => {
    try {
      const obj = { [name]: value };
      const fieldSchema = { [name]: this.schema[name] };
      const schemaTransform = yup.object().shape(fieldSchema);
      schemaTransform.validateSync(obj);
      return null;
    } catch (err: any) {
      return err.errors[0]
    }
  };

  handleSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { data } = this.state;
    const value = ((target.value).trim() === "Select") ? null : target.value;
    if (target.value) return this.setState({ data: { ...data, [target.id]: value } });
  };

  renderInput = (label: string, name: string, type = 'text') => {
    const { data, errors } = this.state;

    return (
      <Input
        label={label} type={type}
        name={name} value={data[name]}
        onChange={this.handleChange} placeholder={label}
        error={errors[name]}
      />
    );
  };

  renderSelect = (dataListName: string, name: string, label: string) => {
    const { data: { [dataListName]: lists }, errors }: IStateSchema = this.state;
    return (<Select name={name} options={lists} onChange={this.handleSelect} label={label} error={errors[name]}
    />);
  };

  renderButton = (label: string) => {
    return (
      <button type='submit' className='btn btn-primary'>
        {label}
      </button>
    );
  };

  doSubmit() {
    throw new Error('Method not implemented.');
  }

  state: IStateSchema = { data: {}, errors: {} }


}


export default Form;
