import { List, ListItemButton } from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

type ListWithIconProps = {
  items: any[];
};

export const StyledList = styled(List)(() => {
  return {
    padding: "0px",
  };
});

export const StyledListItem = styled(ListItemButton)<{ theme?: Theme }>(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    padding: "5px 10px",
    borderBottom: `1px solid ${theme.customStyles.header.borderColor}`,
    background: `${theme.palette.background}`,
    "&:hover": {
      backgroundColor: theme.customStyles.header.background,
    },
    ".icon": {
      padding: "10px 20px 10px 10px",
      fontSize: "20px",
      width: "55px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".text": {
      padding: "10px 0px",
      h4: {
        fontSize: "15px",
        color: theme.customStyles.text.headings,
        margin: "0px",
      },
      p: {
        fontSize: "11px",
        color: theme.customStyles.text.headings,
        margin: "0px",
      },
    },
  };
});

export const ListWithIcon: React.FC<ListWithIconProps> = ({ items, ...rest }) => {
  return (
    <StyledList {...rest}>
      {items.map(({ title, subtitle, iconName, onClick }) => (
        <StyledListItem onClick={onClick}>
          <div className="icon">
            <i className={iconName} />
          </div>
          <div className="text">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default ListWithIcon;
