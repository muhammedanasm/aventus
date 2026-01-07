import React, { createContext, useContext } from "react";
import { uiConfig } from "../config/uiConfig.js";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  return (
    <ConfigContext.Provider value={uiConfig}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
