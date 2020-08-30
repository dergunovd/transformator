import React, { useContext } from "react";
import Modal from "react-modal";
import { Button } from "../Button/Button";
import bg from "./popupBg.png";

import css from "./Popup.module.sass";
import { PopupContext } from "../../context/popup.context";

Object.assign(Modal.defaultStyles.content, {
  maxWidth: "480px",
  width: "90%",
  minHeight: "100px",
  maxHeight: "450px",
  margin: "auto",
  paddingTop: "70px",
  borderRadius: "12px",
  background: `#000 url(${bg}) right top / cover no-repeat`,
});

// @ts-ignore
Modal.defaultStyles.overlay.background = "rgba(0,0,0,.8)";

export const Popup: React.FC = () => {
  const { isOpen, setOpen } = useContext(PopupContext);

  return (
    <Modal isOpen={isOpen} shouldCloseOnOverlayClick>
      <div className={css.close} onClick={() => setOpen(false)} />
      <input className={css.input} placeholder="Имя" />
      <br />
      <input className={css.input} placeholder="Номер" />
      <Button>Отправить</Button>
    </Modal>
  );
};
