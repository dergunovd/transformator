import React, { Dispatch, SetStateAction, useState } from "react";

interface IPopupContext {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | (() => void);
  type: string;
  setType: Dispatch<SetStateAction<string>> | (() => void);
  config: { product?: string; title?: string };
  setConfig: Dispatch<SetStateAction<object>> | (() => void);
}
const defaultValue = {
  isOpen: false,
  setOpen: () => null,
  type: "phone",
  setType: () => null,
  config: {},
  setConfig: () => null,
};

export const PopupContext = React.createContext<IPopupContext>(defaultValue);

export const PopupProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [type, setType] = useState("phone");
  const [config, setConfig] = useState({});

  return (
    <PopupContext.Provider
      value={{ isOpen, setOpen, type, setType, config, setConfig }}
    >
      {children}
    </PopupContext.Provider>
  );
};
