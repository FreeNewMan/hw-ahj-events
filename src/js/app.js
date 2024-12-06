import AreaWidget from "./components/area-widget/area-widget";
import ScoreBoard from "./components/scoreboard/scoreboard";

document.addEventListener("DOMContentLoaded", () => {
  const score = new ScoreBoard(document.querySelector(".scoreBoard"));
  const interval = setInterval(() => widget.showImg(), 1000);
  const widget = new AreaWidget(
    document.querySelector(".areaGoblin"),
    score,
    interval,
  );
  widget.initArea();
  score.initArea();
});
