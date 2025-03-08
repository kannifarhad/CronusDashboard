import React, { useEffect, useState, useCallback, useMemo } from "react";
import { FormControl, FormHelperText, InputLabel, Select, MenuItem, ListSubheader, SelectProps, SelectChangeEvent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import _ from "lodash";
import { Trans } from "react-i18next";

const useStyles = makeStyles({
  root: { width: "100%" },
  outlined: { transform: "translate(14px, 16px) scale(1)" },
  shrink: { transform: "translate(14px, -6px) scale(0.75)" },
});

interface SelectItem {
  type?: "group";
  title?: string;
  [key: string]: any;
}

type UISimpleSelect = Omit<SelectProps, 'onChange'> & {
  id?: string;
  items: SelectItem[];
  value?: string | number | string[] | boolean | null | undefined;
  valueKey?: string;
  className?: string;
  helperText?: string;
  optionRender?: (item: SelectItem) => string | React.ReactNode;
  onChange?: (value: any) => void;
  error?: boolean;
  label?: string | React.ReactNode;
  labelId?: string;
};

const SimpleSelect: React.FC<UISimpleSelect> = ({ items, className, helperText, valueKey, value, label, labelId, variant, optionRender, onChange, error, ...rest }) => {
  const classes = useStyles();
  const outlinedClasses = variant === "outlined" ? { root: classes.outlined, shrink: classes.shrink } : {};

  const [innerValue, setInnerValue] = useState(value);

  /** Generates the display title for a dropdown option */
  const getOptionTitle = useCallback(
    (option: SelectItem) => {
      return optionRender ? optionRender(option) : option.title || "Invalid option";
    },
    [optionRender]
  );

  /** Handles value change */
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as string | number | boolean | string[] | null | undefined;
    setInnerValue(newValue);
    console.log("New Value:", newValue);
    if (onChange) {
      onChange(findMatchingValue(newValue));
    }
  };

  const findMatchingValue = useCallback(
    (val: any) => {
      if (!valueKey) return (items ?? []).includes(val) ? val : "";

    const matchedItem = (items ?? []).find((item) => item[valueKey] === val);
    return matchedItem ? matchedItem[valueKey] : "";
    },
    [items, valueKey]
  );
  
  const getOptionValue = useCallback(
    (option: SelectItem) => {
      return valueKey && option[valueKey] !== undefined ? option[valueKey] : option;
    },
    [valueKey]
  );
  
  useEffect(() => {
    console.log("Updated Value:", value, "Available Options:", items);
    setInnerValue(findMatchingValue(value));
  }, [value, items, findMatchingValue]);

  return (
    <FormControl className={`${classes.root} ${className || ""}`} error={error} required={rest.required}>
      {label && (
        <InputLabel id={labelId} classes={outlinedClasses}>
          {label}
        </InputLabel>
      )}

      <Select className={classes.root} onChange={handleChange} value={innerValue ?? ""} label={label} error={error} {...rest}>
        {Array.isArray(items) ? (
          items.map((item, index) =>
            item.type === "group" ? (
              <ListSubheader key={index} color="primary">
                {item.title}
              </ListSubheader>
            ) : (
              <MenuItem key={index} value={getOptionValue(item)}>
                {getOptionTitle(item)}
              </MenuItem>
            )
          )
        ) : (
          <MenuItem disabled><Trans>No options available</Trans></MenuItem>
        )}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SimpleSelect;
