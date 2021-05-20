import { TRACKING_ID } from "./Constants";
import ReactGA from "react-ga";

const track = () => {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);
};

export { track };
