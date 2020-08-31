import React from "react";
import classNames from "classnames";
import { Parallax } from "react-scroll-parallax/cjs";

import tShirt from "./assets/t-shirt.png";
import rocket from "./assets/rocket.png";
import meteor from "./assets/meteor.png";
import redbull from "./assets/redbull.png";
import mask from "./assets/mask.png";
import stateBoard from "./assets/state-board.png";

import css from "./Planet.module.sass";

export const Planet: React.FC = () => (
  <div className={css.wrap}>
    <Parallax className={classNames(css.tShirt, css.image)} y={[-10, 10]}>
      <img src={tShirt} alt="" />
    </Parallax>
    <Parallax className={classNames(css.rocket, css.image)} y={[10, -10]}>
      <img src={rocket} alt="" />
    </Parallax>
    <Parallax className={classNames(css.stateBoard, css.image)} y={[15, -15]}>
      <img src={stateBoard} alt="" />
    </Parallax>
    <Parallax className={classNames(css.mask, css.image)} y={[-20, 20]}>
      <img src={mask} alt="" />
    </Parallax>
    <Parallax className={classNames(css.redbull, css.image)} y={[35, -35]}>
      <img src={redbull} alt="" />
    </Parallax>
    <Parallax className={classNames(css.meteor, css.image)} y={[-30, 30]}>
      <img src={meteor} alt="" />
    </Parallax>
  </div>
);
