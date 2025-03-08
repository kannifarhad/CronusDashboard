import React, { memo, FC } from "react";
import InfoBoxes from "src/components/Molecules/InfoBoxes";
import { StyledToasterMessages } from "./styled";
import { DashboardMessage } from "src/types";
import { useAppSelector } from "src/store";
import { selectMessages } from "src/store/dashboard";

const ToasterMessages: FC = () => {
  const messages = useAppSelector(selectMessages);
  return (
    <StyledToasterMessages>
      {messages.map((alert: DashboardMessage) => (
        <InfoBoxes key={alert.id} alert={alert} />
      ))}
    </StyledToasterMessages>
  );
};

export default memo(ToasterMessages);
