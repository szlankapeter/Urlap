import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";

class UrlapController{
    constructor(){
        const uModel = new UrlapModel();
        const uView = new UrlapView($(".urlap"), uModel.leiro);
        $(window).on("submit", function(event){
            console.log(event.detail)
        })
    }
}export default UrlapController;