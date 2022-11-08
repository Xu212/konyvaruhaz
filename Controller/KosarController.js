import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/KosarView.js";

class KosarController{
    constructor(){
        const kM = new KosarModel();
        const kV = new KosarView(kM.getKosarTomb());
        
        
    }
}
export default KosarController