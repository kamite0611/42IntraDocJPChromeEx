import { Stack, TextField, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';

import { CheckboxField } from './CheckboxField';
import { NameField } from './NameField';
import { PhoneField } from './PhoneField';
import { TigetFormData } from '../../type';

interface BaseFormFieldProps {
  label: string;
  keyname: keyof TigetFormData;
  value: ValueOf<TigetFormData>;
  required?: boolean;
  inputProps?: any;
  onChange: (keyname: keyof TigetFormData, newValue: ValueOf<TigetFormData>) => void;
}

/** テキストフィールド */
interface StringFieldProps extends BaseFormFieldProps {
  type: 'string';
  value: string;
  inputProps?: TextFieldProps;
}
/** 電話番号フィールド */
interface PhoneFieldProps extends BaseFormFieldProps {
  type: 'phone';
  value: [string, string, string];
}
/** 名前フィールド */
interface NameFieldProps extends BaseFormFieldProps {
  type: 'name';
  value: [string, string];
}
/** チェックフィールド */
interface CheckFieldProps extends BaseFormFieldProps {
  type: 'checkbox';
  value: boolean;
  desc?: ReactNode;
}

type ITigetFormFieldProps = StringFieldProps | PhoneFieldProps | NameFieldProps | CheckFieldProps;

export function TigetFormField(props: ITigetFormFieldProps) {
  const { type, label, required, inputProps, value, keyname } = props;

  const handleChange = async (newValue: ValueOf<TigetFormData>) => {
    console.log('newValue', newValue);

    props.onChange(keyname, newValue);
  };

  const Field = (): ReactNode => {
    switch (type) {
      case 'string': {
        return (
          <TextField
            value={value}
            name={keyname}
            onChange={(e) => handleChange(e.target.value || '')}
            {...inputProps}
          />
        );
      }

      case 'phone':
        return <PhoneField value={value} onChange={handleChange} />;

      case 'name':
        return <NameField value={value} onChange={handleChange} />;

      case 'checkbox':
        return (
          <CheckboxField name={keyname} value={value} onChange={handleChange} desc={props.desc} />
        );
    }
  };

  return (
    <Stack>
      <Stack direction="row" mb="3px">
        <Stack sx={{ fontSize: '14px', fontWeight: 'bold' }}>{label}</Stack>
        {required && <Stack sx={{ color: 'red', fontWeight: 'bold', marginLeft: '3px' }}>*</Stack>}
      </Stack>

      {Field()}
    </Stack>
  );
}
