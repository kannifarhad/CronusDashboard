import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

export const StyledSideMenu = styled.div<{
  theme?: Theme;
  sidebarCollapsed: boolean;
}>((props) => {
  const { theme, sidebarCollapsed } = props;

  return {
    width: !sidebarCollapsed ? "70px" : "275px",
    minWidth: !sidebarCollapsed ? "70px" : "275px",
    background: theme.customStyles.sideBar.background,
    boxShadow: theme.customStyles.sideBar.boxShadow,
    position: "relative",
    zIndex: 666,
    height: "100%",

    ".asideMenuContainer": {
      display: "flex",
      flexDirection: "column",
      height: "100%",

      ".asideMenuListWrapper": {
        // You can add styles here if needed
      },
    },
  };
});

export const StyledSideBarHead = styled.div<{
  theme?: Theme;
  sidebarCollapsed: boolean;
}>(({ theme, sidebarCollapsed }) => {
  return {
    padding: "37px 20px",
    borderBottom: `1px solid ${theme?.customStyles.sideBar.borderColor}`,

    img: {
      height: "40px",
      margin: "0 auto",
      display: sidebarCollapsed ? "block" : "none",
    },

    ".smallLogo": {
      display: !sidebarCollapsed ? "block" : "none",
    },
  };
});

export const StyledSideMenuCont = styled.div<{
  theme?: Theme;
  sidebarCollapsed: boolean;
}>((props) => {
  const { theme, sidebarCollapsed } = props;

  return {
    paddingBottom: "50px",
    ul: {
      listStyle: "none",
      padding: 0,
      li: {
        margin: "0",
        padding: "0",
        position: "relative",
        width: "100%",
      },
    },

    "&.sideMenuMimimise": {
      ".asideTitle, ul.asideSubmenu": {
        display: "none !important",
      },
      "li:hover": {
        "ul.asideSubmenu": {
          display: "block !important",
          borderBottomRightRadius: "5px",
          borderTopRightRadius: "5px",
          boxShadow: theme.customStyles.sideBar.boxShadow,
          overflow: "hidden",
          position: "absolute",
          top: "-1px",
          left: "70px",
          width: "250px",
          paddingLeft: "0px",
          li: {
            borderLeft: `1px solid ${theme.customStyles.sideBar.borderColor}`,
          },
          "li:first-of-type": {
            borderLeft: "none",
          },
          ".asideTitle": {
            display: "inline-block !important",
          },
        },
      },
    },

    ".asideMenuItem": {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      transition: "all 0.3s",
      borderBottom: `1px solid ${theme?.customStyles.sideBar.borderColor}`,
      "&:last-child": {
        borderBottom: "0",
      },
      "&:hover, &.active": {
        color: theme?.customStyles.text.active,
        "&> .menulink": {
          color: theme?.customStyles.text.active,

          ".asideDot": {
            background: theme?.customStyles.text.active,
          },

          "&::after": {
            content: "''",
            position: "absolute",
            right: 0,
            height: "calc(100% - 6px)",
            width: "3px",
            top: "3px",
            background: theme?.customStyles.text.active,
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          },
        },
      },
      ".menulink": {
        padding: "15px 20px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: "13px",
        position: "relative",
        fontWeight: 500,
        color: theme?.customStyles.text.main,
        boxSizing: "border-box",
        cursor: "pointer",
        textDecoration: "none",

        "&:hover": {
          background: theme?.customStyles.sideBar.activeBackground,
          color: theme?.customStyles.text.active,

          ".asideDot": {
            background: theme?.customStyles.text.active,
          },
        },

        ".asideDot": {
          width: "4px",
          height: "4px",
          borderRadius: "3px",
          background: theme?.customStyles.text.main,
          marginRight: "10px",
        },

        ".iconArrow": {
          position: "absolute",
          fontSize: "9px",
          lineHeight: "10px",
          right: "15px",
          top: "50%",
          marginTop: "-5px",
          transition: "all 0.3s",
        },

        ".asideMenuIcon": {
          paddingRight: "10px",
          fontSize: "13px",
          color: theme?.customStyles.text.active,
        },
      },

      "ul.asideSubmenu": {
        display: "none",
        paddingLeft: "20px",
        background: theme.customStyles.sideBar.background,
        width: "100%",
        "li a": {
          padding: "12px 10px",
        },
      },
      "&.open": {
        ".iconArrow": {
          transform: "rotate(90deg)",
        },

        "> a": {
          color: theme?.customStyles.text.active,
        },

        "ul.asideSubmenu": {
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s",
        },
      },
    },
  };
});
