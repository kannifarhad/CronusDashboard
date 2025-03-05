import { Components, Theme } from "@mui/material/styles";

const componentsOverride: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none", // Example: Prevent uppercase text
      },
      outlined: {
        backgroundColor: "transparent",
      },
      sizeLarge: {
        padding: "15px 22px !important",
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        // "&:hover": {
        //   boxShadow:
        //     "0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.01) !important",
        // },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
      },
      sizeSmall: {
        fontSize: "0.85rem",
        padding: "8px",
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.8em",
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        padding: "0px",
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: "'Montserrat', sans-serif !important",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        "&:focus": {
          background: "var(--mainLightColor) !important",
        },
      },
    },
  },
  MuiTableSortLabel: {
    styleOverrides: {
      icon: {
        marginTop: "-3px",
      },
      root: {
        "&.MuiTableSortLabel-active.MuiButtonBase-root": {
          "&:hover": {
            boxShadow: "none !important",
          },
        },
      },
    },
  },
};

export default componentsOverride;