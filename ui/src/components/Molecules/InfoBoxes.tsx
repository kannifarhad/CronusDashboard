import React, { useEffect, useRef, memo, useState } from "react";
import { AlertTitle, Alert, IconButton, Collapse, Slide, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
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

interface InfoBoxesProps {
  alert: DashboardMessage;
}

const InfoBoxes: React.FC<InfoBoxesProps> = ({ alert }) => {
  const dispatch = useDispatch();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (alert.timer) {
      closeTimer.current = setTimeout(() => {
        setOpen(false);
        setTimeout(() => {
          dispatch(removeMessage(alert.id));
        }, 500);
      }, alert.timer);
    }
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current); // Cleanup the timer on unmount or when alert changes
      }
    };
  }, [alert, dispatch]);

  return (
    <Slide in={open} direction="left" mountOnEnter unmountOnExit>
      <StyledInfoBox
        key={alert.id}
        severity={alert.type}
        action={
          !alert.disableClose && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setTimeout(() => dispatch(removeMessage(alert.id)), 500);
                if (closeTimer.current) {
                  clearTimeout(closeTimer.current); // Cleanup the timer on unmount or when alert changes
                }
              }}
            >
              <span style={{ width: "12px", height: "13px" }} className="fad fa-close" />
            </IconButton>
          )
        }
      >
        <AlertTitle className="fmInfoBoxtitle">{alert.title}</AlertTitle>
        <p className="fmInfoBoxmessage">{alert.message}</p>
        {alert.progress && <LinearProgress className="fmInfoBoxprogress" />}
      </StyledInfoBox>
    </Slide>
  );
};

export default memo(InfoBoxes);
