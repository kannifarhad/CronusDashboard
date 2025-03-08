import { createSlice } from "@reduxjs/toolkit";
import {  RootState } from "./index";
import { ThemeTypes } from "src/theme";
import { DashboardMessages } from "src/types";
import { clear } from "console";

const SLICE_NAME = "dashboard";

type DashboardState = {
  sidebarCollapsed: boolean;
  theme: ThemeTypes;
  messages: DashboardMessages;
};

const initialState: DashboardState = {
  sidebarCollapsed: true,
  theme: "light",
  messages: [],
};

export const dashboardSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    openSidebar(state) {
      state.sidebarCollapsed = true;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    removeMessage(state, action) {
      state.messages = state.messages.filter((msg) => msg.id !== action.payload);
    },
    clearMessages(state) {
      state.messages = [];
    },
    closeSidebar(state) {
      state.sidebarCollapsed = false;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export default dashboardSlice.reducer;
export const { openSidebar, closeSidebar, setTheme, addMessage, clearMessages, removeMessage } = dashboardSlice.actions;
export const selectSideBar = (state: RootState) => state.dashboard.sidebarCollapsed;
export const selectTheme = (state: RootState) => state.dashboard.theme;
export const selectMessages = (state: RootState) => state.dashboard.messages;
