/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/js/components/area-widget/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/js/components/area-widget/area-widget.js


class AreaWidget {
  constructor(widgetDiv, score, interval) {
    this.widgetDiv = widgetDiv;
    this.score = score;
    this.interval = interval;
    this.onAreaClick = this.onAreaClick.bind(this);
    this.widgetDiv.addEventListener("click", this.onAreaClick);
  }
  initArea() {
    const container = document.createElement("div");
    container.classList.add("container");
    this.widgetDiv.appendChild(container);
    const createdContainer = document.querySelector(".container");
    for (let i = 1; i <= 16; i++) {
      let item = document.createElement("div");
      item.classList.add(`cell-${i}`);
      createdContainer.appendChild(item);
    }
  }
  showImg() {
    const img = new Image();
    img.src = goblin_namespaceObject;
    if (this.currentCell) {
      document.querySelector(`.cell-${this.currentCell} > img`).remove();
    }
    let cell = document.querySelector(`.cell-${this.randCell()}`);
    cell.appendChild(img);
  }
  randCell() {
    let currentCell = Math.floor(Math.random() * 16) + 1;
    this.currentCell = currentCell;
    return this.currentCell;
  }
  onAreaClick(e) {
    if (this.score.fails <= 4) {
      if (e.target.tagName === "IMG") {
        this.score.incHit();
      } else {
        this.score.incFail();
      }
      if (this.score.fails == 5) {
        console.log(this.interval);
        clearInterval(this.interval);
      }
    }
  }
}
;// ./src/js/components/scoreboard/scoreboard.js

class ScoreBoard {
  constructor(widgetDiv) {
    this.widgetDiv = widgetDiv;
    this.hits = 0;
    this.fails = 0;
  }
  initArea() {
    const hits = document.createElement("div");
    hits.classList.add("score");
    hits.classList.add("hits");
    this.widgetDiv.appendChild(hits);
    hits.innerHTML = this.hits;
    const fails = document.createElement("div");
    fails.classList.add("score");
    fails.classList.add("fails");
    this.widgetDiv.appendChild(fails);
    fails.innerHTML = this.fails;
  }
  reDraw() {
    const hits = document.querySelector(".hits");
    hits.innerHTML = this.hits;
    const fails = document.querySelector(".fails");
    fails.innerHTML = this.fails;
  }
  incHit() {
    this.hits += 1;
    this.reDraw();
  }
  incFail() {
    this.fails += 1;
    this.reDraw();
  }
}
;// ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  const score = new ScoreBoard(document.querySelector(".scoreBoard"));
  const interval = setInterval(() => widget.showImg(), 1000);
  const widget = new AreaWidget(document.querySelector(".areaGoblin"), score, interval);
  widget.initArea();
  score.initArea();
});
;// ./src/index.js


// TODO: write your code in app.js
/******/ })()
;