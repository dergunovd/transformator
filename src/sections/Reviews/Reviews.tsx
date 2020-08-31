import React, { useCallback, useState } from "react";
import { Slider } from "../../components/Slider/Slider";
import { Review } from "./Review";
import logo from "./BurgerKing.png";
import css from "./Review.module.sass";

const SLIDER_IMAGES = [logo, logo, logo];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeSlide = useCallback((slides, currentIndex) => {
    setCurrentIndex(currentIndex);
  }, []);

  return (
    <div className={css.reviews}>
      <div className={css.reviewsContent}>
        <img src={SLIDER_IMAGES[currentIndex]} className={css.image} alt="" />
        <Slider onChange={onChangeSlide}>
          <Review
            title="Иванов Иван Иванович"
            subtitle="Директор по маркетингу компании Бургер Кинг"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus sem ipsum, sed scelerisque diam fringilla eu. Phasellus com
            modo, magna a lobortis dictum, mi est ullamcorper justo, quis cong
            ue erat nunc et nisi. Proin viverra efficitur eros. Pellentesque
            volutpat finibus libero, a lacinia metus lobortis eget. Vestibulum
            at odio ex. Duis auctor gravida ultricies. Etiam vestibulum cursus
            enim a lacinia.
          </Review>
          <Review
            title="Иванов Иван Иванович"
            subtitle="Директор по маркетингу компании Бургер Кинг"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus sem ipsum, sed scelerisque diam fringilla eu. Phasellus com
            modo, magna a lobortis dictum, mi est ullamcorper justo, quis cong
            ue erat nunc et nisi. Proin viverra efficitur eros. Pellentesque
            volutpat finibus libero, a lacinia metus lobortis eget. Vestibulum
            at odio ex. Duis auctor gravida ultricies. Etiam vestibulum cursus
            enim a lacinia.
          </Review>
          <Review
            title="Иванов Иван Иванович"
            subtitle="Директор по маркетингу компании Бургер Кинг"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus sem ipsum, sed scelerisque diam fringilla eu. Phasellus com
            modo, magna a lobortis dictum, mi est ullamcorper justo, quis cong
            ue erat nunc et nisi. Proin viverra efficitur eros. Pellentesque
            volutpat finibus libero, a lacinia metus lobortis eget. Vestibulum
            at odio ex. Duis auctor gravida ultricies. Etiam vestibulum cursus
            enim a lacinia.
          </Review>
        </Slider>
      </div>
    </div>
  );
};
