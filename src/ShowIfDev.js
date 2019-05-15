import React from "react";
import { config } from "./config";

export const ShowIfDev = ({ children }) => {
  return config.devMode ? children : null;
};
