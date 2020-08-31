import React from "react";
import { useController } from "react-scroll-parallax";
import "normalize.css/normalize.css";

import { Production } from "./sections/Production/Production";
import { Cases } from "./sections/Cases/Cases";
import { Team } from "./sections/Team/Team";
import { Popup } from "./components/Popup/Popup";
import { PopupProvider } from "./context/popup.context";
import { Services } from "./sections/Services/Services";
import { Reviews } from "./sections/Reviews/Reviews";
import { Planet } from "./sections/Planet/Planet";

export default () => {
  const { parallaxController } = useController();

  return (
    <div
      onLoad={parallaxController.update}
      onScroll={parallaxController.update}
    >
      <PopupProvider>
        <Production />
        <main>
          <Cases />
          <Team />
          <Planet />
          <Services />
          <Reviews />
        </main>
        <Popup />
      </PopupProvider>
    </div>
  );
};
