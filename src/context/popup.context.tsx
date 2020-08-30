import React, { Dispatch, SetStateAction, useState } from "react";

interface IPopupContext {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | (() => void);
}
const defaultValue = { isOpen: false, setOpen: () => null };

export const PopupContext = React.createContext<IPopupContext>(defaultValue);

export const PopupProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </PopupContext.Provider>
  );
};
