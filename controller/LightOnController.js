//peldanyositja a modellt, és a viewt: jatekter
//feliratkozik a Kapcsol sajatesemenyunkre
//itt fogja meghivogatni a modell tagfuggvenyeit

import LightOnModel from "./model/LightOnModel.js";
import GameZone from "./view/GameZone.js";

export default class LightOnController {
  constructor() {
    this.loModel = new LightOnModel();
    let list = this.loModel.getList();
    this.parent = $(".tartalom");
    new GameZone(list, this.parent);
    this.switchEvent()
  }

  switchEvent() {
    $(window).on("switch", (event) => {
      //event.detail - hanyadik elemre katt
      this.loModel.switchNeighbours(event.detail)
      let list = this.loModel.getList();
      new GameZone(list, this.parent)
    })
  }
}
