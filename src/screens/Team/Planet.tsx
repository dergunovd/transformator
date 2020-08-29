import React from "react";
import { Parallax } from "react-scroll-parallax/cjs";

import camera from "./assets/camera.png";
import tesla from "./assets/tesla.png";
import astronaut from "./assets/astronaut.png";
import meteor from "./assets/meteor.png";
import redbull from "./assets/redbull.png";
import stones from "./assets/stones.png";

import css from "./Planet.module.sass";

export const Planet: React.FC = () => (
  <div className={css.wrap}>
    <Parallax className={css.camera} y={[-100, 100]}>
      <img src={camera} alt="" />
    </Parallax>
    <Parallax className={css.tesla} y={[-70, 70]}>
      <img src={tesla} alt="" />
    </Parallax>
    <Parallax className={css.meteor} y={[-50, 50]}>
      <img src={meteor} alt="" />
    </Parallax>
    <Parallax className={css.redbull} y={[-110, 110]}>
      <img src={redbull} alt="" />
    </Parallax>
    <Parallax className={css.stones} y={[-30, 30]}>
      <img src={stones} alt="" />
    </Parallax>
    <Parallax className={css.astronaut} y={[-80, 70]}>
      <img src={astronaut} alt="" />
    </Parallax>
  </div>
);
