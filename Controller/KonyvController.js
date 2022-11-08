import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/KosarView.js";



class KonyvController {
    constructor() {
        const kosarModel = new KosarModel();
        const konyvmodel = new KonyvModel();
        
        $("#admin").on("click",()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        })
        $("#publikus").on("click",()=>{
            konyvmodel.adatBe("../adat.json", this.konyvPublikusAdatok);
           
        })
        $("#kosarMenu").on("click",()=>{
            const tomb = kosarModel.getKosarTomb();
            console.log(tomb)
            this.kosarAdatok(kosarModel.getKosarTomb())
        })
        
        $(window).on("modosit",(event)=>{
            console.log("controllerben, módosít", event.detail)
            konyvmodel.adatModosit(event.detail)
        })
        $(window).on("torles",(event)=>{
            console.log("controllerben, töröl", event.detail)
            konyvmodel.adatTorl(event.detail)
        })
        $(window).on("kosar",(event)=>{
            kosarModel.kosarba(event.detail);
        })
    }
    kosarAdatok(tomb){
        let szuloElem = $("#kosarTartalma");
        new KosarView(szuloElem,tomb);
    }
    konyvAdatok(tomb) {
        let szuloElem = $("main"); 
        new KonyvekView(tomb,szuloElem);
    }
    konyvPublikusAdatok(tomb) {
        let szuloElem = $("main"); 
        new KonyvekPublicView(tomb,szuloElem);
    }
}

export default KonyvController;