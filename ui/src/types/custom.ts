import { AlertColor } from "@mui/material/Alert";
import React, { ReactNode } from "react";

export interface DashboardMessage {
    title: string;
    message: string | ReactNode;
    type: AlertColor;
    disableClose?: boolean;
    progress?: boolean;
    timer?: number;
    id: string;
}
export type DashboardMessages = DashboardMessage[];
