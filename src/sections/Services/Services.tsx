import React, { useCallback, useContext, useState } from "react";
import { Slider } from "../../components/Slider/Slider";
import { Service } from "./Service";
import { Button } from "../../components/Button/Button";
import { PopupContext } from "../../context/popup.context";
import slideImg from "./assets/slideImg.png";
import css from "./Service.module.sass";

const SLIDER_IMAGES = [slideImg, slideImg, slideImg];
export const Services: React.FC = () => {
  const { setOpen } = useContext(PopupContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeSlide = useCallback((slides, currentIndex) => {
    setCurrentIndex(currentIndex);
  }, []);

  return (
    <div className={css.services}>
      <img src={SLIDER_IMAGES[currentIndex]} className={css.image} alt="" />
      <Slider onChange={onChangeSlide} isShort>
        <Service
          title="Рекламный ролик до 2 минут"
          price="от 250 000 рублей"
          button={<Button onClick={() => setOpen(true)}>Заказать ролик</Button>}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          cursus sem ipsum, sed scelerisque diam fringilla eu. Phasellus com
          modo, magna a lobortis dictum, mi est ullamcorper justo, quis cong ue
          erat nunc et nisi. Proin viverra efficitur eros. Pellentesque volutpat
          finibus libero, a lacinia metus lobortis eget. Vestibulum at odio ex.
          Duis auctor gravida ultricies. Etiam vestibulum cursus enim a lacinia.
        </Service>
        <Service
          title="Рекламный ролик до 2 минут"
          price="от 250 000 рублей"
          button={<Button onClick={() => setOpen(true)}>Заказать ролик</Button>}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          cursus sem ipsum, sed scelerisque diam fringilla eu. Phasellus com
          modo, magna a lobortis dictum, mi est ullamcorper justo, quis cong ue
          erat nunc et nisi. Proin viverra efficitur eros. Pellentesque volutpat
          finibus libero, a lacinia metus lobortis eget. Vestibulum at odio ex.
          Duis auctor gravida ultricies. Etiam vestibulum cursus enim a lacinia.
        </Service>
        <Service
          title="Рекламный ролик до 2 минут"
          price="от 250 000 рублей"
          button={<Button onClick={() => setOpen(true)}>Заказать ролик</Button>}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          cursus sem ipsum, sed scelerisque diam fringilla eu. Phasellus com
          modo, magna a lobortis dictum, mi est ullamcorper justo, quis cong ue
          erat nunc et nisi. Proin viverra efficitur eros. Pellentesque volutpat
          finibus libero, a lacinia metus lobortis eget. Vestibulum at odio ex.
          Duis auctor gravida ultricies. Etiam vestibulum cursus enim a lacinia.
        </Service>
      </Slider>
    </div>
  );
};
