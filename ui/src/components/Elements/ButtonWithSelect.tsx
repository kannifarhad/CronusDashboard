import * as React from "react";
import Button, { ButtonPropsType } from "./Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type ButtonWithSelectProps = {
  items: ButtonItemsType[];
} & Omit<ButtonPropsType, "onClick">;

type ButtonItemsType = {
  title: string | JSX.Element;
  onClick: () => void;
};

export default function ButtonWithSelect({ items, ...buttonProps }: ButtonWithSelectProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button {...buttonProps} aria-controls={open ? "ButtonWithSelect" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true" onClick={handleClick} />
      <Menu id="ButtonWithSelect" anchorEl={anchorEl} open={open} onClose={handleClose} elevation={2} PaperProps={{ style: { borderRadius:"4px" } }}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={()=> {item.onClick(); handleClose()}
          }>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
