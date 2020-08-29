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
        href="tel:+79255556767"
        rel="noopener noreferrer"
        target="_blank"
      >
        + 7 925 555-67-67
      </a>
    </div>
  );
};
