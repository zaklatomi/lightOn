//egy lampa megjelenitese konstruktor(ertek,index,szuloelem)
//egy div, ha rákattintok, kiváltódik a kapcsolás esemény
//ekkor vissza kell tudnia adni, hogy hányadik volt ,indexét

export default class Light {
    #value;
    #id;
    #parent = null

    constructor(value, id, parent) {
        this.#value = value;
        this.#id = id;
        this.#parent = parent;

        this.write();
        this.light = $(".light:last");
        if (this.#value) {
            this.light.addClass("on")
        } else {
            this.light.addClass("off")
        }

        this.eventHandler()
    }

    write() {
        this.#parent.append(`<div class="light"></div>`);
    }

    eventHandler() {
        this.light.on("click", () => {
            const e = new CustomEvent("switch", { detail: this.#id });
            window.dispatchEvent(e)
        })
    }

}