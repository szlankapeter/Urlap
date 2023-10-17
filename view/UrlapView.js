import NumberElemUrlap from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {

    #leiro = {};
    #urlapElemLista = []
    #osszesElemValidE = true;
    #urlapAdat = {};
    constructor(szulElem, objList) {
        this.szulElem = szulElem;
        this.#leiro = objList;
        this.szulElem.append("<form>")
        this.formElem = this.szulElem.children("form");
        this.#urlapOsszerak();
        this.submitElem = $("#submit");
        this.submitElem.on('click', (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            this.#urlapElemLista.forEach(elem => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            })
            if (this.#osszesElemValidE) {
                console.log("valid az uralp");
                this.#urlapElemLista.forEach(elem => {
                    this.#urlapAdat[elem.key] = elem.value;
                })
                this.#esemeny("submit");
            } else {
                console.log("invalid");
                $(".invalid").css("font-weight", "bold")
            }

        });
    }

    #urlapOsszerak() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                case "number":
                    this.#urlapElemLista.push(new NumberElemUrlap(key, this.#leiro[key], this.formElem))
                    break;
            }
        }
        let txt = `<input type='submit' id='submit' value='OK'>`
        this.formElem.append(txt);
    }

    #esemeny(nev) {
        const esemeny = new CustomEvent(nev, { detail: this.#urlapAdat });
        dispatchEvent(esemeny);
    }

} export default UrlapView;