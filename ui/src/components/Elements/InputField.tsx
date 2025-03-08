import React, { forwardRef } from 'react';
import {
  TextField,
  TextFieldProps,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
  OutlinedInputProps
} from '@mui/material';
import { IMaskInput } from 'react-imask';
import _ from 'lodash';

type UIInputField = {
  maskProps?: any;
  customInputProps?: any;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps;

export const InputField = forwardRef<HTMLInputElement, UIInputField>(({ maskProps, ...rest }, ref) => {
  return maskProps ? (
    <MaskedInput ref={ref} {...rest} maskProps={maskProps} />
  ) : (
    <SimpleInput ref={ref} {...rest} />
  );
});

export const SimpleInput = forwardRef<HTMLInputElement, UIInputField>(
  ({ onChange, multiline, customInputProps, value, ...rest }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = rest.type === 'number' ? _.toNumber(event.target.value) : event.target.value;
      onChange?.(event); // Pass the full event to maintain React's standard behavior
    };

    return (
      <TextField
        fullWidth
        onChange={handleChange}
        multiline={multiline ?? undefined}
        value={value ?? ''}
        inputRef={ref}
        {...rest}
      />
    );
  }
);

interface CustomProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  maskProps: any;
}

const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(({ onChange, maskProps, ...other }, ref) => {
  const handleChange = (value: string) => {
    const placeholder = maskProps.placeholderChar || '_';
    const trimmedValue = value.replaceAll(placeholder, '');
    onChange({
      target: { name: other.name, value: trimmedValue }
    } as unknown as React.ChangeEvent<HTMLInputElement>); // Type assertion to match event structure
  };

  return (
    <IMaskInput
      lazy={false}
      {...other}
      {...maskProps}
      onAccept={handleChange}
      overwrite
      inputRef={ref as React.Ref<HTMLInputElement>}
    />
  );
});

const MaskedInput = forwardRef<HTMLInputElement, UIInputField>(
  ({ onChange, value, label, error, helperText, maskProps, type, customInputProps, ...rest }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = type === 'number' ? parseFloat(event.target.value) : event.target.value;
      onChange?.(event);
    };

    return (
      <FormControl variant="outlined" color={error ? 'error' : 'primary'} fullWidth>
        <InputLabel
          htmlFor="formatted-text-mask-input"
          shrink={Boolean(value) || !Boolean(maskProps.lazy)}
        >
          {error ? <span style={{ color: '#d32f2f' }}>{label}</span> : label}
        </InputLabel>
        <OutlinedInput
          label={label}
          value={value ?? ''}
          type={type}
          error={error}
          fullWidth
          {...(rest as OutlinedInputProps)}
          onChange={handleChange}
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
          inputProps={{
            maskProps
          }}
          inputRef={ref}
          {...customInputProps}
        />
        {helperText && (
          <FormHelperText>
            {error ? <span style={{ color: '#d32f2f' }}>{helperText}</span> : helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

export default InputField;