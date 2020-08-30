import React from "react";
import { useController } from "react-scroll-parallax";
import "normalize.css/normalize.css";

import { Production } from "./screens/Production/Production";
import { Video } from "./screens/Video/Video";
import { Team } from "./screens/Team/Team";
import { Footer } from "./screens/Footer/Footer";
import { Popup } from "./components/Popup/Popup";
import { PopupProvider } from "./context/popup.context";

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
        <Team />
        <Footer />
        <Popup />
      </PopupProvider>
    </div>
  );
};
