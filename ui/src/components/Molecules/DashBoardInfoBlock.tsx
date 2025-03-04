import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

type Props = {
  mainIcon: string;
  footerIcon: string;
  title: JSX.Element | string;
  description?: JSX.Element | string;
  foooterText: JSX.Element | string;
  color: string;
  children?: any;
};

const StyledDashBoardInfoBlock = styled(Paper)<{ theme?: Theme }>(({ theme }) => {
  return {
    display: "block",
    flexGrow: 1,
    flexDirection: "column",
    boxShadow: "0 0 13px 0 rgba(82, 63, 105, 0.05)",
    borderRadius: "4px",
    marginTop: "20px",

    ".blockContent": {
      padding: "20px",
    },
    ".headContent": {
      float: "left",
      padding: "15px",
      marginTop: "-20px",
      margin: "-20px 15px 20px 15px",
      borderRadius: "3px",
      backgroundColor: "#999",
      flexDirection: "column",
      "&.yellow": {
        background: "linear-gradient(60deg, #ffa726, #fb8c00)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)",
      },
      "&.green": {
        background: "linear-gradient(60deg, #66bb6a, #43a047)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)",
      },
      "&.red": {
        background: "linear-gradient(60deg, #ef5350, #e53935)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)",
      },
      "&.blue": {
        background: "linear-gradient(60deg, #26c6da, #00acc1)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 172, 193, 0.4)",
      },
      "span.mainIcon": {
        width: "56px",
        height: "56px",
        overflow: "unset",
        fontSize: "36px",
        textAlign: "center",
        lineHeight: "56px",
        marginBottom: "1px",
        color: "#fff",
        display: "block",
      },
    },
    ".infoText": {
      float: "right",
      padding: "1rem",
      textAlign: "right",
      "&::after": {
        content: "''",
        clear: "both",
      },
      ".title": {
        fontSize: "0.8em",
        color: `${theme?.customStyles.text.headings}`,
      },
      ".description": {
        fontSize: "1.5em",
        color: `${theme?.customStyles.text.main}`,
      },
    },
    ".infoBlockContent": {
      margin: "0px 15px",
    },
    ".infoFooter": {
      width: "calc(100% - 30px)",
      borderTop: `1px solid ${theme?.customStyles.header.borderColor}`,
      padding: "0.5rem 0",
      margin: "0px auto",
      "> div": {
        display: "inline-block",
        color: "var(--infotextColor)",
        verticalAlign: "middle",
        fontSize: "0.7em",
      },
      ".textFooter": {
        padding: "0 0.5rem",
      },
    },
  };
});

export const DashBoardInfoBlock = ({ mainIcon, footerIcon, title, description, foooterText, color, children }: Props) => {
  return (
    <StyledDashBoardInfoBlock>
      <div className={`headContent ${color}`}>
        <span className={`mainIcon ${mainIcon}`}></span>
      </div>

      <div className="infoText">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>

      <div className="clear"></div>

      <div className="infoBlockContent">{children}</div>
      <div className="infoFooter">
        <div className="iconFooter">
          <span className={footerIcon}></span>
        </div>
        <div className="textFooter">{foooterText}</div>
      </div>
    </StyledDashBoardInfoBlock>
  );
};
