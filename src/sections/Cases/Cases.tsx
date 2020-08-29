import React, { useEffect, useState } from "react";
import { useViewport } from "react-viewport-hooks";
// @ts-ignore
import handleViewport from "react-in-viewport";

// TODO: reexport
import { Slider } from "../../components/Slider/Slider";
import { Item } from "./Item/Item";

// TODO: reexport
import BkOn from "./assets/BURGER-ON.png";
import BkOff from "./assets/BURGER-OFF.png";
import IkeaOn from "./assets/IKEA-ON.png";
import IkeaOff from "./assets/IKEA-OFF.png";
import LahtaOn from "./assets/LAHTA-ON.png";
import LahtaOff from "./assets/LAHTA-OFF.png";
import PokerOn from "./assets/POKER-ON.png";
import PokerOff from "./assets/POKER-OFF.png";
import RrOn from "./assets/ROLLS-ON.png";
import RrOff from "./assets/ROLLS-OFF.png";
import MailOn from "./assets/MAIL-ON.png";
import MailOff from "./assets/MAIL-OFF.png";
import MarsOn from "./assets/MARS-ON.png";
import MarsOff from "./assets/MARS-OFF.png";
import MetroOn from "./assets/METRO-ON.png";
import MetroOff from "./assets/METRO-OFF.png";
import PepsiOn from "./assets/PEPSI-ON.png";
import PepsiOff from "./assets/PEPSI-OFF.png";
import css from "./Cases.module.sass";

export const Cases: React.FC = handleViewport(
  // @ts-ignore
  ({ inViewport, forwardedRef }) => {
    const [currentActive, setCurrentActive] = useState(-1);
    useEffect(() => {
      if (inViewport) {
        setTimeout(() => setCurrentActive(0), 1000);
        setTimeout(() => setCurrentActive(1), 1700);
        setTimeout(() => setCurrentActive(2), 2400);
        setTimeout(() => setCurrentActive(-1), 3100);
      }
    }, [inViewport]);
    const { vw } = useViewport();

    return (
      <section className={css.section} ref={forwardedRef}>
        <h2>Работы</h2>
        <h3>
          Нажмите на логотип компании, чтобы подробнее прочитать,
          <br />
          как мы реализовали совместный проект
        </h3>
        <Slider
          itemsToShow={vw < 640 ? 1 : 3}
          pagination={false}
          className={css.slider}
        >
          <Item
            link="/rollsroyce"
            alt="Rolls Royce"
            srcOn={RrOn}
            srcOff={RrOff}
            isActiveDefault={currentActive === 0}
          />
          <Item
            link="/pokerdom"
            alt="Poker Dom"
            srcOn={PokerOn}
            srcOff={PokerOff}
            isActiveDefault={currentActive === 1}
          />
          <Item
            link="/ikea"
            alt="IKEA"
            srcOn={IkeaOn}
            srcOff={IkeaOff}
            isActiveDefault={currentActive === 2}
          />
          <Item
            link="/burgerking"
            alt="Burger King"
            srcOn={BkOn}
            srcOff={BkOff}
            isActiveDefault={currentActive === 3}
          />
          <Item
            link="/mars"
            alt="MARS"
            srcOn={MarsOn}
            srcOff={MarsOff}
            isActiveDefault={currentActive === 4}
          />
          <Item
            link="/lahta"
            alt="Lakhta Center"
            srcOn={LahtaOn}
            srcOff={LahtaOff}
            isActiveDefault={currentActive === 5}
          />
          <Item
            link="/mailru"
            alt="Mail.ru"
            srcOn={MailOn}
            srcOff={MailOff}
            isActiveDefault={currentActive === 6}
          />
          <Item
            link="/metro"
            alt="METRO"
            srcOn={MetroOn}
            srcOff={MetroOff}
            isActiveDefault={currentActive === 7}
          />
          <Item
            link="/pepsico"
            alt="PEPSICO"
            srcOn={PepsiOn}
            srcOff={PepsiOff}
            isActiveDefault={currentActive === 8}
          />
        </Slider>
      </section>
    );
  }
);
