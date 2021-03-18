import React, { useEffect, useState } from "react";
import classNames from "classnames";

import css from "./Mobile.module.sass";

export const Mobile = () => {
  const [isHidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 3000);
  }, []);

  return (
    <div className={css.mobile}>
      <a
        className={classNames(css.mobileLink, { [css.hidden]: isHidden })}
        href="tel:+79377785555"
        rel="noopener noreferrer"
        target="_blank"
      >
        + 7 937 778-55-55
      </a>
    </div>
  );
};
