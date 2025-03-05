import { ButtonGroup as ButtonGroupMUI, ButtonGroupProps } from "@mui/material";
import { ButtonPropsType } from "./Button";
import Button from "./Button";

export type ButtonGroupPropsType = {
  buttonList: ButtonPropsType[];
} & ButtonGroupProps;

export const ButtonGroup: React.FC<ButtonGroupPropsType> = (props) => {
  const { buttonList, ...buttonGroupProps } = props;

  return (
    <ButtonGroupMUI  {...buttonGroupProps} >
      {Array.isArray(buttonList) && buttonList.map((button, index) => <Button key={index} {...button} />)}
    </ButtonGroupMUI>
  );
};

export default ButtonGroup;
