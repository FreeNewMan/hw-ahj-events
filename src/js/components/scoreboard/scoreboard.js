import "./score.css";

export default class ScoreBoard {
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
