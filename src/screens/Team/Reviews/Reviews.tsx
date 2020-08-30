import React from "react";
import { Slider } from "../../../components/Slider/Slider";
import { Review } from "./Review";
import logo from "./BURGER-ON.png";
import css from "./Review.module.sass";

export const Reviews: React.FC = () => (
  <div className={css.reviews}>
    <Slider>
      <Review
        title="Иванов Иван Иванович"
        subtitle="Директор по маркетингу компании Бургер Кинг"
        image={logo}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus
        sem ipsum, sed scelerisque diam fringilla eu. Phasellus com modo, magna
        a lobortis dictum, mi est ullamcorper justo, quis cong ue erat nunc et
        nisi. Proin viverra efficitur eros. Pellentesque volutpat finibus
        libero, a lacinia metus lobortis eget. Vestibulum at odio ex. Duis
        auctor gravida ultricies. Etiam vestibulum cursus enim a lacinia.
      </Review>
      <Review
        title="Иванов Иван Иванович"
        subtitle="Директор по маркетингу компании Бургер Кинг"
        image={logo}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus
        sem ipsum, sed scelerisque diam fringilla eu. Phasellus com modo, magna
        a lobortis dictum, mi est ullamcorper justo, quis cong ue erat nunc et
        nisi. Proin viverra efficitur eros. Pellentesque volutpat finibus
        libero, a lacinia metus lobortis eget. Vestibulum at odio ex. Duis
        auctor gravida ultricies. Etiam vestibulum cursus enim a lacinia.
      </Review>
      <Review
        title="Иванов Иван Иванович"
        subtitle="Директор по маркетингу компании Бургер Кинг"
        image={logo}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus
        sem ipsum, sed scelerisque diam fringilla eu. Phasellus com modo, magna
        a lobortis dictum, mi est ullamcorper justo, quis cong ue erat nunc et
        nisi. Proin viverra efficitur eros. Pellentesque volutpat finibus
        libero, a lacinia metus lobortis eget. Vestibulum at odio ex. Duis
        auctor gravida ultricies. Etiam vestibulum cursus enim a lacinia.
      </Review>
    </Slider>
  </div>
);
