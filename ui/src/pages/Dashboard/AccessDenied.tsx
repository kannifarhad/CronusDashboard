import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation, Trans } from "react-i18next";
import image404 from "./components/assets/images/403.svg";
import { Button } from "../../components/Elements";
import { Box, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

const StyledAccessDenied = styled(Paper)<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  borderRadius: 0,
  "& .accessDenied": {
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& .image": {
      maxWidth: 600,
      minWidth: 300,
      margin: "0 auto",
      width: "100%",
      padding: "30px 30px 0px 30px",
      "& img": {
        width: "100%",
        display: "block",
        marginBottom: "-1px",
      },
    },
    "& .texts": {
      textAlign: "center",
      flexGrow: 1,
      padding: 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifySelf: "center",
      "& h2": {
        color: theme?.customStyles.text.headings,
        fontSize: 27,
      },
      "& p": {
        color: theme?.customStyles.text.main,
        fontSize: 16,
      },
    },
  },
}));

export default function AccessDenied() {
  const { t } = useTranslation();
  const history = useNavigate();
  return (
    <>
      <Helmet>
        <title>{`${t("Access Denied")} | Cronus Dashboard`}</title>
      </Helmet>

      <StyledAccessDenied>
        <Box className="accessDenied" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Box className="image">
            <img alt="access denied" src={image404} />
          </Box>
          <Box className="texts">
            <h2>
              <Trans>You’ve found the right page, but you don’t have the necessary permissions to view it. </Trans>
            </h2>
            <p>
              <Trans>To access this page, you must be part of the appropriate user group. Please contact to administrator to get access.</Trans>
            </p>
            <Button icon={<span className="fas fa-tachometer-alt-fastest" />} title={<Trans>Go to Main Dashboard</Trans>} onClick={() => history("/")} />
            <Link to="/"></Link>
          </Box>
        </Box>
      </StyledAccessDenied>
    </>
  );
}
