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
import { Video } from "./sections/Video/Video";
import { Dima } from "./sections/Dima/Dima";
import { Footer } from "./sections/Footer/Footer";
import { Feedback } from "./sections/Feedback/Feedback";

export default () => {
  const { parallaxController } = useController();

  return (
    <div
      onLoad={parallaxController.update}
      onScroll={parallaxController.update}
    >
      <PopupProvider>
        <Production />
        <Video />
        <main>
          <Dima />
          <Cases />
          <Team />
          <Planet />
          <Services />
          <Reviews />
          <Feedback />
          <Footer />
        </main>
        <Popup />
      </PopupProvider>
    </div>
  );
};
