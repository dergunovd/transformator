import React from "react";

// TODO: reexport
import { Slider } from "../../components/Slider/Slider";
import { Item } from "./Item/Item";

// TODO: reexport
import BkOn from "./items/BURGER-ON.png";
import BkOff from "./items/BURGER-OFF.png";
import IkeaOn from "./items/IKEA-ON.png";
import IkeaOff from "./items/IKEA-OFF.png";
import LahtaOn from "./items/LAHTA-ON.png";
import LahtaOff from "./items/LAHTA-OFF.png";
import PokerOn from "./items/POKER-ON.png";
import PokerOff from "./items/POKER-OFF.png";
import RrOn from "./items/ROLLS-ON.png";
import RrOff from "./items/ROLLS-OFF.png";
import MailOn from "./items/MAIL-ON.png";
import MailOff from "./items/MAIL-OFF.png";
import MarsOn from "./items/MARS-ON.png";
import MarsOff from "./items/MARS-OFF.png";
import MetroOn from "./items/METRO-ON.png";
import MetroOff from "./items/METRO-OFF.png";
import PepsiOn from "./items/PEPSI-ON.png";
import PepsiOff from "./items/PEPSI-OFF.png";
import css from "./Video.module.sass";

export const Video: React.FC = () => (
  <section className={css.section}>
    {/*<img className={css.frame} src={frame} alt="" />*/}
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
