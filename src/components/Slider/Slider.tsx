import React, { useRef } from "react";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";
import classnames from "classnames";

import css from "./Slider.module.sass";

type RenderArrowProps = {
  type: "PREV" | "NEXT";
  onClick: () => void;
};

type RenderPaginationProps = {
  pages: number[];
  activePage: number;
  onClick: (indicatorId: string) => void;
};

const Arrow = (): React.FC<RenderArrowProps> => ({ type, onClick }) => (
  <button
    type="button"
    className={classnames(css.arrow, css[type], type)}
    onClick={onClick}
  />
);

type IPagination = (props: RenderPaginationProps) => JSX.Element;
const Pagination: IPagination = ({ pages, activePage, onClick }) => (
  <nav className={classnames(css.pagination, "pagination")}>
    {pages.map((page) => (
      <span
        key={page}
        className={classnames(css.paginationItem, {
          [css.paginationActive]: activePage === page,
        })}
        onClick={() => onClick(`${page}`)}
      />
    ))}
  </nav>
);

export const Slider: React.FC<Partial<ReactElasticCarouselProps>> = ({
  children,
  ...props
}) => {
  const slider = useRef(null);
  return (
    <div className={css.slider}>
      <Carousel
        ref={slider}
        renderArrow={Arrow()}
        itemPadding={[0]}
        // @ts-ignore
        renderPagination={Pagination}
        onPrevStart={(prevItemObject, nextItemObject) => {
          if (prevItemObject.index === nextItemObject.index) {
            // TODO: ебучий костыль
            // @ts-ignore
            slider.current?.goTo(children.length);
          }
        }}
        onNextStart={(prevItemObject, nextItemObject) => {
          if (prevItemObject.index === nextItemObject.index) {
            // @ts-ignore
            slider.current?.goTo(0);
          }
        }}
        {...props}
      >
        {children}
      </Carousel>
    </div>
  );
};
