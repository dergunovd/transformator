import React from "react";
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

interface SliderProps extends Partial<ReactElasticCarouselProps> {}
const Arrow: React.FC<RenderArrowProps> = ({ type, onClick }) => (
  <button
    type="button"
    className={classnames(css.arrow, css[type])}
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

export const Slider: React.FC<SliderProps> = ({ children, ...props }) => (
  <div className={css.slider}>
    <Carousel
      renderArrow={Arrow}
      itemPadding={[0]}
      // @ts-ignore
      renderPagination={Pagination}
      {...props}
    >
      {children}
    </Carousel>
  </div>
);
