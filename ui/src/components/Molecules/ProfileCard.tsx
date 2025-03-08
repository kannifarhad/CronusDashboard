import React, { useEffect, useRef, memo, useState } from "react";
import { AlertTitle, Alert, IconButton, Collapse, Slide, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { removeMessage } from "src/store/dashboard";
import { DashboardMessage } from "src/types";
import { useDispatch } from "react-redux";

export const StyledInfoBox = styled(Alert)(({ theme }) => ({
  marginTop: "10px",
  overflow: "hidden",
  boxShadow: theme.customStyles.boxShadows.levelTwo,
  "& .fmInfoBoxtitle": {
    fontSize: "14px",
  },
  "& .fmInfoBoxmessage": {
    fontSize: "12px",
    margin: "0",
    padding: "0",
  },
  "& .fmInfoBoxprogress": {
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
  },
}));

interface ProfileCardProps {
  userId: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
   
  }, [dispatch]);

  return (
    <Box>

    </Box>
  );
};

export default memo(ProfileCard);
