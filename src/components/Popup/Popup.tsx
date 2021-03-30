import React, { useCallback, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import { PopupContext } from "../../context/popup.context";
import { Button } from "../Button/Button";
import bg from "./assets/popupBg.png";
import css from "./Popup.module.sass";

Object.assign(Modal.defaultStyles.content, {
  maxWidth: "480px",
  width: "90%",
  left: "20px",
  right: "20px",
  minHeight: "120px",
  maxHeight: "600px",
  margin: "auto",
  paddingTop: "50px",
  borderRadius: "12px",
  zIndex: "9999",
  background: `#000 url(${bg}) right top / cover no-repeat`,
});

// @ts-ignore
Modal.defaultStyles.overlay.background = "rgba(0,0,0,.8)";

export const Popup: React.FC = () => {
  const { isOpen, setOpen, type, config } = useContext(PopupContext);
  const [isSend, setSend] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(
    () => () => {
      setSend(false);
      setPhone("");
      setEmail("");
      setName("");
      setMessage("");
      setAgree(false);
    },
    [isOpen]
  );

  useEffect(() => {
    Object.assign(Modal.defaultStyles.content, {
      height: isSend ? "120px" : "auto",
    });
  }, [isSend]);

  const send = useCallback(
    (e) => {
      e.preventDefault();
      setDisable(true);
      const SERVER_HOST = "https://server.transformator.media";
      // const SERVER_HOST = "http://server.transformator.dergunov.net";
      if (type === "phone") {
        axios
          .post(`${SERVER_HOST}/get`, {
            name,
            phone,
            product: config?.product,
          })
          .then(() => setSend(true))
          .catch(console.error)
          .finally(() => {
            setDisable(false);
          });
      } else if (type === "email") {
        axios
          .post(`${SERVER_HOST}/send`, {
            email,
          })
          .then(() => setSend(true))
          .catch(console.error)
          .finally(() => {
            setDisable(false);
          });
      } else {
        axios
          .post(`${SERVER_HOST}/feedback`, {
            name,
            phone,
            message,
          })
          .then(() => setSend(true))
          .catch(console.error)
          .finally(() => {
            setDisable(false);
          });
      }
    },
    [config, email, message, name, phone, type]
  );

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => setOpen(false)}
    >
      <form onSubmit={send}>
        <div
          className={css.close}
          onClick={() => {
            setOpen(false);
            setSend(false);
          }}
        />
        {isSend ? (
          "Успешно отправлено"
        ) : type === "phone" ? (
          <>
            <h2 className={css.title}>
              Заполните форму, чтобы заказать {config.title}
            </h2>
            <input
              className={css.input}
              required
              placeholder="Имя"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <input
              className={css.input}
              type="tel"
              required
              placeholder="Номер"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label className={css.checkbox}>
              <input
                type="checkbox"
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className={css.myCheckbox} />Я принимаю условия передачи
              информации и <a href="#">политику конфиденциальности</a>
            </label>
          </>
        ) : type === "email" ? (
          <>
            <h2 className={css.title}>
              Заполните форму, чтобы получить презентацию
            </h2>
            <input
              className={css.input}
              type="email"
              required
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className={css.checkbox}>
              <input
                type="checkbox"
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className={css.myCheckbox} />Я принимаю условия передачи
              информации и <a href="#">политику конфиденциальности</a>
            </label>
          </>
        ) : (
          <>
            <h2 className={css.title}>Напиши нам</h2>
            <input
              className={css.input}
              required
              placeholder="Имя"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <input
              className={css.input}
              type="tel"
              required
              placeholder="Номер"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <textarea
              className={css.input}
              required
              placeholder="Сообщение"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label className={css.checkbox}>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className={css.myCheckbox} />Я принимаю условия передачи
              информации и{" "}
              <a href="/Политика конфиденциальности.pdf" target="_blank">
                политику конфиденциальности
              </a>
            </label>
          </>
        )}
        {!isSend && (
          <Button className={css.button} disabled={!agree || disable}>
            Отправить
          </Button>
        )}
      </form>
    </Modal>
  );
};
