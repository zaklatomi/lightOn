//mi jellemzi a program allapotat
// lista=[True, True, True, True, True, True, True, True, True]
//true - fel van kapcsolva a lámpa
//aktIndex az az index amelyik lampara epp rakkattintotam

//getlista visszaadja a listat az aktualis allapottal


export default class LightOnModel {

    #list = [];


    constructor() {

        this.randomizeList();

    }

    getList() {
        return this.#list;
    }

    switchNeighbours(id) {
        this.#list[id] = !this.#list[id]
        const neigbours = this.getNeighbours(id);
        neigbours.forEach(neighbour => {
            this.#list[neighbour] = !this.#list[neighbour]
        })
    }

    getNeighbours(id) {
        const neighbours = {
            0: [1, 3],
            1: [0, 2, 4],
            2: [1, 5],
            3: [0, 4, 6],
            4: [1, 3, 5, 7],
            5: [2, 4, 8],
            6: [3, 7],
            7: [4, 6, 8],
            8: [5, 7],
        }
        return neighbours[id] || [];

    }


    randomizeList() {
        for (let i = 0; i < 9; i++) {
            this.#list.push(Math.random() < 0.5);
        }
    }

}