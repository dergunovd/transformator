import React, { useCallback, useContext, useState } from "react";
//@ts-ignore
import { Zoom } from "react-reveal";
import { Parallax } from "react-scroll-parallax";
import { animated, interpolate, useSpring } from "react-spring/web";

import { Slider } from "../../components/Slider/Slider";
import { Service } from "./Service";
import { Button } from "../../components/Button/Button";
import { PopupContext } from "../../context/popup.context";

import css from "./Service.module.sass";
import water1 from "./assets/water1.png";
import water2 from "./assets/water2.png";
import water3 from "./assets/water3.png";
import lamp1 from "./assets/lamp1.png";
import lamp2 from "./assets/lamp2.png";
import doc3 from "./assets/doc3.png";
import doc2 from "./assets/doc2.png";
import doc4 from "./assets/doc4.png";
import doc1 from "./assets/doc1.png";
import banan1 from "./assets/banan1.png";
import banan2 from "./assets/banan2.png";
import banan3 from "./assets/banan3.png";
import banan4 from "./assets/banan4.png";

const BUTTONS = [
  {
    product: "Рекламный ролик",
    title: "Рекламный ролик",
    text: "Заказать ролик",
  },
  {
    product: "Имиджевое видео",
    title: "Имиджевое видео",
    text: "Заказать видео",
  },
  {
    product: "Документальный фильм",
    title: "Документальный фильм",
    text: "Заказать фильм",
  },
  {
    product: "Специальный проект",
    title: "Специальный проект",
    text: "Заказать проект",
  },
];

type Trans = (x: number, y: number) => string;

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1: Trans = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const trans2: Trans = (x: number, y: number) =>
  `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans3: Trans = (x: number, y: number) =>
  `translate3d(${-(x / 10)}px,${-(y / 10)}px,0)`;
const trans4: Trans = (x: number, y: number) =>
  `translate3d(${x / 7}px,${y / 7}px,0)`;

export const Services: React.FC = () => {
  const { setOpen, setType, setConfig } = useContext(PopupContext);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 50, tension: 0, friction: 10 },
  }));
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeSlide = useCallback((slides, currentIndex) => {
    setCurrentIndex(currentIndex);
  }, []);

  return (
    <section
      className={css.services}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <h2>Продукты</h2>
      <h3>
        Скачивайте презентацию, чтобы подробнее ознакомиться с нашим
        предложением
        <a
          className={css.download}
          onClick={() => {
            setOpen(true);
            setType("email");
            setConfig({});
          }}
        >
          Скачать презентацию
        </a>
      </h3>
      <Slider onChange={onChangeSlide}>
        <Service
          title="Рекламный ролик до 1.5 минут"
          price="от 500 000 рублей"
          description="Яркое видео, главная задача которого продать ваш продукт"
          button={
            <Button
              onClick={() => {
                setOpen(true);
                setType("phone");
                setConfig({
                  product: BUTTONS[0].product,
                  title: BUTTONS[0].product,
                });
              }}
            >
              {BUTTONS[0].text}
            </Button>
          }
          image={
            <Zoom opposite when={currentIndex === 0}>
              <Parallax className={css.imageParallax} y={[-10, 10]}>
                <animated.div
                  style={{
                    transform: interpolate(props.xy, trans2),
                  }}
                >
                  <img className={css.imageParallaxItem} alt="" src={water1} />
                </animated.div>
              </Parallax>
              <Parallax className={css.imageParallax} y={[10, -10]}>
                <animated.div
                  style={{
                    transform: interpolate(props.xy, trans1),
                  }}
                >
                  <img className={css.imageParallaxItem} alt="" src={water2} />
                </animated.div>
              </Parallax>
              <Parallax className={css.imageParallax} y={[10, -10]}>
                <animated.div
                  style={{
                    transform: interpolate(props.xy, trans3),
                  }}
                >
                  <img className={css.imageParallaxItem} alt="" src={water3} />
                </animated.div>
              </Parallax>
            </Zoom>
          }
        />
        <Service
          title="Имиджевое видео до 3 минут"
          price="от 1 000 000 рублей"
          description="Видео о компании, главная задача которого увеличить узнаваемость и лояльность к бренду у целевой аудитории"
          button={
            <Button
              onClick={() => {
                setOpen(true);
                setType("phone");
                setConfig({
                  product: BUTTONS[1].product,
                  title: BUTTONS[1].product,
                });
              }}
            >
              {BUTTONS[1].text}
            </Button>
          }
          image={
            <div
              className={css.image}
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <Zoom opposite when={currentIndex === 1}>
                <Parallax className={css.imageParallax} y={[-10, 10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans2),
                    }}
                  >
                    <img className={css.imageParallaxItem} alt="" src={lamp1} />
                  </animated.div>
                </Parallax>
                <Parallax className={css.imageParallax} y={[10, -10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans3),
                    }}
                  >
                    <img className={css.imageParallaxItem} alt="" src={lamp2} />
                  </animated.div>
                </Parallax>
              </Zoom>
            </div>
          }
        />
        <Service
          title="Документальный фильм"
          price="от 2 500 000 рублей"
          description="Инструмент, позволяющий создать образ компании и укрепить доверие к бренду"
          button={
            <Button
              onClick={() => {
                setOpen(true);
                setType("phone");
                setConfig({
                  product: BUTTONS[2].product,
                  title: BUTTONS[2].product,
                });
              }}
            >
              {BUTTONS[2].text}
            </Button>
          }
          image={
            <div
              className={css.image}
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <Zoom opposite when={currentIndex === 2}>
                <div className={css.imageParallax}>
                  <img className={css.imageParallaxItem} alt="" src={doc3} />
                </div>
                <Parallax className={css.imageParallax} y={[-10, 10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans2),
                    }}
                  >
                    <img className={css.imageParallaxItem} alt="" src={doc2} />
                  </animated.div>
                </Parallax>
                <Parallax className={css.imageParallax} y={[10, -10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans3),
                    }}
                  >
                    <img className={css.imageParallaxItem} alt="" src={doc4} />
                  </animated.div>
                </Parallax>
                <Parallax className={css.imageParallax} y={[10, -10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans4),
                    }}
                  >
                    <img className={css.imageParallaxItem} alt="" src={doc1} />
                  </animated.div>
                </Parallax>
              </Zoom>
            </div>
          }
        />
        <Service
          title="Специальный проект"
          price=""
          description="Мы реализуем любую вашу самую смелую идею"
          button={
            <Button
              onClick={() => {
                setOpen(true);
                setType("phone");
                setConfig({
                  product: BUTTONS[3].product,
                  title: BUTTONS[3].product,
                });
              }}
            >
              {BUTTONS[3].text}
            </Button>
          }
          image={
            <div
              className={css.image}
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <Zoom opposite when={currentIndex === 3}>
                <div className={css.imageParallax}>
                  <img className={css.imageParallaxItem} alt="" src={banan1} />
                </div>
                <Parallax className={css.imageParallax} y={[-10, 10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans2),
                    }}
                  >
                    <img
                      className={css.imageParallaxItem}
                      alt=""
                      src={banan2}
                    />
                  </animated.div>
                </Parallax>
                <Parallax className={css.imageParallax} y={[10, -10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans3),
                    }}
                  >
                    <img
                      className={css.imageParallaxItem}
                      alt=""
                      src={banan3}
                    />
                  </animated.div>
                </Parallax>
                <Parallax className={css.imageParallax} y={[10, -10]}>
                  <animated.div
                    style={{
                      transform: interpolate(props.xy, trans4),
                    }}
                  >
                    <img
                      className={css.imageParallaxItem}
                      alt=""
                      src={banan4}
                    />
                  </animated.div>
                </Parallax>
              </Zoom>
            </div>
          }
        />
      </Slider>
    </section>
  );
};
