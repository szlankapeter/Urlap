class TablaSor{

    #obj={};
    #index
    #tablaElem
    constructor(obj, index, tablaElem){
        this.#obj=obj;
        this.#index = index;
        this.#tablaElem = tablaElem;
        this.#sor();
        this.sorElem = this.#tablaElem.children("tr:last-child");
        this.TorolGomb = this.sorElem.children("td").children(".remove")
        this.TorolGomb.on('click', ()=>{
            this.#esemenyTrigger("törlés");
        })
    }

    #sor(){
        let txt = "<tr>";
         for (const key in this.#obj) {
             txt += `<td>${this.#obj[key]}</td>`;
         }
         txt += `<td><button type="button" class="remove">TÖRÖL</button></td></tr>`;
         txt += "</tr>";
         this.#tablaElem.append(txt);
     }

     #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,{detail:this.#obj['id']});
        window.dispatchEvent(esemenyem);
    }

}export default TablaSor