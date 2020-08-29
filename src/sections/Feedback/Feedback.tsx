import React, { useContext } from "react";

import css from "./Feedback.module.sass";
import { Button } from "../../components/Button/Button";
import { PopupContext } from "../../context/popup.context";
export const Feedback: React.FC = () => {
  const { setOpen, setType } = useContext(PopupContext);

  return (
    <section className={css.feedback}>
      <h2>Напиши нам</h2>
      <h3>
        Если ты смелый тигриный лев, то бей по кнопке, чтобы задать свой вопрос
      </h3>
      <Button
        secondary
        onClick={() => {
          setOpen(true);
          setType("feedback");
        }}
      >
        Ударить по кнопке
      </Button>
    </section>
  );
};
