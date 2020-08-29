import React, { useCallback, useState } from "react";
import { Slider } from "../../components/Slider/Slider";
import { Review } from "./Review";
import Bk from "./assets/BURGER-ON.png";
import Ikea from "./assets/IKEA-ON.png";
import Poker from "./assets/POKER-ON.png";
import Rr from "./assets/ROLLS-ON.png";
import Mars from "./assets/MARS-ON.png";
import css from "./Review.module.sass";

const SLIDER_IMAGES = [Bk, Ikea, Poker, Rr, Mars];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeSlide = useCallback((slides, currentIndex) => {
    setCurrentIndex(currentIndex);
  }, []);

  return (
    <section className={css.reviews}>
      <h2>Отзывы</h2>
      <img src={SLIDER_IMAGES[currentIndex]} className={css.image} alt="" />
      <div className={css.reviewsContent}>
        <Slider onChange={onChangeSlide}>
          <Review
            title="Дмитрий Медовый"
            subtitle="Генеральный директор «Бургер Кинг» в России"
          >
            Спасибо команде «Transformator Production» за великолепную работу на
            съемочной площадке: вы блестяще справились со всеми поставленными
            задачами, а Дмитрий замечательно вписался в команду нашей сети!
            Надеемся на дальнейшее сотрудничество
          </Review>
          <Review title="Хенрик Мост" subtitle="Креативный директор">
            Din film ingick i den gyllene samlingen av vårt företag. Jag
            upplevde Hugge medan jag tittade på detta mästerverk
            <br />
            <br />
            Ваш фильм вошел в золотую коллекцию нашей компании. Я испытал хюгге
            во время просмотра этого шедевра
          </Review>
          <Review title="Компания «Poker Dom»" subtitle="">
            Мы долго не знали как реализовать и креативно подойти к созданию
            рекламного ролика нашей компании. Результат нас впечатлил, именно с
            точки зрения художественной адаптации к современным реалиям. Респект
            команде трансформатора за проделанную работу и креатив.
          </Review>
          <Review
            title="Хенрик Вильхельсмайер"
            subtitle="Глобальный директор по продажам Rolls-Royce Motor Cars и член совета директоров"
          >
            Компания «Rolls-Royce» благодарит команду «Transformator Production»
            за профессионализм и мастерство во время съемок документального
            фильма про нашу компанию и новый концепт-кар. Вы как автомобиль
            Rolls-Royce, только в нише видеопроизводства
          </Review>
          <Review
            title="Валерий Щапов"
            subtitle="Президент компании «MARS» в России"
          >
            Спасибо Дмитрию и его команде за круто проделанную работу. Вы
            настоящие профи в своей в теме и мне было приятно работать с вами
          </Review>
        </Slider>
      </div>
    </section>
  );
};
