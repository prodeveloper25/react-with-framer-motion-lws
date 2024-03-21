import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Button from "../components/Button";
import Home from "../components/Home";
import KeyFrame from "../components/KeyFrame";
import ScrollReveal from "../components/ScrollReveal";
import Simple from "../components/Simple";
import TextMotion from "../components/TextMotion";
import TransitionType from "../components/TransitionType";
import Variants from "../components/Variants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "simple",
        element: <Simple />,
      },
      {
        path: "keyframe",
        element: <KeyFrame />,
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "transitiontype",
        element: <TransitionType />,
      },
      {
        path: "textmotion",
        element: <TextMotion />,
      },
      {
        path: "variants",
        element: <Variants />,
      },
      {
        path: "srollreveal",
        element: <ScrollReveal />,
      },
    ],
  },
]);
