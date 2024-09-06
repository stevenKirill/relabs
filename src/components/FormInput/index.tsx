/* eslint-disable react/prop-types */
import React, { FC, ReactNode } from 'react';
import {
  Input,
  InputBaseComponentProps,
  InputBaseProps,
  SxProps,
  Theme,
} from '@mui/material';
import {
  Controller, UseControllerProps, FieldError, Control, FieldValues,
} from 'react-hook-form';
import classes from './classes.module.css';

export const inputStyles = {
  border: '1px solid #CCCFDE',
  width: '380px',
  borderRadius: '6px',
};

interface IProps {
  name: string;
  type: string;
  size: InputBaseProps['size']
  className?: string;
  placeholder: string;
  renderError?: (error: FieldError) => ReactNode;
  rules?: UseControllerProps['rules'];
  control: Control<FieldValues>
  sx?: SxProps<Theme>
  inputComponent?: React.ElementType<InputBaseComponentProps>,
  disabled: boolean,
}

export const FormInput: FC<IProps> = React.memo(({
  name,
  type,
  size,
  className,
  placeholder,
  renderError,
  rules,
  control,
  sx = inputStyles,
  inputComponent,
  disabled,
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange, value },
      fieldState: { error },
    }) => (
      (
        <>
          <Input
            disabled={disabled}
            type={type}
            size={size}
            sx={sx}
            onChange={onChange}
            className={`${className} ${error ? classes.border : ''}`}
            name={name}
            placeholder={placeholder}
            value={value}
            inputComponent={inputComponent}
          />
          {(error && renderError) ? renderError(error) : (
            <div className={classes.error}>{error?.message}</div>
          )}
        </>
      )
    )}
  />
));
