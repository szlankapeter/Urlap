import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";
import DataService from "../model/DataService.js";
import adatView from "../view/adatView.js";

class UrlapController {
    constructor() {
        const DS = new DataService();
        DS.getAxiusData("http://localhost:8000/api/writers", this.megjelenit);
        //

        const uModel = new UrlapModel();
        const uView = new UrlapView($(".urlap"), uModel.leiro);
        $(window).on("submit", function (event) {
            console.log(event.detail);
            DS.postAxiusData("http://localhost:8000/api/writers", event.detail);
        })
    }

    megjelenit(lista) {
        console.log(lista);
        new adatView(lista, $(".tabla"));
    }
} export default UrlapController;