import { Breakpoints } from "../../types";
import { checkMedia } from "./media";
const breakpoints = (function() {
  "use strict";

  const config = {
    list: null as Breakpoints,
    media: {} as { [key: string]: boolean | string },
  };
  const init = (e: Breakpoints) => {
    config.list = e;
    ["resize", "orientationchange", "load", "fullscreenchange"].forEach(event =>
      window.addEventListener(event, poll)
    );
  };
  const active = (query: string): boolean => {
    return checkMedia(query, config);
  };
  const poll = () => {
  };
  return { init, active, poll };
})();
export default breakpoints;
