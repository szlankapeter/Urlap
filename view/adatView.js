import TablaSor from "./TablaSor.js";

class adatView {

    #lista = [];
    constructor(lista, szulElem) {
        this.#lista = lista;
        this.szulElem = szulElem;
        this.szulElem.html('<table></table>');
        this.tablaElem = $("table");
        this.tablazatbaIr();
    }

    tablazatbaIr() {
        /* let txt = "";
        for (let i = 0; i < this.#lista.length; i++) {
            txt += `<tr><td>${this.#lista[i].nev}</td><td>${this.#lista[i].szul}</td></tr>`;
        }
        this.tablaElem.append(txt); */
        this.#lista.forEach((elem, index)=>{
            new TablaSor(elem, index, this.tablaElem);
        })
        
    }

} export default adatView