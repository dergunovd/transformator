import React from "react";
import classNames from "classnames";
import { Parallax } from "react-scroll-parallax";
import { useSpring, animated, interpolate } from "react-spring/web";

import rocket from "./assets/rocket.png";
import meteor from "./assets/meteor.png";
import redbull from "./assets/redbull.png";
import stateBoard from "./assets/state-board.png";
import stone1 from "./assets/stone1.png";
import stone2 from "./assets/stone2.png";
import bus1 from "./assets/bus1.png";
import bus2 from "./assets/bus2.png";

import css from "./Planet.module.sass";
import { useViewport } from "react-viewport-hooks";

type Trans = (x: number, y: number) => string;

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1: Trans = (x, y) => `translate3d(${-(x / 50)}px,${-(y / 50)}px,0)`;
const trans2: Trans = (x, y) => `translate3d(${-(x / 40)}px,${-(y / 40)}px,0)`;
const trans3: Trans = (x, y) => `translate3d(${-(x / 20)}px,${-(y / 20)}px,0)`;
const trans4: Trans = (x, y) => `translate3d(${-(x / 50)}px,0,0)`;
const trans5: Trans = (x, y) => `translate3d(${-(x / 10)}px,${-(y / 10)}px,0)`;

export const Planet: React.FC = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 50, tension: 0, friction: 10 },
  }));
  const { vw } = useViewport();

  return (
    <section
      className={css.wrap}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <img src={rocket} className={classNames(css.image, css.rocket)} alt="" />
      <Parallax className={classNames(css.redbull, css.image)} y={[15, -15]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans2),
          }}
        >
          <img src={redbull} alt="" />
        </animated.div>
      </Parallax>
      <Parallax className={classNames(css.bus1, css.image)} y={[15, -15]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans2),
          }}
        >
          <img src={bus1} alt="" />
        </animated.div>
      </Parallax>
      <Parallax className={classNames(css.meteor, css.image)} y={[20, -20]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans3),
          }}
        >
          <img src={meteor} alt="" />
        </animated.div>
      </Parallax>
      <Parallax className={classNames(css.stateBoard, css.image)} y={[30, -30]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans5),
          }}
        >
          <img src={stateBoard} alt="" />
        </animated.div>
      </Parallax>
      <Parallax className={classNames(css.stone1, css.image)} y={[10, -10]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans1),
          }}
        >
          <img src={stone1} alt="" />
        </animated.div>
      </Parallax>
      <Parallax className={classNames(css.stone2, css.image)} y={[10, -10]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans2),
          }}
        >
          <img src={stone2} alt="" />
        </animated.div>
      </Parallax>
      <Parallax className={classNames(css.bus2, css.image)} y={[0, 0]}>
        <animated.div
          // @ts-ignore
          style={{
            transform: vw < 1024 ? () => "" : interpolate(props.xy, trans4),
          }}
        >
          <img src={bus2} alt="" />
        </animated.div>
      </Parallax>
      <div className={css.header}>
        <h2>Команда</h2>
        <h3>
          30 профессионалов с горящими глазами
          <br />и любовью к своему делу
        </h3>
      </div>
    </section>
  );
};
