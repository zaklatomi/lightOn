//kap egy listát a konstruktorában(lista,szuloelem)
//példányositja a lampakat (9db)

import Light from "../view/Light.js";

export default class GameZone {
    #list = []
    #container
    constructor(list, container) {
        this.#list = list;
        this.#container = container
        this.#container.empty()
        this.write()
    }

    write() {
        this.#list.forEach((elem, id) => {
            new Light(elem, id, this.#container);
        })
    }
}