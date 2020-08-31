import React from "react";

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

export const Cases: React.FC = () => (
  <section className={css.section}>
    <Slider itemsToShow={3} pagination={false}>
      <Item alt="Rolls Royce" srcOn={RrOn} srcOff={RrOff} />
      <Item alt="Poker Dom" srcOn={PokerOn} srcOff={PokerOff} />
      <Item alt="IKEA" srcOn={IkeaOn} srcOff={IkeaOff} />
      <Item alt="Burger King" srcOn={BkOn} srcOff={BkOff} />
      <Item alt="MARS" srcOn={MarsOn} srcOff={MarsOff} />
      <Item alt="Lakhta Center" srcOn={LahtaOn} srcOff={LahtaOff} />
      <Item alt="Mail.ru" srcOn={MailOn} srcOff={MailOff} />
      <Item alt="METRO" srcOn={MetroOn} srcOff={MetroOff} />
      <Item alt="PEPSICO" srcOn={PepsiOn} srcOff={PepsiOff} />
    </Slider>
  </section>
);
